import type { BlogPost } from "@/data/blogPosts";
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
  SITE_URL,
  DEFAULT_OG_IMAGE,
  AUTHOR_NAME,
  buildExcerpt,
  blogPostUrl,
  blogPostJsonLd,
  breadcrumbJsonLd,
  readingTimeMinutes,
} from "@/utils/seo";

// Keep lazy component identities stable across initial Suspense retries.
// Creating them inside the page can leave client navigation loading forever.
const postPages = Object.fromEntries(
  Object.entries(blogLoaders).map(([id, load]) => [
    id,
    lazy(async () => {
      const { post, relatedPosts } = await load();

      return {
        default: () => <PostContent post={post} relatedPosts={relatedPosts} />,
      };
    }),
  ]),
);

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const Post =
    id && Object.prototype.hasOwnProperty.call(postPages, id)
      ? postPages[id]
      : null;

  if (!Post) return <NotFoundPage />;

  return <Post />;
}

function PostContent({
  post,
  relatedPosts,
}: {
  post: BlogPost;
  relatedPosts: BlogSummary[];
}) {
  const minutes = readingTimeMinutes(post.content);
  return (
    <DefaultLayout>
      <PageSeo
        description={buildExcerpt(post)}
        image={post.coverImage ?? DEFAULT_OG_IMAGE}
        path={`/blog/${post.id}`}
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            blogPostJsonLd(post),
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "Blog", url: `${SITE_URL}/blog` },
              { name: post.title, url: blogPostUrl(post.id) },
            ]),
          ],
        }}
        title={post.title}
        type="article"
      />
      <Helmet>
        <meta content={post.date} property="article:published_time" />
        <meta content={AUTHOR_NAME} property="article:author" />
        {post.tags?.map((tag) => (
          <meta key={tag} content={tag} property="article:tag" />
        ))}
      </Helmet>
      <article className="mx-auto max-w-3xl py-4 sm:py-8">
        <Link
          className="text-link mb-8 inline-flex min-h-11 items-center"
          to="/blog"
        >
          ← Torna all’archivio
        </Link>
        <div className="mb-5 flex flex-wrap gap-3 text-sm text-zinc-600 dark:text-zinc-400">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("it-IT", {
              day: "numeric",
              month: "long",
              year: "numeric",
              timeZone: "UTC",
            })}
          </time>
          <span>· {minutes} min di lettura</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight">
          {post.title}
        </h1>
        <p className="mt-5 text-sm text-zinc-600 dark:text-zinc-400">
          Di {AUTHOR_NAME}
        </p>
        {post.tags?.length ? (
          <ul aria-label="Argomenti" className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <li key={tag}>
                <Link
                  className="tech-tag inline-flex min-h-9 items-center"
                  to={`/blog?tag=${encodeURIComponent(tag)}`}
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
              pre: ({ node: _node, ...props }) => (
                <ArticleCodeBlock {...props} />
              ),
            }}
            rehypePlugins={[
              [rehypeArticleNavigation, { showOutline: minutes >= 3 }],
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
            <p className="eyebrow">Dal blog</p>
            <h2
              className="text-2xl font-bold tracking-tight"
              id="related-title"
            >
              Continua a leggere
            </h2>
            <ul className="mt-6">
              {relatedPosts.map((related) => (
                <li key={related.id}>
                  <Link
                    className="related-post-link"
                    to={`/blog/${related.id}`}
                  >
                    <span>
                      <strong>{related.title}</strong>
                      <span className="related-post-meta">
                        {related.minutes} min di lettura
                      </span>
                    </span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
        <div className="mt-10 border-t border-zinc-200 pt-6 dark:border-zinc-800">
          <Link className="text-link" to="/blog">
            ← Altri articoli dal blog
          </Link>
        </div>
      </article>
    </DefaultLayout>
  );
}
