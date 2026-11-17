import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";

const server = spawn(process.execPath, ["scripts/preview.mjs"], { env: { ...process.env, PORT: "0" }, stdio: ["ignore", "pipe", "inherit"] });
try {
  const [chunk] = await once(server.stdout, "data");
  const url = chunk.toString().match(/http:\/\/localhost:\d+/)?.[0];
  assert(url, "Preview server must announce its URL");
  const cases = [
    ["/", 200], ["/project", 200], ["/about", 200], ["/contact", 200], ["/blog", 200], ["/blog/page/2", 200], ["/blog/temi/shopify-integrazioni", 200], ["/blog/temi/scienza-passioni", 200], ["/sports", 200], ["/vehrt", 200],
    ["/en", 200], ["/en/projects", 200], ["/en/about", 200], ["/en/contact", 200], ["/en/sports", 200],
    ["/en/blog", 200], ["/en/blog/page/2", 200], ["/en/blog/page/999", 404],
    ["/en/blog/topics/shopify-integrations", 200], ["/en/blog/topics/rails-backend/page/2", 200],
    ["/en/blog/topics/not-a-real-topic", 404], ["/en/blog/topics/rails-backend/page/02", 404],
    ["/en/404", 404], ["/en/not-a-real-page?test=404", 404],
    ["/en/blog/shopify-erp-inventory-sync", 200], ["/en/blog/not-a-real-post", 404],
    ["/blog/principio-di-archimede-e-i-container-docker", 200], ["/not-a-real-page", 404], ["/blog/not-a-real-post", 404],
    ["/dj-qbit", 308, "/vehrt"], ["/projects", 308, "/project"], ["/compiler", 308, "/"], ["/javascript-compiler", 308, "/"],
    ["/assets/missing.js", 404],
  ];
  for (const [route, expected, destination] of cases) {
    const response = await fetch(`${url}${route}`, { redirect: "manual" });
    assert.equal(response.status, expected, `Status for ${route}`);
    if (destination) assert.equal(new URL(response.headers.get("location"), url).pathname, destination, `Redirect for ${route}`);
    else {
      const body = await response.text();
      assert(body.includes("<h1"), `Rendered content for ${route}`);
      if (expected === 404) {
        const english = route.startsWith("/en/");
        assert(body.includes("noindex"), `Error metadata for ${route}`);
        assert.match(body, new RegExp(`<html\\b[^>]*\\blang="${english ? "en" : "it"}"`), `Error language for ${route}`);
        assert(body.includes(english ? "Page not found" : "Pagina non trovata"), `Localised error text for ${route}`);
      }
    }
  }
  console.log(`Verified ${cases.length} HTTP routes, legacy redirects, and missing-page/asset 404 responses.`);
} finally { server.kill(); }
