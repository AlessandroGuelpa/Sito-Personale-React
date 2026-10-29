import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { LuCoffee } from "react-icons/lu";

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
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-violet-600 focus:text-white focus:font-bold focus:shadow-lg"
        href="#main-content"
      >
        Salta al contenuto
      </a>
      <Navbar />
      <main
        className="mx-auto w-full max-w-6xl px-5 sm:px-8 flex-grow outline-none"
        id="main-content"
        tabIndex={-1}
      >
        <div className="mx-auto py-10 sm:py-14">{children}</div>
      </main>

      <footer className="site-footer mt-20 border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-12">
          <div className="grid gap-9 md:grid-cols-[1fr_auto] md:gap-16">
            <div className="max-w-sm">
              <Link
                aria-label="Alessandro Guelpa — home"
                className="inline-flex min-h-11 items-center gap-2 font-bold tracking-tight"
                to="/"
              >
                <span aria-hidden="true" className="shrink-0">
                  <Logo markOnly height={30} />
                </span>
                <span>
                  Alessandro Guelpa<span className="text-accent">.</span>
                </span>
              </Link>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {siteConfig.description}
              </p>
            </div>
            <nav
              aria-label="Pagine nel footer"
              className="grid grid-cols-2 gap-x-10 gap-y-1 self-start text-sm font-medium sm:gap-x-16"
            >
              {siteConfig.navMenuItems.map((item) => (
                <Link
                  key={item.href}
                  className="footer-link inline-flex min-h-11 items-center"
                  to={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-zinc-200 pt-5 dark:border-zinc-800">
            <ul
              aria-label="Social e contatti"
              className="flex flex-wrap gap-x-5 gap-y-1"
            >
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    className="footer-link inline-flex min-h-11 items-center gap-2 text-sm"
                    href={social.href}
                    rel="noopener noreferrer"
                    target={
                      social.href.startsWith("mailto:") ? undefined : "_blank"
                    }
                  >
                    <span aria-hidden="true">{social.icon}</span>
                    {social.label}
                    {!social.href.startsWith("mailto:") && (
                      <span className="sr-only"> (nuova scheda)</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
            <a
              className="footer-link inline-flex min-h-11 items-center gap-2 text-sm"
              href={siteConfig.links.buyMeACoffee}
              rel="noopener noreferrer"
              target="_blank"
            >
              <LuCoffee aria-hidden="true" className="h-4 w-4" />
              Offrimi un caffè<span className="sr-only"> (nuova scheda)</span>
            </a>
          </div>
          <div className="mt-5 flex flex-col gap-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400 sm:flex-row sm:justify-between">
            <p>© {new Date().getFullYear()} Alessandro Guelpa.</p>
            <p>Progettato e sviluppato con React e Tailwind.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
