import type { ReactNode } from "react";

import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaSoundcloud, FaReact, FaRocket, FaChartLine } from "react-icons/fa";

import DefaultLayout from "@/layouts/default";
import Skills from "@/components/skills";
import CustomLink from "@/components/customlink";

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
  imgUrl?: string;
  link: string;
  internal?: boolean;
  coverIcon?: ReactNode;
  coverClass?: string;
  techStack: string[];
  category: "all" | "react" | "landing" | "fullstack";
}

const manualProjects: FrontendProject[] = [
  {
    id: 1,
    title: "Ballerini&Sapori",
    description:
      "Sito vetrina per un catering specializzato in eventi aziendali, matrimoni e feste private.",
    imgUrl: "/balleriniesapori.com.webp",
    link: "https://balleriniesapori.com/",
    techStack: ["Wordpress"],
    category: "landing",
  },
  {
    id: 2,
    title: "Dj_QBIT",
    description:
      "Il mio progetto musicale: DJ set ed elettronica prodotti con il live coding di Sonic Pi, con player SoundCloud integrato.",
    link: "/dj-qbit",
    internal: true,
    coverIcon: <FaSoundcloud className="w-16 h-16 opacity-90" />,
    coverClass: "from-violet-600 via-fuchsia-600 to-orange-500",
    techStack: ["Sonic Pi", "SoundCloud"],
    category: "all",
  },
  {
    id: 3,
    title: "Portfolio Personale",
    description:
      "Il sito che stai visitando: front-end moderno in React, TypeScript, Tailwind e HeroUI, con animazioni, dark mode e attenzione a performance e SEO.",
    link: "https://alessandroguelpa.it",
    coverIcon: <FaReact className="w-16 h-16 opacity-90" />,
    coverClass: "from-violet-600 via-indigo-600 to-cyan-500",
    techStack: ["React", "TypeScript", "Tailwind", "HeroUI"],
    category: "react",
  },
  // ⚠️ Launcher & Tracker: due progetti full-stack "uniti".
  //    Completa link reali, descrizione e techStack qui sotto.
  {
    id: 4,
    title: "Launcher",
    description:
      "Parte del sistema full-stack sviluppato insieme a Tracker. (Descrizione da completare con i dettagli reali del progetto.)",
    link: "https://github.com/AlessandroGuelpa/Launcher",
    coverIcon: <FaRocket className="w-16 h-16 opacity-90" />,
    coverClass: "from-violet-600 via-indigo-600 to-blue-500",
    techStack: ["Full-stack"],
    category: "fullstack",
  },
  {
    id: 5,
    title: "Tracker",
    description:
      "Parte del sistema full-stack sviluppato insieme a Launcher. (Descrizione da completare con i dettagli reali del progetto.)",
    link: "https://github.com/AlessandroGuelpa/Tracker",
    coverIcon: <FaChartLine className="w-16 h-16 opacity-90" />,
    coverClass: "from-fuchsia-600 via-violet-600 to-indigo-500",
    techStack: ["Full-stack"],
    category: "fullstack",
  },
];

const TABS = [
  { id: "all", label: "Tutti i Progetti" },
  { id: "react", label: "React & WebApps" },
  { id: "landing", label: "Siti Vetrina / Landing" },
  { id: "fullstack", label: "Fullstack / Backend" },
] as const;

