import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
process.env.NODE_ENV = "production";
const { render } = await import("../dist-ssr/entry-server.js");

const output = path.resolve("dist");
const template = await readFile(path.join(output, "index.html"), "utf8");
const routes = JSON.parse(await readFile(path.join(output, "prerender-routes.json"), "utf8"));
const manifest = JSON.parse(await readFile(path.join(output, ".vite/manifest.json"), "utf8"));
const entry = Object.values(manifest).find(item => item.isEntry);
function assetsFor(key, seen = new Set()) {
  if (seen.has(key) || !manifest[key]) return { css: [], js: [] };
  seen.add(key);
  const item = manifest[key];
  const result = { css: [...(item.css ?? [])], js: [item.file] };
  for (const dependency of item.imports ?? []) {
    const assets = assetsFor(dependency, seen);
    result.css.push(...assets.css); result.js.push(...assets.js);
  }
  return result;
}
function pageKey(route) {
  if (route.startsWith("/blog/")) return "src/pages/blog/[id].tsx";
  return ({ "/": "src/pages/index.tsx", "/project": "src/pages/proj.tsx", "/about": "src/pages/about.tsx", "/contact": "src/pages/contact.tsx", "/blog": "src/pages/blog/index.tsx", "/sports": "src/pages/sports.tsx", "/vehrt": "src/pages/vehrt.tsx" })[route] ?? "src/pages/not-found.tsx";
}
let homeBytes = 0;
for (const route of [...routes, "/404"]) {
  const { html, head, attributes } = await render(route);
  const assets = assetsFor(pageKey(route));
  const existingCss = new Set(entry.css ?? []);
  const css = [...new Set(assets.css)].filter(file => !existingCss.has(file)).map(file => `<link rel="stylesheet" href="/${file}">`).join("\n");
  // Preload only code needed by this page. Article code is never preloaded in home or archive.
  const existingJs = new Set(assetsFor("src/main.tsx").js);
  const preload = [...new Set(assets.js)].filter(file => !existingJs.has(file)).map(file => `<link rel="modulepreload" crossorigin href="/${file}">`).join("\n");
  const document = template.replace('<html lang="it">', `<html ${attributes}>`).replace("<!--app-head-->", () => `${head}\n${css}\n${preload}`).replace("<!--app-html-->", () => html);
  const file = route === "/" ? "index.html" : `${route.slice(1)}.html`;
  await mkdir(path.dirname(path.join(output, file)), { recursive: true });
  await writeFile(path.join(output, file), document);
  if (route === "/") {
    const files = new Set([...existingJs, ...assets.js]);
    const sizes = await Promise.all([...files].map(async file => [file, (await readFile(path.join(output, file))).byteLength]));
    homeBytes = sizes.reduce((total, [, bytes]) => total + bytes, 0);
    await writeFile(path.join(output, "bundle-report.json"), JSON.stringify({ homeJavaScriptBytes: homeBytes, files: Object.fromEntries(sizes) }, null, 2));
  }
}
console.log(`Prerendered ${routes.length} pages + 404. Home JavaScript: ${(homeBytes / 1000).toFixed(1)} kB (uncompressed).`);
