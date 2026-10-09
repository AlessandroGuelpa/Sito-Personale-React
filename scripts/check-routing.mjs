import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";

const server = spawn(process.execPath, ["scripts/preview.mjs"], { env: { ...process.env, PORT: "0" }, stdio: ["ignore", "pipe", "inherit"] });
try {
  const [chunk] = await once(server.stdout, "data");
  const url = chunk.toString().match(/http:\/\/localhost:\d+/)?.[0];
  assert(url, "Preview server must announce its URL");
  const cases = [
    ["/", 200], ["/project", 200], ["/about", 200], ["/contact", 200], ["/blog", 200], ["/sports", 200], ["/vehrt", 200],
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
      if (expected === 404) assert(body.includes("noindex"), `Error metadata for ${route}`);
    }
  }
  console.log(`Verified ${cases.length} HTTP routes, legacy redirects, and missing-page/asset 404 responses.`);
} finally { server.kill(); }
