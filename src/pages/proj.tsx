import { useEffect, useState } from "react";
import DefaultLayout from "@/layouts/default";
import Skills from "@/components/skills";
import { Helmet } from "react-helmet";
import CustomLink from '@/components/customlink';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  fork: boolean;
}

interface FrontendProject {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
  link: string;
  techStack: string[];
}

const manualProjects: FrontendProject[] = [
  {
    id: 1,
    title: "Ballerini&Sapori",
    description: "Sito vetrina per un catering specializzato in eventi aziendali, matrimoni e feste private.",
    imgUrl: "/balleriniesapori.com.webp", 
    link: "https://balleriniesapori.com/",
    techStack: ["Wordpress"]
  },
];

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
        <meta name="description" content="Esplora il mio portfolio di progetti." />
        <link rel="canonical" href={pageUrl} />
      </Helmet>
      
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
           <div className="absolute top-20 left-10 w-96 h-96 bg-violet-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
           <div className="absolute top-40 right-10 w-96 h-96 bg-fuchsia-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10">
        <Skills />
        <div className="my-16 border-t border-zinc-200/50 dark:border-zinc-800/50" />

        {/* --- SEZIONE PROGETTI FRONTEND --- */}
        <h2 className="text-5xl md:text-6xl font-black text-center mb-16 tracking-tight drop-shadow-sm">
            Lavori <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-500">Frontend</span>
        </h2>

        {/* MODIFICA 1: Tornato a grid-cols-3 per renderle più compatte in larghezza */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-24">
          {manualProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col h-full bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-violet-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/10 hover:-translate-y-2"
            >
              {/* MODIFICA 2: 
                  - h-80: Altezza ridotta (320px). Se la vuoi ancora più piccola usa h-72 o h-64.
                  - object-top: Mantiene il focus sulla parte alta del sito.
              */}
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block overflow-hidden h-80 w-full relative">
                <div className="absolute inset-0 bg-violet-900/0 group-hover:bg-violet-900/5 transition-colors z-10" />
                <img 
                  src={project.imgUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </a>

              <div className="p-6 flex flex-col flex-grow border-t border-zinc-100 dark:border-zinc-800">
                <div className="flex-grow">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors mb-2">
                      {project.title}
                    </h3>
                  </a>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto flex items-center justify-between flex-wrap gap-2">
                  <div className="flex gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="inline-flex items-center px-2 py-1 rounded text-[10px] font-bold bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <CustomLink
                    href={project.link}
                    aria-label={`Vedi ${project.title}`}
                    target="_blank"
                    className="text-xs font-bold flex items-center gap-1 group/link"
                  >
                    Live <span className="transition-transform group-hover/link:-rotate-45">→</span>
                  </CustomLink>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- SEZIONE GITHUB API (Invariata) --- */}
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16 tracking-tight drop-shadow-sm opacity-80">
            Open Source & <span className="text-zinc-500">GitHub</span>
        </h2>
        {/* ... resto del codice GitHub identico a prima ... */}
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