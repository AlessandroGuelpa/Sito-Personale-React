import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";

const dist = path.resolve("dist");
const siteUrl = "https://alessandroguelpa.it";
const routes = JSON.parse(
  await readFile(path.join(dist, "prerender-routes.json"), "utf8"),
);
const alternatesByRoute = new Map();
for (const [it, en] of [
  ["/", "/en"],
  ["/project", "/en/projects"],
  ["/about", "/en/about"],
  ["/contact", "/en/contact"],
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
  assert.equal(alternates.length, expectedAlternates ? 2 : 0, `Language alternate count: ${route}`);
  if (expectedAlternates) {
    for (const [tag, language] of alternates) {
      assert.equal(tag.match(/\brel="([^"]+)"/)?.[1], "alternate");
      assert.equal(tag.match(/\bhref="([^"]+)"/)?.[1], expectedAlternates[language], `Language alternate URL: ${route} (${language})`);
    }
    assert.equal(new Set(alternates.map(([, language]) => language)).size, 2, `Duplicate language alternate: ${route}`);
    const language = route.startsWith("/en") ? "en" : "it";
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
  const englishArticle = route.startsWith("/en/blog/");
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
      assert(html.includes("changeFromQuantity"), `Translated article body: ${route}`);
    }
  }
  if (route === "/404")
    assert(html.includes('content="noindex, follow"'), "404 must be noindex");
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
