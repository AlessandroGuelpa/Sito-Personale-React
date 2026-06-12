import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { TechMarquee, techCount } from "@/components/tech-marquee";
import { blogPosts } from "@/data/blogPosts";
import { SITE_URL, SITE_NAME } from "@/utils/seo";

const heroStats = [
  { value: `${blogPosts.length}`, label: "Articoli pubblicati" },
  { value: `${techCount}+`, label: "Tecnologie in stack" },
  { value: "∞", label: "Caffè → codice" },
];

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Helmet>
        <title>{`${SITE_NAME} — Front-end & Shopify Developer | Portfolio`}</title>
        <meta
          name="description"
          content="Sviluppatore front-end specializzato in React, Tailwind e Shopify. Case study, articoli tecnici e contatti per collaborazioni e freelance."
        />
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta
          property="og:title"
          content={`${SITE_NAME} — Front-end & Shopify Developer | Portfolio`}
        />
        <meta
          property="og:description"
          content="Portfolio, articoli tecnici e progetti in React, Tailwind e Shopify."
        />
      </Helmet>

      <section className="relative flex flex-col md:flex-row items-center justify-between gap-12 pt-12 pb-24 md:pt-16 md:pb-36">
        <div className="max-w-2xl text-center md:text-left z-10">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-7">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Disponibile per nuovi progetti
            </span>
          </motion.div>

          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-6 text-balance"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Trasformo idee in{" "}
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-500 animate-gradient-x pb-2">
              realtà digitali
            </span>
          </motion.h1>
          <motion.h2
            animate={{ opacity: 1, y: 0 }}
            className="text-xl md:text-2xl font-medium text-zinc-600 dark:text-zinc-300 mb-9 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Ciao, sono Alessandro. <br className="hidden md:block" />
            Sviluppatore web specializzato in esperienze{" "}
            <span className="text-violet-600 dark:text-violet-400 font-bold">
              veloci
            </span>
            ,{" "}
            <span className="text-fuchsia-600 dark:text-fuchsia-400 font-bold">
              intuitive
            </span>{" "}
            e{" "}
            <span className="text-orange-600 dark:text-orange-400 font-bold">
              moderne
            </span>
            .
          </motion.h2>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Link
              className="btn-shine group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-violet-600/25 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-600/40 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2"
              to="/project"
            >
              Scopri i miei lavori
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-2xl border-2 border-zinc-900 dark:border-white px-8 py-4 text-lg font-bold text-zinc-900 dark:text-white transition-all duration-300 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 dark:focus-visible:ring-white focus-visible:ring-offset-2"
              to="/contact"
            >
              Contattami
            </Link>
          </motion.div>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mt-14 flex items-center justify-center md:justify-start gap-10 sm:gap-14"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            {heroStats.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-500">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          className="hidden md:block w-1/3 relative group"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          transition={{ duration: 1, delay: 0.3, type: "spring" }}
        >
          <div className="absolute -inset-10 rounded-full bg-violet-500/20 dark:bg-violet-500/25 blur-3xl" />
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl blur opacity-25 group-hover:opacity-90 transition duration-1000 group-hover:duration-200 animate-tilt" />
          <div className="relative">
            <img
              alt="Ritratto di Alessandro Guelpa, sviluppatore front-end"
              className="w-full h-auto rounded-2xl shadow-2xl object-cover transform transition-transform duration-500 hover:scale-[1.02] border-2 border-white/10 rotate-3 hover:rotate-0"
              height={1024}
              src="/io.jpeg"
              width={768}
            />
          </div>
        </motion.div>
      </section>

      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400 mb-4">
              Stack
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Il Mio Stack Tecnologico
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              Gli strumenti che padroneggio per costruire il futuro.
            </p>
          </motion.div>

          <TechMarquee />

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <a
              className="group inline-flex items-center justify-center gap-3 text-xl font-bold text-zinc-800 dark:text-zinc-200 hover:text-violet-600 dark:hover:text-violet-400 transition-colors bg-white/80 dark:bg-zinc-900/80 backdrop-blur px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 border border-zinc-200 dark:border-zinc-800 hover:border-violet-500/40 transition-all duration-300"
              href={siteConfig.links.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              <GithubIcon size={24} />
              <span>Esplora il mio codice su GitHub</span>
              <svg
                className="w-5 h-5 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* SEZIONE: Ultimi Articoli dal Blog */}
      <section className="flex flex-col items-center justify-center gap-6 py-12 mb-20 w-full max-w-4xl mx-auto px-4 relative z-10">
        <div className="w-full flex justify-between items-end mb-4 md:mb-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400 mb-3">
              Blog
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight">
              Ultimi Articoli
            </h2>
          </div>
          <Link
            className="group text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300 font-semibold transition-colors flex items-center gap-1"
            to="/blog"
          >
            Vedi tutti{" "}
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </Link>
        </div>

        <div className="w-full flex flex-col gap-4 sm:gap-6">
          {[...blogPosts]
            .sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
            )
            .slice(0, 3)
            .map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <Link
                  className="group flex flex-col sm:flex-row sm:items-center gap-4 p-5 sm:p-6 rounded-3xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur border border-zinc-200 dark:border-white/10 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/5 hover:-translate-y-1 transition-all duration-300"
                  to={`/blog/${post.id}`}
                >
                  {post.icon && (
                    <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-2xl bg-violet-100 dark:bg-violet-900/30 text-2xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                      {post.icon}
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mt-2 font-medium">
                      <span>
                        {new Date(post.date).toLocaleDateString("it-IT", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                      <span>•</span>
                      <span>
                        {Math.ceil(
                          post.content.trim().split(/\s+/).length / 200,
                        )}{" "}
                        min di lettura
                      </span>
                    </div>
                  </div>
                  <span
                    aria-hidden="true"
                    className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-zinc-200 dark:border-white/10 text-zinc-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 group-hover:border-violet-500/50 group-hover:translate-x-1 transition-all duration-300"
                  >
                    &rarr;
                  </span>
                </Link>
              </motion.div>
            ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
