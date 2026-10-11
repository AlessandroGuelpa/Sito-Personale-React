import http from "node:http";
import handler from "serve-handler";
import config from "../vercel.json" with { type: "json" };

const server = http.createServer((request, response) => handler(request, response, {
  public: "dist", cleanUrls: true, trailingSlash: false,
  redirects: config.redirects.map(rule => ({ source: rule.source, destination: rule.destination, type: 308 })),
}));
server.listen(Number(process.env.PORT || 4173), "0.0.0.0", () => console.log(`Static preview: http://localhost:${server.address().port}`));
