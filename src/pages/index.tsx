import { Link } from "react-router-dom";
import { latestPosts } from "virtual:home-posts";

import DefaultLayout from "@/layouts/default";
import { PageSeo } from "@/components/page-seo";
import { FeaturedProjects } from "@/components/project-card";
import { BlogCard } from "@/components/blog-card";
import { SITE_URL } from "@/utils/seo";
import { siteConfig } from "@/config/site";
import { BLOG_HUBS, blogHubPath } from "@/config/blog-hubs";
import {
  blogRoots,
  inventoryArticleRoutes,
  portfolioRoutes,
  type SiteLanguage,
} from "@/config/locales";

const homeCopy = {
  it: {
    title: "Sviluppatore Shopify e integrazioni ERP",
    description:
      "Sviluppo e-commerce Shopify, personalizzo temi e collego gli store ad API e gestionali. Esplora i miei progetti Shopify, React e Ruby on Rails.",
    role: "Sviluppatore web",
    heading: "E-commerce, interfacce e",
    accent: "integrazioni.",
    introduction: "Da 5 anni lavoro nello sviluppo web, principalmente su",
    experience:
      "Mi occupo anche di integrazioni con API e gestionali; nei miei progetti personali sviluppo con React e Ruby on Rails.",
    explore: "Esplora i progetti",
    contact: "Parliamo del tuo progetto",
    highlights: [
      "5 anni di esperienza",
      "Shopify nel lavoro",
      "React + Rails nei progetti",
    ],
    caption: "Codice nel lavoro, curiosità nel tempo libero.",
    work: "Il mio lavoro",
    workTitle: "Dall’interfaccia ai dati",
    expertise: [
      [
        "Shopify",
        "La piattaforma su cui ho maturato la maggior parte della mia esperienza professionale nello sviluppo di e-commerce.",
      ],
      [
        "API e gestionali",
        "Integrazioni tra servizi e applicazioni, con esperienza anche sul backend e con Ruby on Rails.",
      ],
      [
        "React e TypeScript",
        "Progetti personali per sperimentare interfacce, applicazioni e il collegamento tra frontend e API.",
      ],
    ],
    integrations: "Integrazioni API",
    collaboration: "Un progetto o una collaborazione?",
    invitation:
      "Raccontami cosa vuoi costruire, oppure confrontiamoci su un’opportunità di lavoro.",
    message: "Scrivimi",
  },
  en: {
    title: "Shopify Developer for Storefronts and ERP Integrations",
    description:
      "I build Shopify storefronts, customise themes and connect stores to ERPs. Explore my Shopify tools and projects in React and Ruby on Rails.",
    role: "Web developer",
    heading: "Shopify development and",
    accent: "ERP integrations.",
    introduction:
      "I’ve spent five years building for the web, working primarily with",
    experience:
      "I also connect storefronts to APIs and ERP systems, and build personal projects with React and Ruby on Rails.",
    explore: "Explore my projects",
    contact: "Let’s talk about your project",
    highlights: [
      "Five years in web development",
      "Shopify storefronts and themes",
      "React and Rails projects",
    ],
    caption: "I write code for work and build things out of curiosity.",
    work: "What I do",
    workTitle: "From storefronts to back-end systems",
    expertise: [
      [
        "Shopify",
        "I develop and maintain Shopify storefronts, customise themes and help migrate stores from other platforms.",
      ],
      [
        "API and ERP integrations",
        "I work on connecting Shopify to external services and ERP systems, including backend development with Ruby on Rails.",
      ],
      [
        "React and TypeScript",
        "I use personal projects to explore how application interfaces and APIs fit together.",
      ],
    ],
    integrations: "API integrations",
    collaboration: "Have a project or role in mind?",
    invitation:
      "Tell me what you’re building, or get in touch about a role or collaboration.",
    message: "Get in touch",
  },
};