// Rende un link interno (SPA) o esterno (nuova scheda) a seconda del progetto.
function ProjectMediaLink({
  project,
  className,
  children,
  ariaLabel,
}: {
  project: FrontendProject;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}) {
  if (project.internal) {
    return (
      <Link aria-label={ariaLabel} className={className} to={project.link}>
        {children}
      </Link>
    );
  }

  return (
    <a
      aria-label={ariaLabel}
      className={className}
      href={project.link}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredProjects = manualProjects.filter(
    (project) => activeTab === "all" || project.category === activeTab,
  );

  useEffect(() => {
    fetch("https://api.github.com/users/AlessandroGuelpa/repos")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const filtered = data.filter(
            (repo: Repo) =>
              !repo.fork &&
              ![
                "alessandroguelpa",
                "alessandroguelpa.github.io",
                "esami-di-stato-update",
                "sito-personale-react",
                "launcher",
                "tracker",
              ].includes(repo.name.toLowerCase()),
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
        <meta
          content="Esplora il mio portfolio di progetti."
          name="description"
        />
        <link href={pageUrl} rel="canonical" />
      </Helmet>

      <div className="relative z-10">
        <Skills />
        <div className="my-16 border-t border-zinc-200/50 dark:border-zinc-800/50" />

        {/* --- SEZIONE PROGETTI FRONTEND --- */}
        <h2 className="text-5xl md:text-6xl font-black text-center mb-8 tracking-tight drop-shadow-sm">
          Lavori{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-500">
            Frontend
          </span>
        </h2>

        {/* Tab Bar Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === tab.id
                  ? "text-white"
                  : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {activeTab === tab.id && (
                <motion.div
                  className="absolute inset-0 bg-violet-600 rounded-full"
                  layoutId="activeTabIndicator"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* MODIFICA 1: Tornato a grid-cols-3 per renderle più compatte in larghezza */}
        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-24"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="group relative flex flex-col h-full bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-violet-500/50 transition-colors duration-300 hover:shadow-2xl hover:shadow-violet-500/10"
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
              >
                {/* MODIFICA 2: 
                    - h-80: Altezza ridotta (320px). Se la vuoi ancora più piccola usa h-72 o h-64.
                    - object-top: Mantiene il focus sulla parte alta del sito.
                */}
                <ProjectMediaLink
                  ariaLabel={`Apri ${project.title}`}
                  className="block overflow-hidden h-80 w-full relative"
                  project={project}
                >
                  <div className="absolute inset-0 bg-violet-900/0 group-hover:bg-violet-900/5 transition-colors z-10" />
                  {project.imgUrl ? (
                    <motion.img
                      alt={project.title}
                      className="w-full h-full object-cover object-top"
                      src={project.imgUrl}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      whileHover={{ scale: 1.05 }}
                    />
                  ) : (
                    <div
                      className={`w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br ${
                        project.coverClass ??
                        "from-violet-600 via-fuchsia-600 to-orange-500"
                      } text-white`}
                    >
                      {project.coverIcon ?? (
                        <FaReact className="w-16 h-16 opacity-90" />
                      )}
                      <span className="text-3xl font-black tracking-tight drop-shadow">
                        {project.title}
                      </span>
                    </div>
                  )}
                </ProjectMediaLink>

                <div className="p-6 flex flex-col flex-grow border-t border-zinc-100 dark:border-zinc-800">
                  <div className="flex-grow">
                    <ProjectMediaLink project={project}>
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors mb-2">
                        {project.title}
                      </h3>
                    </ProjectMediaLink>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-auto flex items-center justify-between flex-wrap gap-2">
                    <div className="flex gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center px-2 py-1 rounded text-[10px] font-bold bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <CustomLink
                      aria-label={`${project.internal ? "Apri" : "Vedi"} ${project.title}`}
                      className="text-xs font-bold flex items-center gap-1 group/link"
                      href={project.link}
                      target={project.internal ? undefined : "_blank"}
                    >
                      {project.internal ? "Scopri" : "Live"}{" "}
                      <span className="transition-transform group-hover/link:-rotate-45">
                        →
                      </span>
                    </CustomLink>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- SEZIONE GITHUB API (Invariata) --- */}
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16 tracking-tight drop-shadow-sm opacity-80">
          Open Source & <span className="text-zinc-500">GitHub</span>
        </h2>
        {/* ... resto del codice GitHub identico a prima ... */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-violet-600" />
          </div>
        ) : (
          <motion.div
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
            viewport={{ once: true, margin: "-50px" }}
            whileInView="show"
          >
            {repos.map((repo) => (
              <motion.div
                key={repo.id}
                className="group relative flex flex-col h-full bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl rounded-2xl p-8 border border-zinc-200 dark:border-zinc-800 hover:border-violet-500/50 transition-colors duration-300"
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  show: {
                    opacity: 1,
                    scale: 1,
                    transition: { type: "spring", stiffness: 300, damping: 24 },
                  },
                }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.25)",
                }}
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
                  ) : (
                    <span />
                  )}

                  <CustomLink
                    aria-label={`Apri ${repo.name} su GitHub`}
                    className="text-sm font-bold flex items-center gap-1 group/link"
                    href={repo.html_url}
                    target="_blank"
                  >
                    Repo{" "}
                    <span className="transition-transform group-hover/link:translate-x-1">
                      →
                    </span>
                  </CustomLink>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </DefaultLayout>
  );
}
