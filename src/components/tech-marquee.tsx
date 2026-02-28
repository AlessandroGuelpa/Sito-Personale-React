import { motion } from "framer-motion";

const skillsLine1 = [
  "React",
  "Javascript",
  "HTML & CSS",
  "Tailwind CSS",
  "Vite",
  "Liquid (Shopify)",
  "React",
  "Javascript",
  "HTML & CSS",
  "Tailwind CSS",
  "Vite",
  "Liquid (Shopify)",
];

const skillsLine2 = [
  "Ruby on Rails",
  "PostgreSQL",
  "MySQL",
  "Git",
  "GitHub",
  "Wordpress",
  "Ruby on Rails",
  "PostgreSQL",
  "MySQL",
  "Git",
  "GitHub",
  "Wordpress",
];

export const TechMarquee = () => {
  return (
    <div className="w-full flex flex-col gap-6 overflow-hidden py-10">
      {/* Prima riga: scorre verso sinistra */}
      <div className="relative flex overflow-hidden group">
        <motion.div
          animate={{ x: [0, -1000] }}
          className="flex space-x-6 whitespace-nowrap min-w-max"
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {skillsLine1.map((tech, i) => (
            <div
              key={`${tech}-${i}`}
              className="bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 text-lg md:text-xl font-bold px-8 py-4 rounded-full shadow-sm hover:scale-105 hover:border-violet-500/50 hover:text-violet-600 dark:hover:text-violet-400 transition-all cursor-default"
            >
              {tech}
            </div>
          ))}
          {/* Duplicato per scroll continuo in caso di schermi larghi */}
          {skillsLine1.map((tech, i) => (
            <div
              key={`${tech}-dup-${i}`}
              className="bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 text-lg md:text-xl font-bold px-8 py-4 rounded-full shadow-sm hover:scale-105 hover:border-violet-500/50 hover:text-violet-600 dark:hover:text-violet-400 transition-all cursor-default"
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Seconda riga: scorre verso destra */}
      <div className="relative flex overflow-hidden group">
        <motion.div
          animate={{ x: [-1000, 0] }}
          className="flex space-x-6 whitespace-nowrap min-w-max"
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
        >
          {skillsLine2.map((tech, i) => (
            <div
              key={`${tech}-${i}`}
              className="bg-zinc-900 dark:bg-white text-zinc-100 dark:text-zinc-900 text-lg md:text-xl font-bold px-8 py-4 rounded-full shadow-sm hover:scale-105 hover:bg-fuchsia-600 dark:hover:bg-fuchsia-500 transition-all cursor-default"
            >
              {tech}
            </div>
          ))}
          {/* Duplicato per scroll continuo */}
          {skillsLine2.map((tech, i) => (
            <div
              key={`${tech}-dup-${i}`}
              className="bg-zinc-900 dark:bg-white text-zinc-100 dark:text-zinc-900 text-lg md:text-xl font-bold px-8 py-4 rounded-full shadow-sm hover:scale-105 hover:bg-fuchsia-600 dark:hover:bg-fuchsia-500 transition-all cursor-default"
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
