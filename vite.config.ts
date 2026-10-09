import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

import { blogPosts } from "./src/data/blogPosts";
import { buildExcerpt, readingTimeMinutes } from "./src/utils/seo";

// Keep article bodies out of the home and archive bundles without changing the authoring workflow.
function blogMetadata(): Plugin {
  const index = [...blogPosts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((post) => ({
      id: post.id,
      title: post.title,
      date: post.date,
      excerpt: buildExcerpt(post, 180),
      tags: post.tags ?? [],
      minutes: readingTimeMinutes(post.content),
      icon: typeof post.icon === "string" ? post.icon : undefined,
    }));
  let ssr = false;

  return {
    name: "blog-metadata",
    configResolved(config) {
      ssr = Boolean(config.build.ssr);
    },
    resolveId(id) {
      if (
        [
          "virtual:blog-index",
          "virtual:home-posts",
          "virtual:blog-loaders",
        ].includes(id) ||
        id.startsWith("virtual:blog-post/")
      )
        return `\0${id}`;
    },
    load(id) {
      if (id === "\0virtual:blog-index")
        return `export const blogIndex = ${JSON.stringify(index)};`;
      if (id === "\0virtual:home-posts")
        return `export const latestPosts = ${JSON.stringify(index.slice(0, 3))};`;
      if (id === "\0virtual:blog-loaders")
        return `export const blogLoaders = {${blogPosts.map((post) => `${JSON.stringify(post.id)}: () => import(${JSON.stringify(`virtual:blog-post/${post.id}`)})`).join(",")}};`;
      if (id.startsWith("\0virtual:blog-post/")) {
        const post = blogPosts.find(
          (post) => post.id === id.slice("\0virtual:blog-post/".length),
        );

        if (post)
          return `export const post = ${JSON.stringify({ ...post, icon: undefined })};`;
      }
    },
    generateBundle() {
      if (ssr) return;
      this.emitFile({
        type: "asset",
        fileName: "prerender-routes.json",
        source: JSON.stringify([
          "/",
          "/project",
          "/about",
          "/contact",
          "/blog",
          "/sports",
          "/vehrt",
          ...index.map((post) => `/blog/${post.id}`),
        ]),
      });
      const urls = [
        "",
        "/project",
        "/about",
        "/contact",
        "/blog",
        "/sports",
        "/vehrt",
      ].map(
        (path) => `  <url><loc>https://alessandroguelpa.it${path}</loc></url>`,
      );

      urls.push(
        ...index.map(
          (post) =>
            `  <url><loc>https://alessandroguelpa.it/blog/${post.id}</loc><lastmod>${post.date}</lastmod></url>`,
        ),
      );
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`,
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), tsconfigPaths(), blogMetadata()],
  ssr: { noExternal: ["react-helmet-async"] },
  build: {
    manifest: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes("node_modules/framer-motion") ||
            id.includes("node_modules/motion-")
          )
            return "vendor-motion";
        },
      },
    },
  },
});