export default function IndexPage({ language }: { language: SiteLanguage }) {
  const copy = homeCopy[language];

  return (
    <DefaultLayout>
      <PageSeo
        description={copy.description}
        path={portfolioRoutes.home[language]}
        schema={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Alessandro Guelpa",
          url: SITE_URL,
          image: `${SITE_URL}/io.jpeg`,
          jobTitle: copy.role,
          knowsAbout: [
            "Shopify",
            "React",
            "Ruby on Rails",
            "TypeScript",
            copy.integrations,
          ],
          sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
        }}
        title={copy.title}
      />
      <section
        aria-labelledby="hero-title"
        className="grid items-center gap-10 py-8 md:grid-cols-[1.5fr_1fr] md:gap-16 md:py-14"
      >
        <div>
          <p className="eyebrow">Alessandro Guelpa · {copy.role}</p>
          <h1
            className="text-[clamp(2.6rem,5.5vw,4.8rem)] font-black tracking-tight leading-[1.08]"
            id="hero-title"
          >
            {copy.heading} <span className="text-accent">{copy.accent}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
            {copy.introduction}{" "}
            <strong className="text-zinc-900 dark:text-white">Shopify</strong>.{" "}
            {copy.experience}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              className="button-primary"
              to={portfolioRoutes.projects[language]}
            >
              {copy.explore} <span aria-hidden="true">→</span>
            </Link>
            <Link
              className="button-secondary"
              to={portfolioRoutes.contact[language]}
            >
              {copy.contact}
            </Link>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-zinc-600 dark:text-zinc-300">
            {copy.highlights.map((highlight) => (
              <span key={highlight}>{highlight}</span>
            ))}
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
            {copy.caption}
          </figcaption>
        </figure>
      </section>
      <FeaturedProjects language={language} />
      <section aria-labelledby="expertise-title" className="section-space">
        <p className="eyebrow">{copy.work}</p>
        <h2 className="section-title" id="expertise-title">
          {copy.workTitle}
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {copy.expertise.map(([title, text], index) => (
            <article
              key={title}
              className="border-t border-zinc-200 py-6 dark:border-zinc-800"
            >
              <span className="text-sm font-mono text-violet-700 dark:text-violet-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {text}
              </p>
            </article>
          ))}
        </div>
      </section>
      {language === "it" ? (
        <ItalianBlogSections />
      ) : (
        <section aria-labelledby="writing-title" className="section-space">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="section-title" id="writing-title">
              Technical writing
            </h2>
            <Link className="text-link" to={blogRoots.en}>
              All articles →
            </Link>
          </div>
          <div className="mt-8 border-t border-zinc-200 py-5 dark:border-zinc-800">
            <h3 className="text-xl font-bold">
              <Link className="text-link" to={inventoryArticleRoutes.en}>
                Shopify–ERP Inventory Sync: Handling Concurrent Stock Updates
              </Link>
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              What happens if an order changes Shopify stock between an ERP
              job’s read and write, and how to recover from that conflict.
            </p>
          </div>
        </section>
      )}
      <section className="section-space border-t border-zinc-200 pt-10 dark:border-zinc-800 sm:flex sm:items-center sm:justify-between sm:gap-10">
        <div className="max-w-xl">
          <h2 className="section-title">{copy.collaboration}</h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300">
            {copy.invitation}
          </p>
        </div>
        <Link
          className="button-primary mt-7 shrink-0 sm:mt-0"
          to={portfolioRoutes.contact[language]}
        >
          {copy.message} →
        </Link>
      </section>
    </DefaultLayout>
  );
}

function ItalianBlogSections() {
  return (
    <>
      <section className="section-space" aria-labelledby="blog-topics-title">
        <p className="eyebrow">Approfondimenti</p>
        <h2 className="section-title" id="blog-topics-title">
          Percorsi dal blog
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {BLOG_HUBS.map((hub) => (
            <Link
              key={hub.slug}
              to={blogHubPath(hub.slug)}
              className="block border-t border-zinc-200 py-5 dark:border-zinc-800"
            >
              <h3 className="text-xl font-bold">{hub.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {hub.description}
              </p>
              <span className="text-link mt-3 inline-flex">
                Leggi gli articoli →
              </span>
            </Link>
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
    </>
  );
}
