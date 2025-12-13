import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVite,
  SiRuby,
  SiRubyonrails,
  SiMysql,
  SiShopify,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { SublimeIcon } from "@/components/icons";

const skills = {
  Frontend: [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-3xl" /> },
    {
      name: "Shopify (Liquid)",
      icon: <SiShopify className="text-green-600 text-3xl" />,
    },
    { name: "React", icon: <FaReact className="text-cyan-400 text-3xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-3xl" /> },
    { name: "Vite", icon: <SiVite className="text-purple-500 text-3xl" /> },
  ],
  Backend: [
    { name: "Ruby", icon: <SiRuby className="text-red-500 text-3xl" /> },
    { name: "Ruby on Rails", icon: <SiRubyonrails className="text-red-600 text-3xl" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600 text-3xl" /> },
    {
      name: "API REST",
      icon: <span className="text-gray-600 dark:text-gray-300 text-3xl">🔗</span>,
    },
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt className="text-orange-600 text-3xl" /> },
    {
      name: "GitHub",
      icon: <FaGithub className="text-gray-800 dark:text-white text-3xl" />,
    },
    { name: "VSCode", icon: <VscCode className="text-blue-500 text-3xl" /> },
    { name: "Sublime Text", icon: <div className="scale-150"><SublimeIcon /></div> },
  ],
};

export default function Skills() {
  return (
    <section className="relative">
      <h2 className="text-5xl md:text-6xl font-black text-center mb-16 tracking-tight drop-shadow-sm">
        Le mie <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-500">Skills</span>
      </h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([category, items]) => (
          <div 
            key={category} 
            className="bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 hover:border-violet-500/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <h2 className="text-3xl font-bold mb-8 text-zinc-800 dark:text-zinc-100 border-b border-zinc-200 dark:border-zinc-700 pb-4">
              {category}
            </h2>
            <ul className="space-y-4">
              {items.map(({ name, icon }) => (
                <li
                  key={name}
                  className="group flex items-center gap-4 bg-white dark:bg-zinc-800/80 rounded-xl px-5 py-4 shadow-sm border border-zinc-100 dark:border-zinc-700/50 hover:scale-102 transition-all duration-200 hover:shadow-md hover:border-violet-200 dark:hover:border-violet-500/30"
                >
                  <div className="transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {icon}
                  </div>
                  <span className="font-semibold text-zinc-700 dark:text-zinc-200 text-lg">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
