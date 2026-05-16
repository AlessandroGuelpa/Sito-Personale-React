import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import DefaultLayout from "@/layouts/default";
import { blogPosts } from "@/data/blogPosts";
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  TWITTER_HANDLE,
  AUTHOR_NAME,
  buildExcerpt,
  blogPostUrl,
  blogPostJsonLd,
  breadcrumbJsonLd,
} from "@/utils/seo";

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => String(p.id) === id);

  if (!post) {
    return (
      <DefaultLayout>
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <h1 className="text-4xl font-bold mb-4">Post non trovato</h1>
          <Link to="/blog" className="text-violet-600 hover:underline">
            Torna al blog
          </Link>
        </div>
      </DefaultLayout>
    );
  }

  const pageUrl = blogPostUrl(post.id);
  const seoDescription = buildExcerpt(post);
  const ogImage = post.coverImage ?? DEFAULT_OG_IMAGE;
  const articleJsonLd = blogPostJsonLd(post);
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: SITE_URL },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: post.title, url: pageUrl },
  ]);

  return (
    <DefaultLayout>
      <Helmet>
        <title>{`${post.title} | ${SITE_NAME}`}</title>
        <meta name="description" content={seoDescription} />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:title" content={`${post.title} | ${SITE_NAME}`} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={ogImage} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={AUTHOR_NAME} />
        {post.tags?.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={TWITTER_HANDLE} />
        <meta name="twitter:title" content={`${post.title} | ${SITE_NAME}`} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={ogImage} />

        <script type="application/ld+json">
          {JSON.stringify(articleJsonLd)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumb)}
        </script>
      </Helmet>

      <article className="max-w-3xl mx-auto px-4 py-12 md:py-20 relative z-10">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-violet-600 transition-colors mb-8 font-medium"
        >
          <span className="text-xl leading-none">&larr;</span> Torna al blog
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 text-sm font-bold px-3 py-1 rounded-full mb-6">
            {new Date(post.date).toLocaleDateString("it-IT", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>

          <h1 className="text-4xl md:text-5xl font-black mb-12 text-zinc-900 dark:text-zinc-100 leading-tight">
            {post.title}
          </h1>

          <div className="prose prose-zinc dark:prose-invert prose-lg prose-p:leading-relaxed prose-a:text-violet-500 hover:prose-a:text-violet-600 prose-strong:text-zinc-900 dark:prose-strong:text-zinc-100 max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} 
  rehypePlugins={[rehypeKatex]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </motion.div>
      </article>
    </DefaultLayout>
  );
}