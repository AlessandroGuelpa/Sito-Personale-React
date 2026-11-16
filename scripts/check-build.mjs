import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";

const dist = path.resolve("dist");
const siteUrl = "https://alessandroguelpa.it";
const routes = JSON.parse(
  await readFile(path.join(dist, "prerender-routes.json"), "utf8"),
);
const canonicalUrls = new Set(routes.map((route) => `${siteUrl}${route === "/" ? "" : route}`));
const archivePath = "/en/blog";
const englishArticles = routes.filter((route) => /^\/en\/blog\/[^/]+$/.test(route));
const translatedFiles = (await readdir("src/data/blog-en")).filter((file) => file.endsWith(".md"));
assert.equal(englishArticles.length, translatedFiles.length, "Every English article must have a prerendered route");
const renderedAlternates = new Map();
const alternatesByRoute = new Map();
for (const [it, en] of [
  ["/", "/en"],
  ["/project", "/en/projects"],
  ["/about", "/en/about"],
  ["/contact", "/en/contact"],
  ["/blog", archivePath],
  ["/blog/shopify-inventario-scritture-concorrenti", "/en/blog/shopify-erp-inventory-sync"],
]) {
  const alternates = { it: `${siteUrl}${it === "/" ? "" : it}`, en: `${siteUrl}${en}` };
  assert(routes.includes(it) && routes.includes(en), `Missing translated routes: ${it} and ${en}`);
  alternatesByRoute.set(it, alternates);
  alternatesByRoute.set(en, alternates);
}
const titles = new Set();
const checkedAssets = new Set();
for (const route of [...routes, "/404"]) {
  const file = route === "/" ? "index.html" : `${route.slice(1)}.html`;
  const html = await readFile(path.join(dist, file), "utf8");
  const head = html.split("</head>", 1)[0];
  const englishArticle = englishArticles.includes(route);
  const englishArchive = route === archivePath || route.startsWith(`${archivePath}/page/`);
  const english = route === "/en" || route.startsWith("/en/");
  const title = head.match(/<title[^>]*>([\s\S]*?)<\/title>/)?.[1];
  assert(title, `Missing title: ${route}`);
  assert(!titles.has(title), `Duplicate title: ${route}`);
  titles.add(title);
  const canonical = head.match(/<link\b[^>]*\brel="canonical"[^>]*>/g) ?? [];
  assert.equal(canonical.length, 1, `Canonical count: ${route}`);
  assert.equal(
    canonical[0].match(/\bhref="([^"]+)"/)?.[1],
    `${siteUrl}${route === "/" ? "" : route}`,
    `Canonical URL: ${route}`,
  );
  const alternates = [...head.matchAll(/<link\b[^>]*\bhreflang="([^"]+)"[^>]*>/gi)];
  const expectedAlternates = alternatesByRoute.get(route);
  const translated = expectedAlternates || englishArticle || (route.startsWith("/blog/") && alternates.length > 0);
  assert.equal(alternates.length, translated ? 2 : 0, `Language alternate count: ${route}`);
  if (translated) {
    const pair = {};
    for (const [tag, language] of alternates) {
      assert.equal(tag.match(/\brel="([^"]+)"/)?.[1], "alternate");
      assert(language === "it" || language === "en", `Language code: ${route}`);
      pair[language] = tag.match(/\bhref="([^"]+)"/)?.[1];
      assert(canonicalUrls.has(pair[language]), `Language alternate must have a prerendered page: ${route} (${language})`);
    }
    assert(pair.it && pair.en, `Both language alternates must exist: ${route}`);
    assert.equal(pair[english ? "en" : "it"], `${siteUrl}${route === "/" ? "" : route}`, `Self alternate: ${route}`);
    if (expectedAlternates) assert.deepEqual(pair, expectedAlternates, `Language alternate URL: ${route}`);
    renderedAlternates.set(pair[english ? "en" : "it"], pair);
  }
  if (translated || englishArchive) {
    const language = english ? "en" : "it";
    assert.match(html, new RegExp(`<html\\b[^>]*\\blang="${language}"`), `Document language: ${route}`);
    assert.match(head, /name="robots"[^>]*content="index, follow|content="index, follow[^>]*name="robots"/, `Indexable route: ${route}`);
  }
  assert.equal(
    (html.match(/<h1(?:\s|>)/g) || []).length,
    1,
    `H1 count: ${route}`,
  );
  assert(
    html.includes('id="main-content"'),
    `Missing content landmark: ${route}`,
  );
  assert(!html.includes("<!--app-html-->"), `Unrendered HTML: ${route}`);
  assert(!html.includes("opacity:0"), `Initially invisible content: ${route}`);
  const image = html
    .match(/<meta[^>]*property="og:image"[^>]*>/)?.[0]
    .match(/content="([^"]+)"/)?.[1];
  assert(image, `Missing share image: ${route}`);
  for (const [, value] of html.matchAll(
    /(?:src|href)="(\/(?:assets|fonts|og|vehrt|projects)\/[^"?#]+)"/g,
  )) {
    if (checkedAssets.has(value)) continue;
    await stat(path.join(dist, value));
    checkedAssets.add(value);
  }
  for (const [, json] of html.matchAll(
    /<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
  ))
    JSON.parse(json);
  if (englishArticle || (route.startsWith("/blog/") && !route.startsWith("/blog/temi/") && !route.startsWith("/blog/page/"))) {
    const sectionIds = [...html.matchAll(/id="(sezione-[^"]+)"/g)].map((match) => match[1]);
    assert.equal(new Set(sectionIds).size, sectionIds.length, `Duplicate article anchors: ${route}`);
    for (const [, target] of html.matchAll(/href="#(sezione-[^"]+)"/g)) {
      assert(sectionIds.includes(target), `Broken article outline link: ${route}#${target}`);
    }
    assert(
      /content="article"[^>]*property="og:type"|property="og:type"[^>]*content="article"/.test(
        html,
      ),
      `Article metadata: ${route}`,
    );
    if (englishArticle) {
      assert(html.includes('"inLanguage":"en"'), `Article schema language: ${route}`);
      assert(html.includes('class="article-body'), `Translated article body: ${route}`);
    }
  }
  if (englishArticle || englishArchive) {
    for (const [, href] of html.matchAll(/\bhref="(\/(?:en\/)?blog(?:\/[^"?#]*)?)(?:[?#][^"]*)?"/g)) {
      assert(routes.includes(href), `Broken blog link on ${route}: ${href}`);
    }
  }
  if (route === "/404")
    assert(html.includes('content="noindex, follow"'), "404 must be noindex");
}
for (const [url, pair] of renderedAlternates) {
  assert.deepEqual(renderedAlternates.get(pair.it), pair, `Italian reciprocal alternate for ${url}`);
  assert.deepEqual(renderedAlternates.get(pair.en), pair, `English reciprocal alternate for ${url}`);
}
const sitemap = await readFile(path.join(dist, "sitemap.xml"), "utf8");
for (const route of routes) {
  assert(sitemap.includes(`<loc>${siteUrl}${route === "/" ? "" : route}</loc>`), `Sitemap missing route: ${route}`);
}
for (const route of routes.filter(route => route.startsWith("/blog/temi/") || route.startsWith("/blog/page/"))) {
  const html = await readFile(path.join(dist, `${route.slice(1)}.html`), "utf8");
  assert(html.includes('href="/blog/'), `Archive missing internal links: ${route}`);
}
const home = await readFile(path.join(dist, "index.html"), "utf8");
const blog = await readFile(path.join(dist, "blog.html"), "utf8");
const englishBlog = await readFile(path.join(dist, "en/blog.html"), "utf8");
const featured = home.match(
  /<section[^>]+aria-labelledby="featured-title"[\s\S]*?<\/section>/,
)?.[0];
assert(featured, "Home should showcase selected projects");
assert.equal(
  (featured.match(/<article/g) || []).length,
  3,
  "Home should showcase 3 selected projects",
);
assert(
  home.indexOf('aria-labelledby="featured-title"') <
    home.indexOf('aria-labelledby="expertise-title"'),
  "Projects must precede skills on home",
);
assert.equal(
  (blog.match(/<article/g) || []).length,
  12,
  "Archive must paginate its initial render",
);
assert.equal(
  (englishBlog.match(/<article/g) || []).length,
  Math.min(12, englishArticles.length),
  "The English archive must paginate its initial render",
);
if (englishArticles.length > 12) {
  assert(englishBlog.includes('href="/en/blog/page/2"'), "The next page must have a crawlable link");
}
const bundle = JSON.parse(
  await readFile(path.join(dist, "bundle-report.json"), "utf8"),
);
assert(
  bundle.homeJavaScriptBytes <= 709300 * 0.75,
  "Home JS must be at least 25% below the audited 709300-byte baseline",
);
assert(
  !Object.keys(bundle.files).some((file) => /blogPosts|vendor-ui/.test(file)),
  "Article bodies or UI framework in home graph",
);
assert(
  (await stat(path.join(dist, "balleriniesapori.com.webp"))).size < 150000,
  "Project cover budget",
);
assert(
  (await stat(path.join(dist, "projects/shopify-mapper.webp"))).size < 150000,
  "App screenshot budget",
);
console.log(
  `Verified ${routes.length} prerendered pages + 404, unique SEO, initial content, ${checkedAssets.size} assets, paginated blog and home asset budgets.`,
);
