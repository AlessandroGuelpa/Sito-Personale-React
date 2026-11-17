import type { BlogPost } from "@/data/blogPosts";
import { effectiveArticleDates } from "@/utils/blog-dates";
import { BLOG_HUBS, blogHubForPost } from "@/config/blog-hubs";
import {
  blogHubPath,
  blogRoots,
  languageAlternates,
  portfolioRoutes,
  type SiteLanguage,
} from "@/config/locales";
import type { BlogSummary } from "@/types/blog";

import { useParams, Link } from "react-router-dom";
import { lazy } from "react";
import { blogLoaders } from "virtual:blog-loaders";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import "katex/dist/katex.min.css";
import DefaultLayout from "@/layouts/default";
import NotFoundPage from "@/pages/not-found";
import { PageSeo } from "@/components/page-seo";
import { ArticleCodeBlock } from "@/components/article-code-block";
import { rehypeArticleNavigation } from "@/utils/article-navigation";
import "@/styles/reading.css";
import {
  DEFAULT_OG_IMAGE,
  AUTHOR_NAME,
  buildExcerpt,
  blogPostJsonLd,
  breadcrumbJsonLd,
  readingTimeMinutes,
  sitePageUrl,
} from "@/utils/seo";

// Keep lazy component identities stable across initial Suspense retries.
// Creating them inside the page can leave client navigation loading forever.
const postPages = Object.fromEntries(
  Object.entries(blogLoaders).map(([path, load]) => [
    path,
    lazy(async () => {
      const { post, relatedPosts } = await load();

      return {
        default: () => (
          <PostContent path={path} post={post} relatedPosts={relatedPosts} />
        ),
      };
    }),
  ]),
);

export default function BlogPostPage({
  language = "it",
}: {
  language?: SiteLanguage;
}) {
  const { id } = useParams<{ id: string }>();
  const path = `${blogRoots[language]}/${id}`;
  const Post =
    id && Object.prototype.hasOwnProperty.call(postPages, path)
      ? postPages[path]
      : null;

  if (!Post) return <NotFoundPage />;

  return <Post />;
}

const articleCopy = {
  it: {
    back: "← Torna all’archivio",
    readingTime: "min di lettura",
    by: "Di",
    updated: "Aggiornato il",
    tags: "Argomenti",
    topic: "Percorso",
    relatedLabel: "Dal blog",
    relatedTitle: "Continua a leggere",
    more: "← Altri articoli dal blog",
    authorLabel: "Informazioni sull'autore",
    authorTitle: "Chi scrive",
    authorBio:
      "Alessandro Guelpa è uno sviluppatore web specializzato in ecommerce Shopify e integrazioni API. Il blog raccoglie approfondimenti tecnici e interessi personali, con esempi e riferimenti quando pertinenti.",
    authorLink: "Esperienza, progetti e curriculum dell’autore →",
  },
  en: {
    back: "← Back to the blog",
    readingTime: "min read",
    by: "By",
    updated: "Updated on",
    tags: "Topics",
    topic: "Topic",
    relatedLabel: "From the blog",
    relatedTitle: "Related articles",
    more: "← All articles",
    authorLabel: "About the author",
    authorTitle: "About the author",
    authorBio:
      "Alessandro Guelpa develops Shopify storefronts and works on API and ERP integrations. His writing covers the technical problems he encounters in development.",
    authorLink: "Read about Alessandro’s experience →",
  },
};

function formatArticleDate(date: string, language: SiteLanguage) {
  return new Date(date).toLocaleDateString(
    language === "en" ? "en-GB" : "it-IT",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    },
  );
}

