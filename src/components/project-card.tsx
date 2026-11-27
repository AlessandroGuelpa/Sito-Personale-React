import { Link } from "react-router-dom";

import { projects, type Project } from "@/data/projects";
import { portfolioRoutes, type SiteLanguage } from "@/config/locales";
import { trackEvent } from "@/utils/analytics";

export function ProjectCard({
  project,
  language,
  detailed = false,
}: {
  project: Project;
  language: SiteLanguage;
  detailed?: boolean;
}) {
  const english = language === "en";
  const copy = english ? project.english : project;
  const title = (english && project.english.title) || project.title;
  const detailRows = english
    ? [
        ["Goal", copy.problem],
        ["Approach", copy.approach],
        ["What’s available", copy.outcome],
      ]
    : [
        ["Obiettivo", copy.problem],
        ["Il lavoro", copy.approach],
        ["Cosa puoi vedere", copy.outcome],
      ];

  return (
    <article className="surface-card overflow-hidden" id={project.id}>
      <div
        aria-hidden="true"
        className={`project-cover project-cover-${project.cover}`}
      >
        {project.cover === "mapper" ? (
          <img
            alt=""
            decoding="async"
            height={824}
            loading="lazy"
            src="/projects/shopify-mapper-800.webp"
            srcSet="/projects/shopify-mapper-400.webp 400w, /projects/shopify-mapper-800.webp 800w, /projects/shopify-mapper.webp 1200w"
            sizes="(min-width: 1280px) 350px, (min-width: 768px) 50vw, calc(100vw - 40px)"
            width={1200}
          />
        ) : project.cover === "fenix" ? (
          <img
            alt=""
            decoding="async"
            height={570}
            loading="lazy"
            src="/projects/fenix-x.webp"
            width={760}
          />
        ) : project.cover === "ballerini" ? (
          <img
            alt=""
            decoding="async"
            height={760}
            loading="lazy"
            src="/balleriniesapori-800.webp"
            srcSet="/balleriniesapori-400.webp 400w, /balleriniesapori-800.webp 800w, /balleriniesapori.com.webp 1200w"
            sizes="(min-width: 1280px) 350px, (min-width: 768px) 50vw, calc(100vw - 40px)"
            width={1200}
          />
        ) : project.cover === "vehrt" ? (
          <img
            alt=""
            className="!w-24 !h-24"
            height={1024}
            loading="lazy"
            src="/vehrt/monogram.svg"
            width={1024}
          />
        ) : (
          <div className="w-full px-7 sm:px-10">
            <span className="block text-xs font-semibold uppercase tracking-[0.25em] opacity-75">
              {project.cover === "launch"
                ? "React + Rails"
                : english
                  ? "Design + code"
                  : "Design + codice"}
            </span>
            <span className="mt-4 block text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              {title}
            </span>
            <span className="mt-6 block h-1 w-14 rounded-full bg-white/70" />
          </div>
        )}
      </div>
      <div className="p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-violet-700 dark:text-violet-400">
          {copy.kind}
        </p>
        <h3 className="mt-3 text-2xl font-bold tracking-tight">{title}</h3>
        <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-300">
          {copy.description}
        </p>
        <ul
          aria-label={english ? "Technologies" : "Tecnologie"}
          className="mt-5 flex flex-wrap gap-2"
        >
          {project.stack.map((tech) => (
            <li key={tech} className="tech-tag">
              {tech}
            </li>
          ))}
        </ul>
        {detailed && (
          <details className="mt-6 border-t border-zinc-200 pt-5 dark:border-zinc-800">
            <summary className="cursor-pointer font-semibold text-violet-700 dark:text-violet-400">
              {english ? "Context and solution" : "Contesto e soluzione"}
            </summary>
            <dl className="mt-5 space-y-4 text-sm leading-relaxed">
              {detailRows.map(([label, text]) => (
                <div key={label}>
                  <dt className="font-bold">{label}</dt>
                  <dd className="mt-1 text-zinc-600 dark:text-zinc-300">
                    {text}
                  </dd>
                </div>
              ))}
            </dl>
          </details>
        )}
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
          {project.links.map((link) => {
            const label = english ? link.englishLabel : link.label;
            const props = {
              className:
                "inline-flex min-h-11 items-center gap-2 text-sm font-bold text-violet-700 hover:underline dark:text-violet-400",
              onClick: () =>
                trackEvent("project_open", {
                  project: project.id,
                  destination: link.label,
                }),
            };

            return link.href.startsWith("/") ? (
              <Link key={link.href} {...props} to={link.href}>
                {label} <span aria-hidden="true">→</span>
              </Link>
            ) : (
              <a
                key={link.href}
                {...props}
                href={link.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {label} <span aria-hidden="true">↗</span>
                <span className="sr-only">
                  {english ? " (opens in a new tab)" : " (nuova scheda)"}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </article>
  );
}

export function FeaturedProjects({ language }: { language: SiteLanguage }) {
  const english = language === "en";

  return (
    <section aria-labelledby="featured-title" className="section-space">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="eyebrow">
            {english ? "Portfolio" : "Dal codice al progetto"}
          </p>
          <h2 className="section-title" id="featured-title">
            {english ? "Selected projects" : "Lavori da esplorare"}
          </h2>
        </div>
        <Link className="text-link" to={portfolioRoutes.projects[language]}>
          {english ? "All projects" : "Tutti i progetti"} →
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects
          .filter((project) => project.featured)
          .map((project) => (
            <ProjectCard
              key={project.id}
              language={language}
              project={project}
            />
          ))}
      </div>
    </section>
  );
}
