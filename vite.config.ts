import { readFileSync } from "node:fs";

import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

import { blogPosts, type BlogPost } from "./src/data/blogPosts";
import { englishBlogMetadata } from "./src/data/blogPosts.en";
import {
  blogRoots,
  portfolioRoutes,
  siteLanguages,
  translatedArticleSlugs,
} from "./src/config/locales";
import { effectiveArticleDates } from "./src/utils/blog-dates";
import {
  BLOG_HUBS,
  BLOG_PAGE_SIZE,
  blogHubForPost,
  blogArchivePath,
} from "./src/config/blog-hubs";
import { buildExcerpt, readingTimeMinutes, sitePageUrl } from "./src/utils/seo";
import { selectRelatedPosts } from "./src/utils/related-posts";

function summarize(posts: BlogPost[]) {
  return [...posts]
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
}

// Keep article bodies out of the home and archive bundles.
function blogMetadata(): Plugin {
  const originals = new Map(blogPosts.map((post) => [post.id, post]));
  const translatedIds = Object.keys(
    translatedArticleSlugs,
  ) as (keyof typeof translatedArticleSlugs)[];
  const englishPosts = translatedIds.map((originalId) => {
    const original = originals.get(originalId);

    if (!original)
      throw new Error(`Missing Italian article for translation: ${originalId}`);

    return {
      ...englishBlogMetadata[originalId],
      id: translatedArticleSlugs[originalId],
      category: original.category,
      hub: original.hub,
      coverImage: original.coverImage,
      content: readFileSync(
        new URL(`./src/data/blog-en/${originalId}.md`, import.meta.url),
        "utf8",
      ),
    };
  });
  if (
    new Set(englishPosts.map((post) => post.id)).size !== englishPosts.length
  ) {
    throw new Error("The English blog contains duplicate slugs");
  }
  const index = { it: summarize(blogPosts), en: summarize(englishPosts) };
  const postsByPath = new Map<string, BlogPost>([
    ...blogPosts.map((post) => [`${blogRoots.it}/${post.id}`, post] as const),
    ...englishPosts.map(
      (post) => [`${blogRoots.en}/${post.id}`, post] as const,
    ),
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
          "virtual:english-blog-index",
          "virtual:home-posts",
          "virtual:blog-loaders",
        ].includes(id) ||
        id.startsWith("virtual:blog-post/")
      )
        return `\0${id}`;
    },
    load(id) {
      if (id === "\0virtual:blog-index")
        return `export const blogIndex = ${JSON.stringify(index.it)};`;
      if (id === "\0virtual:english-blog-index")
        return `export const blogIndex = ${JSON.stringify(index.en)};`;
      if (id === "\0virtual:home-posts")
        return `export const latestPosts = ${JSON.stringify(index.it.slice(0, 3))};`;
      if (id === "\0virtual:blog-loaders")
        return `export const blogLoaders = {${[...postsByPath.keys()].map((path) => `${JSON.stringify(path)}: () => import(${JSON.stringify(`virtual:blog-post${path}`)})`).join(",")}};`;
      if (id.startsWith("\0virtual:blog-post/")) {
        const path = id.slice("\0virtual:blog-post".length);
        const post = postsByPath.get(path);

        if (post) {
          const language = path.startsWith(`${blogRoots.en}/`) ? "en" : "it";
          const relatedPosts = selectRelatedPosts(
            { ...post, tags: post.tags ?? [] },
            index[language],
          );

          return `export const post = ${JSON.stringify({ ...post, icon: undefined })}; export const relatedPosts = ${JSON.stringify(relatedPosts)};`;
        }
      }
    },
    generateBundle() {
      if (ssr) return;
      const hubRoutes = BLOG_HUBS.flatMap((hub) => {
        const count = index.it.filter(
          (post) => blogHubForPost(post) === hub.slug,
        ).length;
        const pages = Math.max(1, Math.ceil(count / BLOG_PAGE_SIZE));
        return Array.from({ length: pages }, (_, i) =>
          blogArchivePath(i + 1, hub.slug),
        );
      });
      const blogPages = siteLanguages.flatMap((language) =>
        Array.from(
          {
            length: Math.max(
              0,
              Math.ceil(index[language].length / BLOG_PAGE_SIZE) - 1,
            ),
          },
          (_, i) => blogArchivePath(i + 2, undefined, language),
        ),
      );
      const routes = [
        ...Object.values(portfolioRoutes).map(({ it }) => it),
        blogRoots.it,
        "/sports",
        "/vehrt",
        ...hubRoutes,
        ...blogPages,
        ...index.it.map((post) => `${blogRoots.it}/${post.id}`),
        ...Object.values(portfolioRoutes).map(({ en }) => en),
        blogRoots.en,
        ...index.en.map((post) => `${blogRoots.en}/${post.id}`),
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
