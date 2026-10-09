import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";

const dist = path.resolve("dist");
const routes = JSON.parse(await readFile(path.join(dist, "prerender-routes.json"), "utf8"));
const titles = new Set();
let checkedAssets = new Set();
for (const route of [...routes, "/404"]) {
  const file = route === "/" ? "index.html" : `${route.slice(1)}.html`;
  const html = await readFile(path.join(dist, file), "utf8");
  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/)?.[1];
  assert(title, `Missing title: ${route}`);
  assert(!titles.has(title), `Duplicate title: ${route}`); titles.add(title);
  assert.equal((html.match(/rel="canonical"/g) || []).length, 1, `Canonical count: ${route}`);
  assert(html.includes(`href="https://alessandroguelpa.it${route === "/" ? "" : route}"`), `Canonical URL: ${route}`);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `H1 count: ${route}`);
  assert(html.includes('id="main-content"'), `Missing content landmark: ${route}`);
  assert(!html.includes('<!--app-html-->'), `Unrendered HTML: ${route}`);
  assert(!html.includes('opacity:0'), `Initially invisible content: ${route}`);
  const image = html.match(/<meta[^>]*property="og:image"[^>]*>/)?.[0].match(/content="([^"]+)"/)?.[1];
  assert(image, `Missing share image: ${route}`);
  for (const [, value] of html.matchAll(/(?:src|href)="(\/(?:assets|fonts|og|vehrt)\/[^"?#]+)"/g)) {
    if (checkedAssets.has(value)) continue;
    await stat(path.join(dist, value)); checkedAssets.add(value);
  }
  for (const [, json] of html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) JSON.parse(json);
  if (route.startsWith("/blog/")) assert(/content="article"[^>]*property="og:type"|property="og:type"[^>]*content="article"/.test(html), `Article metadata: ${route}`);
  if (route === "/404") assert(html.includes('content="noindex, follow"'), "404 must be noindex");
}
const home = await readFile(path.join(dist, "index.html"), "utf8");
const blog = await readFile(path.join(dist, "blog.html"), "utf8");
assert.equal((home.match(/<article/g) || []).length, 8, "Home should contain 3 expertise cards, 2 projects, and 3 article previews");
assert.equal((blog.match(/<article/g) || []).length, 12, "Archive must paginate its initial render");
const bundle = JSON.parse(await readFile(path.join(dist, "bundle-report.json"), "utf8"));
assert(bundle.homeJavaScriptBytes < 532307, "Home JS must be at least 25% below the audited 709743-byte baseline");
assert(!Object.keys(bundle.files).some(file => /blogPosts|vendor-ui/.test(file)), "Article bodies or UI framework in home graph");
assert((await stat(path.join(dist, "balleriniesapori.com.webp"))).size < 150000, "Project cover budget");
console.log(`Verified ${routes.length} prerendered pages + 404, unique SEO, initial content, ${checkedAssets.size} assets, paginated blog and home asset budgets.`);
