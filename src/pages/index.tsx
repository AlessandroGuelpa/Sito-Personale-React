import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

const techCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Javascript",
      "HTML & CSS",
      "Tailwind CSS",
      "Vite",
      "Liquid (Shopify)",
    ],
  },
  {
    title: "Backend & Database",
    skills: ["Ruby on Rails", "PostgreSQL", "MySQL"],
  },
  {
    title: "Tools & Altro",
    skills: ["Git", "GitHub", "Shopify", "Wordpress"],
  },
];

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="relative flex flex-col md:flex-row items-center justify-between gap-12 pt-12 pb-24 py-5 md:pt-10 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-violet-500/30 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob" />
          <div className="absolute top-0 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-fuchsia-500/30 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-1/3 w-72 h-72 md:w-96 md:h-96 bg-pink-500/30 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
        </div>

        <div className="max-w-2xl text-center md:text-left z-10">
          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-6 drop-shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Trasformo idee in <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-500 animate-gradient-x">
              realtà digitali
            </span>
          </motion.h1>
          <motion.h2
            animate={{ opacity: 1, y: 0 }}
            className="text-xl md:text-2xl font-medium text-zinc-600 dark:text-zinc-300 mb-8 leading-relaxed"
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
              className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-violet-600 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-600 hover:bg-violet-700 hover:shadow-lg hover:-translate-y-1 hover:shadow-violet-500/50"
              to="/project"
            >
              Scopri i miei lavori
            </Link>
            <Link
              className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-900 transition-all duration-200 bg-transparent border-2 border-gray-900 dark:border-white dark:text-white font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 hover:-translate-y-1"
              to="/contact"
            >
              Contattami
            </Link>
          </motion.div>
        </div>

        <motion.div
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          className="hidden md:block w-1/3 relative group perspective-1000"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          transition={{ duration: 1, delay: 0.3, type: "spring" }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
          <div className="relative">
            <img
              alt="Alessandro Guelpa"
              className="w-full h-auto rounded-2xl shadow-2xl object-cover transform transition-transform duration-500 hover:scale-[1.02] border-2 border-white/10 rotate-3 hover:rotate-0"
              src="/io.jpeg"
            />
          </div>
        </motion.div>
      </section>

      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/5 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Il Mio Stack Tecnologico
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Gli strumenti che padroneggio per costruire il futuro.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {techCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm p-7 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-violet-500/30 transition-all duration-300 hover:shadow-xl"
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true, margin: "-50px" }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-violet-600 dark:text-violet-400">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((tech) => (
                    <div
                      key={tech}
                      className="bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-sm font-bold px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-700 shadow-sm hover:scale-105 transition-transform cursor-default"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <a
              className="group inline-flex items-center justify-center gap-3 text-xl font-bold text-zinc-800 dark:text-zinc-200 hover:text-violet-600 dark:hover:text-violet-400 transition-colors bg-white dark:bg-zinc-900 px-8 py-4 rounded-full shadow-lg hover:shadow-xl border border-zinc-200 dark:border-zinc-800"
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
    </DefaultLayout>
  );
}
