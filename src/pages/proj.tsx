import { useState } from "react";
import { Link } from "react-router-dom";

import DefaultLayout from "@/layouts/default";
import { PageSeo } from "@/components/page-seo";
import { ProjectCard } from "@/components/project-card";
import {
  inventoryArticleRoutes,
  portfolioRoutes,
  type SiteLanguage,
} from "@/config/locales";
import { projects } from "@/data/projects";

const filters = [
  { id: "all", it: "Tutti", en: "All" },
  { id: "shopify", it: "Shopify", en: "Shopify" },
  { id: "react", it: "React", en: "React" },
  { id: "fullstack", it: "Full stack", en: "Full stack" },
  { id: "web", it: "Siti web", en: "Websites" },
  { id: "creative", it: "Musica", en: "Music" },
];

const projectsCopy = {
  it: {
    title: "Portfolio di progetti Shopify, React e Rails",
    description:
      "Prova Shopify Mapper per preparare CSV e scopri Launch Tracker in React e Rails. Ogni progetto spiega il problema e le scelte tecniche.",
    heading: "Progetti, con il codice dietro.",
    intro:
      "Una selezione di lavori e sperimentazioni. Per ogni progetto trovi il contesto, le scelte tecniche e i link per approfondire.",
    publicProjects: "Progetti pubblici",
    filter: "Filtra i progetti",
    project: "progetto",
    projects: "progetti",
    experience: "L’esperienza professionale: Shopify e integrazioni",
    background:
      "La maggior parte dei miei 5 anni nello sviluppo web riguarda progetti Shopify. Ho lavorato anche sul backend e sulle integrazioni con API e gestionali. Qui raccolgo i progetti che posso mostrare pubblicamente.",
    learnMore: "Conosci il mio percorso",
    question: "Vuoi parlare di un lavoro simile?",
    contact: "Contattami",
  },
  en: {
    title: "Shopify, React and Rails Portfolio Projects",
    description:
      "Try Shopify Mapper to prepare CSV imports and explore Launch Tracker, built with React and Rails. See how I designed and built each project.",
    heading: "Projects and the code behind them.",
    intro:
      "A selection of tools, websites and experiments. Each project includes the problem, the technical choices and links to explore further.",
    publicProjects: "Public projects",
    filter: "Filter projects",
    project: "project",
    projects: "projects",
    experience: "Professional work with Shopify and ERP integrations",
    background:
      "Most of my professional web development work has been on Shopify storefronts. I’ve also developed backend services and integrations with APIs and ERP systems. The projects above are the ones I can share publicly.",
    learnMore: "Read about my experience",
    question: "Working on something similar?",
    contact: "Get in touch",
  },
};

export default function Projects({ language }: { language: SiteLanguage }) {
  const [filter, setFilter] = useState("all");
  const copy = projectsCopy[language];
  const visible = projects.filter(
    (project) => filter === "all" || project.categories.includes(filter),
  );

  return (
    <DefaultLayout>
      <PageSeo
        description={copy.description}
        path={portfolioRoutes.projects[language]}
        title={copy.title}
      />
      <header className="max-w-3xl">
        <p className="eyebrow">Portfolio</p>
        <h1 className="page-title">{copy.heading}</h1>
        <p className="page-intro">{copy.intro}</p>
      </header>
      <section aria-labelledby="projects-heading" className="mt-9">
        <h2 className="sr-only" id="projects-heading">
          {copy.publicProjects}
        </h2>
        <div
          aria-label={copy.filter}
          className="mb-7 flex flex-wrap gap-2"
          role="group"
        >
          {filters.map((item) => (
            <button
              key={item.id}
              aria-pressed={filter === item.id}
              className={`filter-button ${filter === item.id ? "is-selected" : ""}`}
              type="button"
              onClick={() => setFilter(item.id)}
            >
              {item[language]}
            </button>
          ))}
        </div>
        <p
          className="mb-5 text-sm text-zinc-600 dark:text-zinc-400"
          role="status"
        >
          {visible.length} {visible.length === 1 ? copy.project : copy.projects}
        </p>
        <div className="grid items-start gap-6 md:grid-cols-2">
          {visible.map((project) => (
            <ProjectCard
              key={project.id}
              detailed
              language={language}
              project={project}
            />
          ))}
        </div>
      </section>
      <aside
        aria-labelledby="shopify-experience"
        className="mt-12 border-l-2 border-violet-600 py-2 pl-6 dark:border-violet-400 sm:pl-8"
      >
        <h2 className="text-xl font-bold" id="shopify-experience">
          {copy.experience}
        </h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-zinc-600 dark:text-zinc-300">
          {copy.background}
        </p>
        <Link
          className="text-link mt-4 inline-flex min-h-11 items-center"
          to={portfolioRoutes.about[language]}
        >
          {copy.learnMore} →
        </Link>
        {language === "en" && (
          <p>
            <Link
              className="text-link inline-flex min-h-11 items-center"
              to={inventoryArticleRoutes.en}
            >
              Read about Shopify–ERP inventory sync →
            </Link>
          </p>
        )}
      </aside>
      <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
        <p className="text-lg font-semibold">{copy.question}</p>
        <Link className="button-primary" to={portfolioRoutes.contact[language]}>
          {copy.contact} →
        </Link>
      </div>
    </DefaultLayout>
  );
}
