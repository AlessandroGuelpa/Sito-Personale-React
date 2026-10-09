import { useState } from "react";
import { Link } from "react-router-dom";

import DefaultLayout from "@/layouts/default";
import { PageSeo } from "@/components/page-seo";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

const filters = [
  { id: "all", label: "Tutti" },
  { id: "react", label: "React" },
  { id: "fullstack", label: "Full stack" },
  { id: "web", label: "Siti web" },
  { id: "creative", label: "Musica" },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const visible = projects.filter(
    (project) => filter === "all" || project.categories.includes(filter),
  );

  return (
    <DefaultLayout>
      <PageSeo
        description="Esplora Launch Tracker, Ballerini & Sapori, il portfolio React e VEHRT. Contesto, tecnologie e link al codice dei progetti di Alessandro Guelpa."
        path="/project"
        title="Progetti e codice"
      />
      <header className="max-w-3xl">
        <p className="eyebrow">Portfolio</p>
        <h1 className="page-title">Progetti, con il codice dietro.</h1>
        <p className="page-intro">
          Una selezione di lavori e sperimentazioni. Per ogni progetto trovi il
          contesto, le scelte tecniche e i link per approfondire.
        </p>
      </header>
      <aside
        aria-labelledby="shopify-experience"
        className="surface-card mt-9 border-l-4 border-l-violet-600 p-6 sm:p-8"
      >
        <h2 className="text-xl font-bold" id="shopify-experience">
          L’esperienza professionale: Shopify e integrazioni
        </h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-zinc-600 dark:text-zinc-300">
          La maggior parte dei miei 5 anni nello sviluppo web riguarda progetti
          Shopify. Ho lavorato anche sul backend e sulle integrazioni con API e
          gestionali. Qui raccolgo i progetti che posso mostrare pubblicamente.
        </p>
        <Link
          className="text-link mt-4 inline-flex min-h-11 items-center"
          to="/about"
        >
          Conosci il mio percorso →
        </Link>
      </aside>
      <section aria-labelledby="projects-heading" className="section-space">
        <h2 className="sr-only" id="projects-heading">
          Progetti pubblici
        </h2>
        <div
          aria-label="Filtra i progetti"
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
              {item.label}
            </button>
          ))}
        </div>
        <p
          className="mb-5 text-sm text-zinc-600 dark:text-zinc-400"
          role="status"
        >
          {visible.length} {visible.length === 1 ? "progetto" : "progetti"}
        </p>
        <div className="grid items-start gap-6 md:grid-cols-2">
          {visible.map((project) => (
            <ProjectCard key={project.id} detailed project={project} />
          ))}
        </div>
      </section>
      <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
        <p className="text-lg font-semibold">
          Vuoi parlare di un lavoro simile?
        </p>
        <Link className="button-primary" to="/contact">
          Contattami →
        </Link>
      </div>
    </DefaultLayout>
  );
}
