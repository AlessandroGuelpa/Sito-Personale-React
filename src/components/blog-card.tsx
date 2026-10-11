import type { BlogSummary } from "@/types/blog";

import { Link } from "react-router-dom";

export function BlogCard({ post }: { post: BlogSummary }) {
  return (
    <article className="surface-card flex flex-col p-6 sm:p-7">
      <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-zinc-600 dark:text-zinc-400">
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString("it-IT", {
            day: "numeric",
            month: "short",
            year: "numeric",
            timeZone: "UTC",
          })}
        </time>
        <span>· {post.minutes} min di lettura</span>
      </div>
      <h3 className="mt-4 text-xl font-bold leading-snug">
        <Link
          className="hover:text-violet-700 dark:hover:text-violet-400"
          to={`/blog/${post.id}`}
        >
          {post.title}
        </Link>
      </h3>
      <p className="mt-3 flex-grow text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
        {post.excerpt}
      </p>
      {post.tags.length > 0 && (
        <ul aria-label="Argomenti" className="mt-4 flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <li key={tag} className="tech-tag">
              {tag}
            </li>
          ))}
        </ul>
      )}
      <Link
        className="text-link mt-5 inline-flex min-h-11 items-center"
        to={`/blog/${post.id}`}
      >
        Leggi l’articolo <span className="sr-only">: {post.title}</span>
        <span aria-hidden="true" className="ml-2">
          →
        </span>
      </Link>
    </article>
  );
}
