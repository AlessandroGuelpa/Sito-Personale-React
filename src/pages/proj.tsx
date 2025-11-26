import { useEffect, useState } from "react";
import DefaultLayout from "@/layouts/default";
import Skills from "@/components/skills";
import {Helmet} from "react-helmet";
import CustomLink from '@/components/customlink';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  fork: boolean;
}

/*const projects = [
  {
    title: "Portfolio React",
    description: "Sito personale con React + Tailwind + HeroUI, hosting su Aruba.",
    stack: ["React", "Vite", "Tailwind", "Aruba"],
    github: "https://github.com/tuo-utente/portfolio",
    demo: "https://tuodominio.it",
  },
  {
    title: "Form Shopify GDPR",
    description: "Form personalizzato Shopify con tag automatico e privacy integrata.",
    stack: ["Liquid", "Shopify", "HTML", "JavaScript"],
    github: "https://github.com/tuo-utente/shopify-form",
  },
  {
    title: "Rails API + Atelier",
    description: "API backend in Rails per sincronizzare prodotti con Atelier e Shopify.",
    stack: ["Rails", "PostgreSQL", "Shopify API"],
    github: "https://github.com/tuo-utente/rails-api",
  },
];
*/
export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/AlessandroGuelpa/repos")
      .then((res) => res.json())
      .then((data) => {
  const filtered = data.filter(
    (repo: Repo) =>
      !repo.fork &&
      !["AlessandroGuelpa", "alessandroguelpa.github.io", "Esami-di-stato-update"].includes(repo.name)
  );
  setRepos(filtered);
  setLoading(false);
});
  }, []);
      const pageUrl = "https://alessandroguelpa.it/project";
  return (
    <DefaultLayout>
          <Helmet>
        <title>Progetti | Alessandro Guelpa</title>
        <meta name="description" content="Esplora il mio portfolio di progetti: dalle applicazioni web agli esperimenti di codice. Scopri le tecnologie che uso e la mia capacità di trasformare le idee in realtà." />
                 <link rel="canonical" href={pageUrl} />

        {/* Tag Open Graph (per i social) */}
        <meta property="og:title" content="Progetti | Alessandro Guelpa" />
        <meta property="og:description" content="Esplora il mio portfolio di progetti: dalle applicazioni web agli esperimenti di codice. Scopri le tecnologie che uso e la mia capacità di trasformare le idee in realtà." />
        <meta property="og:url" content={pageUrl} />
      </Helmet>
      <Skills />
      <div className="my-8 border-t border-muted-dark" />

      <h2 className="text-4xl text-violet-600 dark:text-violet-500 font-bold text-center mb-12">Progetti GitHub</h2>

      {loading ? (
        <p className="text-center animate-pulse text-zinc-500">
          Caricamento in corso...
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="bg-white rounded-lg shadow p-6 border border-gray-200 dark:bg-zinc-900 transition-all duration-300 hover:scale-[1.02] hover:border-violet-500"
            >
              <h3 className="text-lg font-semibold leading-tight line-clamp-1">
                {repo.name}
              </h3>
              <div className="min-h-[28px]">
              {repo.description && (
                <p className="text-gray-700 text-sm mb-2">
                  {repo.description || "Nessuna descrizione"}
                </p>
              )}
              </div>
             <div className="min-h-[28px]">
  {repo.language && (
    <>
      <span>Linguaggio: </span>
      <span className="bg-zinc-700 text-xs px-2 py-0.5 rounded text-white">
        {repo.language}
      </span>
    </>
  )}
</div>
              <CustomLink
                href={repo.html_url}
                aria-label={`Apri ${repo.name} su GitHub`}
              >
                Vai al repo <span>↗</span>
              </CustomLink>
            </div>
          ))}
        </div>
      )}
    </DefaultLayout>
  );
}
