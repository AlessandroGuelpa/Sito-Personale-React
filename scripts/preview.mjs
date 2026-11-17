import http from "node:http";
import { readFile } from "node:fs/promises";
import handler from "serve-handler";
import config from "../vercel.json" with { type: "json" };

const englishError = config.routes.find((route) => route.status === 404);
const englishPath = new RegExp(`^${englishError.src}$`);
const englishErrorBody = await readFile(new URL(`../dist${englishError.dest}.html`, import.meta.url));
const options = {
  public: "dist", cleanUrls: true, trailingSlash: false,
  redirects: config.redirects.map(rule => ({ source: rule.source, destination: rule.destination, type: 308 })),
};
const server = http.createServer((request, response) => {
  const pathname = request.url.split("?", 1)[0];
  const methods = englishPath.test(pathname)
    ? {
        sendError(_file, res) {
          res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
          res.end(request.method === "HEAD" ? undefined : englishErrorBody);
        },
      }
    : undefined;

  return handler(request, response, options, methods);
});
server.listen(Number(process.env.PORT || 4173), "0.0.0.0", () => console.log(`Static preview: http://localhost:${server.address().port}`));
