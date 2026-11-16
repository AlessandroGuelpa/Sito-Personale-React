import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

import { blogPosts } from "./src/data/blogPosts";
import { englishBlogPosts } from "./src/data/blogPosts.en";
import { blogRoots, portfolioRoutes } from "./src/config/locales";
import { effectiveArticleDates } from "./src/utils/blog-dates";
import {
  BLOG_HUBS,
  BLOG_PAGE_SIZE,
  blogHubForPost,
  blogArchivePath,
} from "./src/config/blog-hubs";
import { buildExcerpt, readingTimeMinutes, sitePageUrl } from "./src/utils/seo";
import { selectRelatedPosts } from "./src/utils/related-posts";

// Keep article bodies out of the home and archive bundles without changing the authoring workflow.
function blogMetadata(): Plugin {
  const index = [...blogPosts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((post) => ({
      id: post.id,
      title: post.title,
      date: post.date,
      updatedAt: post.updatedAt,
      firstPublishedAt: post.firstPublishedAt,
      category: post.category,
      hub: post.hub,
      excerpt: buildExcerpt(post, 180),
      tags: post.tags ?? [],
      minutes: readingTimeMinutes(post.content),
      icon: typeof post.icon === "string" ? post.icon : undefined,
    }));
  const postsByPath = new Map([
    ...blogPosts.map((post) => [`${blogRoots.it}/${post.id}`, post] as const),
    ...Object.entries(englishBlogPosts),
  ]);
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
        return `export const blogLoaders = {${[...postsByPath.keys()].map((path) => `${JSON.stringify(path)}: () => import(${JSON.stringify(`virtual:blog-post${path}`)})`).join(",")}};`;
      if (id.startsWith("\0virtual:blog-post/")) {
        const path = id.slice("\0virtual:blog-post".length);
        const post = postsByPath.get(path);

        if (post) {
          const relatedPosts = path.startsWith(`${blogRoots.it}/`)
            ? selectRelatedPosts({ ...post, tags: post.tags ?? [] }, index)
            : [];

          return `export const post = ${JSON.stringify({ ...post, icon: undefined })}; export const relatedPosts = ${JSON.stringify(relatedPosts)};`;
        }
      }
    },
    generateBundle() {
      if (ssr) return;
      const hubRoutes = BLOG_HUBS.flatMap((hub) => {
        const count = index.filter(
          (post) => blogHubForPost(post) === hub.slug,
        ).length;
        const pages = Math.max(1, Math.ceil(count / BLOG_PAGE_SIZE));
        return Array.from({ length: pages }, (_, i) =>
          blogArchivePath(i + 1, hub.slug),
        );
      });
      const blogPages = Array.from(
        { length: Math.max(0, Math.ceil(index.length / BLOG_PAGE_SIZE) - 1) },
        (_, i) => blogArchivePath(i + 2),
      );
      const routes = [
        ...Object.values(portfolioRoutes).map(({ it }) => it),
        blogRoots.it,
        "/sports",
        "/vehrt",
        ...hubRoutes,
        ...blogPages,
        ...index.map((post) => `${blogRoots.it}/${post.id}`),
        ...Object.values(portfolioRoutes).map(({ en }) => en),
        ...Object.keys(englishBlogPosts),
      ];

      this.emitFile({
        type: "asset",
        fileName: "prerender-routes.json",
        source: JSON.stringify(routes),
      });
      const urls = routes.map((path) => {
        const post = postsByPath.get(path);
        const lastmod = post
          ? `<lastmod>${effectiveArticleDates(post).modifiedAt}</lastmod>`
          : "";

        return `  <url><loc>${sitePageUrl(path)}</loc>${lastmod}</url>`;
      });
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`,
      });
    },
  };
}

export default defineConfig({
  server: { allowedHosts: ["terminal.local"] },
  plugins: [react(), tsconfigPaths(), blogMetadata()],
  ssr: { noExternal: ["react-helmet-async"] },
  build: {
    manifest: true,
  },
});
