import { Link } from "react-router-dom";
import { latestPosts } from "virtual:home-posts";

import DefaultLayout from "@/layouts/default";
import { PageSeo } from "@/components/page-seo";
import { FeaturedProjects } from "@/components/project-card";
import { BlogCard } from "@/components/blog-card";
import { SITE_URL } from "@/utils/seo";
import { siteConfig } from "@/config/site";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <PageSeo
        description="Sono Alessandro Guelpa: 5 anni di sviluppo web, soprattutto su Shopify, con integrazioni API e progetti personali React e Rails. Esplora i miei lavori."
        path="/"
        schema={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Alessandro Guelpa",
          url: SITE_URL,
          image: `${SITE_URL}/io.jpeg`,
          jobTitle: "Sviluppatore web",
          knowsAbout: [
            "Shopify",
            "React",
            "Ruby on Rails",
            "TypeScript",
            "Integrazioni API",
          ],
          sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
        }}
        title="Sviluppatore web · Shopify, React e Rails"
      />
      <section
        aria-labelledby="hero-title"
        className="grid items-center gap-10 py-8 md:grid-cols-[1.5fr_1fr] md:gap-16 md:py-14"
      >
        <div>
          <p className="eyebrow">Alessandro Guelpa · Sviluppatore web</p>
          <h1
            className="text-[clamp(2.6rem,5.5vw,4.8rem)] font-black tracking-tight leading-[1.08]"
            id="hero-title"
          >
            E-commerce, interfacce e{" "}
            <span className="text-accent">integrazioni.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
            Da 5 anni lavoro nello sviluppo web, principalmente su{" "}
            <strong className="text-zinc-900 dark:text-white">Shopify</strong>.
            Mi occupo anche di integrazioni con API e gestionali; nei miei
            progetti personali sviluppo con React e Ruby on Rails.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="button-primary" to="/project">
              Esplora i progetti <span aria-hidden="true">→</span>
            </Link>
            <Link className="button-secondary" to="/contact">
              Parliamo del tuo progetto
            </Link>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-zinc-600 dark:text-zinc-300">
            <span>5 anni di esperienza</span>
            <span>Shopify nel lavoro</span>
            <span>React + Rails nei progetti</span>
          </div>
        </div>
        <figure className="relative mx-auto w-full max-w-xs md:max-w-none">
          <img
            alt="Alessandro Guelpa"
            className="relative aspect-square w-full rounded-2xl object-cover"
            {...{ fetchpriority: "high" }}
            height={400}
            src="/io.jpeg"
            width={400}
          />
          <figcaption className="mt-5 text-center text-sm text-zinc-600 dark:text-zinc-400">
            Codice nel lavoro, curiosità nel tempo libero.
          </figcaption>
        </figure>
      </section>
      <FeaturedProjects />
      <section aria-labelledby="expertise-title" className="section-space">
        <p className="eyebrow">Il mio lavoro</p>
        <h2 className="section-title" id="expertise-title">
          Dall’interfaccia ai dati
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            [
              "01",
              "Shopify",
              "La piattaforma su cui ho maturato la maggior parte della mia esperienza professionale nello sviluppo di e-commerce.",
            ],
            [
              "02",
              "API e gestionali",
              "Integrazioni tra servizi e applicazioni, con esperienza anche sul backend e con Ruby on Rails.",
            ],
            [
              "03",
              "React e TypeScript",
              "Progetti personali per sperimentare interfacce, applicazioni e il collegamento tra frontend e API.",
            ],
          ].map(([number, title, text]) => (
            <article
              key={title}
              className="border-t border-zinc-200 py-6 dark:border-zinc-800"
            >
              <span className="text-sm font-mono text-violet-700 dark:text-violet-400">
                {number}
              </span>
              <h3 className="mt-4 text-xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {text}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section aria-labelledby="latest-title" className="section-space">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="eyebrow">Dal blog</p>
            <h2 className="section-title" id="latest-title">
              Appunti e idee dal codice
            </h2>
          </div>
          <Link className="text-link" to="/blog">
            Esplora l’archivio →
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {latestPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
      <section className="section-space border-t border-zinc-200 pt-10 dark:border-zinc-800 sm:flex sm:items-center sm:justify-between sm:gap-10">
        <div className="max-w-xl">
          <h2 className="section-title">Un progetto o una collaborazione?</h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300">
            Raccontami cosa vuoi costruire, oppure confrontiamoci su
            un’opportunità di lavoro.
          </p>
        </div>
        <Link className="button-primary mt-7 shrink-0 sm:mt-0" to="/contact">
          Scrivimi →
        </Link>
      </section>
    </DefaultLayout>
  );
}
