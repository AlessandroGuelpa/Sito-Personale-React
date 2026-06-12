import type { ReactNode } from "react";

import {
  FaReact,
  FaJs,
  FaHtml5,
  FaGitAlt,
  FaGithub,
  FaWordpress,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVite,
  SiShopify,
  SiRubyonrails,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";

interface Tech {
  name: string;
  icon: ReactNode;
}

const techRow1: Tech[] = [
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "HTML & CSS", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Vite", icon: <SiVite className="text-purple-500" /> },
  { name: "Liquid (Shopify)", icon: <SiShopify className="text-green-500" /> },
];

const techRow2: Tech[] = [
  { name: "Ruby on Rails", icon: <SiRubyonrails className="text-red-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-600" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  {
    name: "GitHub",
    icon: <FaGithub className="text-zinc-700 dark:text-zinc-200" />,
  },
  { name: "WordPress", icon: <FaWordpress className="text-blue-400" /> },
];

export const techCount = techRow1.length + techRow2.length;

const TechPill = ({ tech }: { tech: Tech }) => (
  <div className="flex items-center gap-3 rounded-full border border-zinc-200/80 dark:border-white/10 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-sm px-7 py-3.5 text-lg md:text-xl font-bold text-zinc-800 dark:text-zinc-200 shadow-sm hover:border-violet-500/50 hover:text-violet-600 dark:hover:text-violet-400 hover:scale-105 transition-all cursor-default whitespace-nowrap"
  >
    <span className="text-2xl">{tech.icon}</span>
    {tech.name}
  </div>
);

const MarqueeRow = ({
  items,
  reverse = false,
  duration,
}: {
  items: Tech[];
  reverse?: boolean;
  duration: string;
}) => (
  <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
    <div
      className={`flex min-w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"} group-hover:[animation-play-state:paused]`}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    >
      {/* Due copie identiche: la traslazione di -50% rende il loop perfetto */}
      {[0, 1].map((copy) => (
        <div
          key={copy}
          aria-hidden={copy === 1}
          className="flex items-center gap-6 pr-6"
        >
          {items.map((tech) => (
            <TechPill key={`${copy}-${tech.name}`} tech={tech} />
          ))}
        </div>
      ))}
    </div>
  </div>
);

export const TechMarquee = () => {
  return (
    <div className="w-full flex flex-col gap-6 py-10">
      <MarqueeRow duration="28s" items={techRow1} />
      <MarqueeRow reverse duration="34s" items={techRow2} />
    </div>
  );
};