function PostContent({
  path,
  post,
  relatedPosts,
}: {
  path: string;
  post: BlogPost;
  relatedPosts: BlogSummary[];
}) {
  const english = path.startsWith(`${blogRoots.en}/`);
  const language = english ? "en" : "it";
  const copy = articleCopy[language];
  const minutes = readingTimeMinutes(post.content);
  const { publishedAt, modifiedAt } = effectiveArticleDates(post);
  const hubSlug = blogHubForPost(post);
  const hub = BLOG_HUBS[hubSlug][language];
  const homePath = portfolioRoutes.home[language];
  const authorPath = portfolioRoutes.about[language];
  const blogPath = blogRoots[language];
  const breadcrumbs = [
    { name: "Home", url: sitePageUrl(homePath) },
    { name: "Blog", url: sitePageUrl(blogPath) },
    { name: post.title, url: sitePageUrl(path) },
  ];

  return (
    <DefaultLayout>
      <PageSeo
        description={post.seoDescription ?? buildExcerpt(post)}
        image={post.coverImage ?? DEFAULT_OG_IMAGE}
        path={path}
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            blogPostJsonLd(post, path, language),
            breadcrumbJsonLd(breadcrumbs),
          ],
        }}
        title={post.seoTitle ?? post.title}
        type="article"
      />
      <Helmet>
        <meta content={publishedAt} property="article:published_time" />
        <meta content={modifiedAt} property="article:modified_time" />
        <meta content={AUTHOR_NAME} property="article:author" />
        {post.tags?.map((tag) => (
          <meta key={tag} content={tag} property="article:tag" />
        ))}
      </Helmet>
      <article className="mx-auto max-w-3xl py-4 sm:py-8">
        <Link
          className="text-link mb-8 inline-flex min-h-11 items-center"
          to={blogPath}
        >
          {copy.back}
        </Link>
        <div className="mb-5 flex flex-wrap gap-3 text-sm text-zinc-600 dark:text-zinc-400">
          <time dateTime={post.date}>
            {formatArticleDate(post.date, language)}
          </time>
          <span>
            · {minutes} {copy.readingTime}
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight">
          {post.title}
        </h1>
        <p className="mt-5 text-sm text-zinc-600 dark:text-zinc-400">
          {copy.by}{" "}
          <Link className="text-link" to={authorPath} rel="author">
            {AUTHOR_NAME}
          </Link>
          {post.updatedAt && post.updatedAt !== post.date ? (
            <>
              {" "}
              · {copy.updated}{" "}
              <time dateTime={post.updatedAt}>
                {formatArticleDate(post.updatedAt, language)}
              </time>
            </>
          ) : null}
        </p>
        <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
          {copy.topic}{": "}
          <Link className="text-link" to={blogHubPath(hubSlug, language)}>
            {hub.title}
          </Link>
        </p>
        {post.tags?.length ? (
          <ul aria-label={copy.tags} className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <li key={tag}>
                <Link
                  className="tech-tag inline-flex min-h-9 items-center"
                  to={`${blogPath}?tag=${encodeURIComponent(tag)}`}
                >
                  {tag}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
        <div className="article-body prose prose-zinc dark:prose-invert prose-lg prose-a:text-violet-700 dark:prose-a:text-violet-400 mt-10 max-w-none">
          <ReactMarkdown
            components={{
              a: ({ node: _node, href, children, ...props }) => {
                const italianArticle =
                  english && href?.startsWith(`${blogRoots.it}/`);
                const translation =
                  italianArticle && href
                    ? languageAlternates(href)?.en
                    : undefined;

                return (
                  <a
                    {...props}
                    href={translation ?? href}
                    hrefLang={
                      italianArticle ? (translation ? "en" : "it") : undefined
                    }
                  >
                    {children}
                    {italianArticle && !translation && " (in Italian)"}
                  </a>
                );
              },
              pre: ({ node: _node, ...props }) => (
                <ArticleCodeBlock {...props} language={language} />
              ),
            }}
            rehypePlugins={[
              [
                rehypeArticleNavigation,
                { language, showOutline: minutes >= 3 },
              ],
              rehypeKatex,
            ]}
            remarkPlugins={[remarkGfm, remarkMath]}
          >
            {post.content}
          </ReactMarkdown>
        </div>
        {relatedPosts.length > 0 && (
          <section
            aria-labelledby="related-title"
            className="related-posts not-prose"
          >
            <p className="eyebrow">{copy.relatedLabel}</p>
            <h2
              className="text-2xl font-bold tracking-tight"
              id="related-title"
            >
              {copy.relatedTitle}
            </h2>
            <ul className="mt-6">
              {relatedPosts.map((related) => (
                <li key={related.id}>
                  <Link
                    className="related-post-link"
                    to={`${blogPath}/${related.id}`}
                  >
                    <span>
                      <strong>{related.title}</strong>
                      <span className="related-post-meta">
                        {related.minutes} {copy.readingTime}
                      </span>
                    </span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
        <aside
          className="mt-10 border-t border-zinc-200 pt-6 dark:border-zinc-800"
          aria-label={copy.authorLabel}
        >
          <h2 className="text-lg font-bold">{copy.authorTitle}</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {copy.authorBio}
          </p>
          <Link className="text-link mt-3 inline-flex" to={authorPath}>
            {copy.authorLink}
          </Link>
        </aside>
        <div className="mt-10 border-t border-zinc-200 pt-6 dark:border-zinc-800">
          <Link className="text-link" to={blogPath}>
            {copy.more}
          </Link>
        </div>
      </article>
    </DefaultLayout>
  );
}
