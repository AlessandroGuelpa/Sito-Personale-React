import type { BlogPost } from "@/data/blogPosts";

import { useParams, Link } from "react-router-dom";
import { lazy, Suspense, useMemo } from "react";
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

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const Post = useMemo(
    () =>
      id && Object.prototype.hasOwnProperty.call(blogLoaders, id)
        ? lazy(async () => {
            const { post } = await blogLoaders[id]();

            return { default: () => <PostContent post={post} /> };
          })
        : null,
    [id],
  );

  if (!Post) return <NotFoundPage />;

  return (
    <Suspense
      fallback={
        <div
          className="flex min-h-screen items-center justify-center"
          role="status"
        >
          Caricamento dell’articolo…
        </div>
      }
    >
      <Post />
    </Suspense>
  );
}

function PostContent({ post }: { post: BlogPost }) {
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
          <span>· {readingTimeMinutes(post.content)} min di lettura</span>
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
            components={{ h1: ({ children }) => <h2>{children}</h2> }}
            rehypePlugins={[rehypeKatex]}
            remarkPlugins={[remarkGfm, remarkMath]}
          >
            {post.content}
          </ReactMarkdown>
        </div>
        <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
          <Link className="text-link" to="/blog">
            ← Altri articoli dal blog
          </Link>
        </div>
      </article>
    </DefaultLayout>
  );
}
