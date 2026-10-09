import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/logo";

const primary = [
  { href: "/project", label: "Progetti" },
  { href: "/about", label: "Chi sono" },
  { href: "/blog", label: "Blog" },
];
const personal = [
  { href: "/sports", label: "Sport e passioni" },
  { href: "/vehrt", label: "VEHRT · Musica" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const toggle = useRef<HTMLButtonElement>(null);
  const details = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    setOpen(false);
    if (details.current) details.current.open = false;
  }, [location.key]);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      if (open) {
        setOpen(false);
        toggle.current?.focus();
      }
      if (details.current?.open) {
        details.current.open = false;
        details.current.querySelector("summary")?.focus();
      }
    }
    document.addEventListener("keydown", closeOnEscape);

    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/70 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-3 sm:px-8">
        <Link aria-label="Alessandro Guelpa — home" className="shrink-0" to="/">
          <Logo className="hidden sm:block" height={36} />
          <Logo markOnly className="sm:hidden" height={34} />
        </Link>
        <nav
          aria-label="Navigazione principale"
          className="hidden lg:flex items-center gap-7 text-sm font-semibold"
        >
          {primary.map((item) => (
            <NavLink key={item.href} className="nav-link" to={item.href}>
              {item.label}
            </NavLink>
          ))}
          <details ref={details} className="relative">
            <summary className="nav-link cursor-pointer py-3">
              Personale
            </summary>
            <div className="absolute right-0 top-full w-52 rounded-2xl border border-zinc-200 bg-white p-2 shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
              {personal.map((item) => (
                <NavLink
                  key={item.href}
                  className="nav-link block rounded-lg px-3 py-3"
                  to={item.href}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </details>
          <NavLink className="button-primary text-sm" to="/contact">
            Contatti
          </NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeSwitch />
          <button
            ref={toggle}
            aria-controls="mobile-navigation"
            aria-expanded={open}
            aria-label={open ? "Chiudi il menu" : "Apri il menu"}
            className="icon-button lg:hidden"
            type="button"
            onClick={() => setOpen(!open)}
          >
            <svg
              aria-hidden="true"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                d={open ? "M6 6l12 12M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>
      <nav
        aria-label="Navigazione mobile"
        className="lg:hidden border-t border-zinc-200 px-5 py-4 dark:border-zinc-800"
        hidden={!open}
        id="mobile-navigation"
      >
        {[...primary, { href: "/contact", label: "Contatti" }, ...personal].map(
          (item) => (
            <NavLink
              key={item.href}
              className="nav-link block rounded-xl px-3 py-3 font-semibold"
              to={item.href}
            >
              {item.label}
            </NavLink>
          ),
        )}
      </nav>
    </header>
  );
}
