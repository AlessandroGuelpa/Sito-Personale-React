import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { Navbar } from "@/components/navbar";
import { Logo } from "@/components/logo";
import { siteConfig } from "@/config/site";

const socialLinks = [
  {
    label: "GitHub",
    href: siteConfig.links.github,
    icon: <FaGithub className="w-5 h-5" />,
  },
  {
    label: "LinkedIn",
    href: siteConfig.links.linkedin,
    icon: <FaLinkedin className="w-5 h-5" />,
  },
  {
    label: "Instagram",
    href: siteConfig.links.instagram,
    icon: <FaInstagram className="w-5 h-5" />,
  },
  {
    label: "Email",
    href: siteConfig.links.email,
    icon: <MdEmail className="w-5 h-5" />,
  },
];

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Sfondo coeso per tutte le pagine: dot-grid + bagliori aurora */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
      >
        <div className="hero-dot-grid absolute inset-0" />
        <div className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 w-[44rem] h-[44rem] rounded-full bg-violet-500/15 dark:bg-violet-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[34rem] h-[34rem] rounded-full bg-fuchsia-500/10 dark:bg-fuchsia-500/10 blur-3xl" />
      </div>

      <a
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-violet-600 focus:text-white focus:font-bold focus:shadow-lg"
        href="#main-content"
      >
        Salta al contenuto
      </a>
      <Navbar />
      <main
        className="container mx-auto max-w-7xl px-6 flex-grow"
        id="main-content"
      >
        <motion.section
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto px-6 py-10 items-center gap-12"
          exit={{ opacity: 0, y: -20 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {children}
        </motion.section>
      </main>

      <footer className="relative mt-24 border-t border-zinc-200/60 dark:border-white/10">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent"
        />

        <div className="container mx-auto max-w-7xl px-6 py-14">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
            <div className="flex flex-col items-center md:items-start max-w-sm text-zinc-900 dark:text-zinc-100">
              <Logo height={42} />
              <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed text-center md:text-left">
                {siteConfig.description}
              </p>
            </div>

            <nav
              aria-label="Footer"
              className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-semibold"
            >
              {siteConfig.navMenuItems.map((item) => (
                <Link
                  key={item.href}
                  className="text-zinc-500 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                  to={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  aria-label={social.label}
                  className="flex items-center justify-center w-11 h-11 rounded-2xl border border-zinc-200 dark:border-white/10 bg-white/60 dark:bg-zinc-900/60 backdrop-blur text-zinc-600 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-500/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300"
                  href={social.href}
                  rel="noopener noreferrer"
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-zinc-200/60 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400 dark:text-zinc-500">
            <p>
              © {new Date().getFullYear()} Alessandro Guelpa. Tutti i diritti
              riservati.
            </p>
            <p>
              Progettato e sviluppato con{" "}
              <span className="font-semibold text-violet-500">React</span>,{" "}
              <span className="font-semibold text-fuchsia-500">Tailwind</span> e
              tanto caffè.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
