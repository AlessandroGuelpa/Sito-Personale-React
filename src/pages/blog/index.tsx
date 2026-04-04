import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "react-router-dom";

import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { blogPosts } from "@/data/blogPosts";

export default function BlogPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-16">
        <div className="text-center">
          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className={title({ color: "violet" })}
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            Blog
          </motion.h1>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mt-4"
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className={subtitle()}>I miei aggiornamenti quotidiani.</h2>
          </motion.div>
        </div>

        <div className="w-full max-w-4xl px-4 flex flex-col gap-12 mt-8">
          {[...blogPosts]
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .map((post, index) => (
            <motion.article
              key={post.id}
              animate={{ opacity: 1, y: 0 }}
              className="group relative p-6 sm:p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 shadow-lg hover:shadow-xl hover:border-violet-500/30 hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              {/* Link invisibile che copre tutta la card */}
              <Link to={`/blog/${post.id}`} className="absolute inset-0 z-10 rounded-3xl">
                <span className="sr-only">Leggi di più su {post.title}</span>
              </Link>

              {/* Data in stile badge */}
              <div className="absolute -top-4 left-6 sm:left-8 bg-violet-600 text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-md z-20">
                {new Date(post.date).toLocaleDateString("it-IT", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </div>

              {/* Intestazione: Icona e Titolo Post */}
              <div className="flex items-center gap-4 mt-2 mb-4 relative z-0">
                {post.icon && (
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 text-2xl shadow-sm">
                    {post.icon}
                  </div>
                )}
                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-violet-600 transition-colors">
                  {post.title}
                </h3>
              </div>

              {/* Anteprima del Contenuto Markdown limitata a 3 righe */}
              <div className="prose prose-zinc dark:prose-invert prose-p:leading-relaxed prose-a:text-violet-500 prose-strong:text-zinc-900 dark:prose-strong:text-zinc-100 max-w-none line-clamp-3 opacity-80 relative z-0">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {post.content}
                </ReactMarkdown>
              </div>
              
              <div className="mt-6 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 font-bold text-violet-600 dark:text-violet-400 group-hover:text-violet-700 transition-colors relative z-0">
                  Leggi di più →
                </span>
                <span className="text-sm text-zinc-500 dark:text-zinc-400 font-medium relative z-0">
                  {Math.ceil(post.content.trim().split(/\s+/).length / 200)} min di lettura
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
