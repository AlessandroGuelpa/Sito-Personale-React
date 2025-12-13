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
        if (Array.isArray(data)) {
          const filtered = data.filter(
            (repo: Repo) =>
              !repo.fork &&
              !["AlessandroGuelpa", "alessandroguelpa.github.io", "Esami-di-stato-update"].includes(repo.name)
          );
          setRepos(filtered);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);
      const pageUrl = "https://alessandroguelpa.it/project";
  return (
    <DefaultLayout>
      <Helmet>
        <title>Progetti | Alessandro Guelpa</title>
        <meta name="description" content="Esplora il mio portfolio di progetti: dalle applicazioni web agli esperimenti di codice. Scopri le tecnologie che uso e la mia capacità di trasformare le idee in realtà." />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content="Progetti | Alessandro Guelpa" />
        <meta property="og:description" content="Esplora il mio portfolio di progetti: dalle applicazioni web agli esperimenti di codice. Scopri le tecnologie che uso e la mia capacità di trasformare le idee in realtà." />
        <meta property="og:url" content={pageUrl} />
      </Helmet>
      
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
           <div className="absolute top-20 left-10 w-96 h-96 bg-violet-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
           <div className="absolute top-40 right-10 w-96 h-96 bg-fuchsia-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10">
        <Skills />
        <div className="my-16 border-t border-zinc-200/50 dark:border-zinc-800/50" />

        <h2 className="text-5xl md:text-6xl font-black text-center mb-16 tracking-tight drop-shadow-sm">
            Progetti <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-500">GitHub</span>
        </h2>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-violet-600"></div>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo) => (
              <div
                key={repo.id}
                className="group relative flex flex-col h-full bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl rounded-2xl p-8 border border-zinc-200 dark:border-zinc-800 hover:border-violet-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/10 hover:-translate-y-2"
              >
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors mb-3 line-clamp-1">
                    {repo.name}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 leading-relaxed line-clamp-3">
                    {repo.description || "Nessuna descrizione disponibile."}
                  </p>
                </div>

                <div className="mt-auto pt-6 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                  {repo.language ? (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-violet-100 dark:bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-500/20">
                      {repo.language}
                    </span>
                  ) : <span></span>}
                  
                  <CustomLink
                    href={repo.html_url}
                    aria-label={`Apri ${repo.name} su GitHub`}
                    target="_blank"
                    className="text-sm font-bold flex items-center gap-1 group/link"
                  >
                    Repo <span className="transition-transform group-hover/link:translate-x-1">→</span>
                  </CustomLink>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </DefaultLayout>
  );
}
