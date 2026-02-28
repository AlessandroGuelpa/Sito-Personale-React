import { motion } from "framer-motion";
import { FaReact, FaShopify } from "react-icons/fa";
import { SiTypescript, SiRubyonrails } from "react-icons/si";

const bentoItems = [
  {
    title: "Frontend Engineering",
    description:
      "Costruisco interfacce utente scalabili e reattive usando React e Tailwind CSS.",
    icon: <FaReact className="w-10 h-10 mb-4 text-cyan-400" />,
    tech: ["React", "Vite", "Tailwind"],
    className:
      "md:col-span-2 md:row-span-2 bg-gradient-to-br from-cyan-500/10 to-blue-500/5",
    border: "hover:border-cyan-500/30 text-cyan-500",
  },
  {
    title: "E-Commerce",
    description: "Sviluppo temi Shopify e Liquid.",
    icon: <FaShopify className="w-8 h-8 mb-3 text-emerald-400" />,
    tech: ["Shopify"],
    className:
      "md:col-span-1 md:row-span-1 bg-gradient-to-br from-emerald-500/10 to-green-500/5",
    border: "hover:border-emerald-500/30 text-emerald-500",
  },
  {
    title: "Backend & DB",
    description: "Sperimento con MVC e database.",
    icon: <SiRubyonrails className="w-8 h-8 mb-3 text-red-500" />,
    tech: ["Rails", "PostgreSQL"],
    className:
      "md:col-span-1 md:row-span-1 bg-gradient-to-br from-red-500/10 to-rose-500/5",
    border: "hover:border-red-500/30 text-red-500",
  },
  {
    title: "Javascript & Logic",
    description: "Type safety, integrationi e logica complessa.",
    icon: <SiTypescript className="w-8 h-8 mb-3 text-blue-500" />,
    tech: ["JS", "TS"],
    className:
      "md:col-span-2 md:row-span-1 bg-gradient-to-br from-blue-500/10 to-indigo-500/5",
    border: "hover:border-blue-500/30 text-blue-500",
  },
];

export const SkillBento = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[minmax(220px,auto)] w-full">
      {bentoItems.map((item, i) => (
        <motion.div
          key={item.title}
          className={`relative group flex flex-col justify-between p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md overflow-hidden transition-all duration-300 ${item.className} ${item.border}`}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {/* Sfondo animato */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/0 dark:from-white/5 dark:to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="z-10 relative">
            {item.icon}
            <h3
              className={`text-xl font-bold mb-2 text-zinc-900 dark:text-zinc-100`}
            >
              {item.title}
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-4">
              {item.description}
            </p>
          </div>

          <div className="flex gap-2 flex-wrap z-10 relative mt-auto">
            {item.tech.map((t) => (
              <span
                key={t}
                className="text-xs font-bold px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 border border-black/5 dark:border-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
