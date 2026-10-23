import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/logo";

import "@/styles/header.css";

const navigation = [
  { href: "/project", label: "Progetti" },
  { href: "/about", label: "Chi sono" },
  { href: "/blog", label: "Blog" },
  { href: "/sports", label: "Sport" },
  { href: "/vehrt", label: "VEHRT" },
];
const mobileNavigation = [
  ...navigation,
  { href: "/contact", label: "Contatti" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const shell = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [location.key]);

  useEffect(() => {
    if (!open) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      event.preventDefault();
      setOpen(false);
      toggle.current?.focus();
    }
    function closeOutside(event: Event) {
      if (
        event.target instanceof Node &&
        !shell.current?.contains(event.target)
      )
        setOpen(false);
    }
    function closeOnDesktop(event: MediaQueryListEvent) {
      if (!event.matches) return;
      if (
        panel.current?.contains(document.activeElement) ||
        document.activeElement === toggle.current ||
        document.activeElement === document.body
      ) {
        const target =
          shell.current?.querySelector<HTMLAnchorElement>(
            '.header-primary [aria-current="page"]',
          ) ??
          shell.current?.querySelector<HTMLAnchorElement>(".header-primary a");

        target?.focus();
      }
      setOpen(false);
    }
    const desktop = window.matchMedia("(min-width: 64rem)");

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside, true);
    document.addEventListener("focusin", closeOutside);
    desktop.addEventListener("change", closeOnDesktop);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside, true);
      document.removeEventListener("focusin", closeOutside);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
    toggle.current?.focus();
  }

  return (
    <header className="site-header">
      <div ref={shell} className="header-shell">
        <div className="header-row">
          <Link
            aria-label="Alessandro Guelpa — home"
            className="header-brand"
            to="/"
            onClick={() => setOpen(false)}
          >
            <span aria-hidden="true" className="header-brand-mark">
              <Logo markOnly height={30} />
            </span>
            <span className="header-brand-name">
              Alessandro <strong>Guelpa</strong>
              <span aria-hidden="true" className="header-brand-dot">
                .
              </span>
            </span>
          </Link>

          <nav aria-label="Navigazione principale" className="header-primary">
            {navigation.map((item) => (
              <NavLink key={item.href} className="header-link" to={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <ThemeSwitch className="header-control" />
            <NavLink
              className="header-contact"
              to="/contact"
              onClick={() => setOpen(false)}
            >
              Contatti
              <svg
                aria-hidden="true"
                fill="none"
                height="16"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
                width="16"
              >
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </NavLink>
            <button
              ref={toggle}
              aria-controls="mobile-navigation"
              aria-expanded={open}
              aria-label={open ? "Chiudi il menu" : "Apri il menu"}
              className="header-control header-menu-toggle"
              type="button"
              onClick={() => setOpen((current) => !current)}
            >
              <svg
                aria-hidden="true"
                fill="none"
                height="22"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
                width="22"
              >
                <path
                  d={open ? "M6 6l12 12M6 18L18 6" : "M4 7h16M4 12h16M4 17h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        <nav
          ref={panel}
          aria-label="Navigazione mobile"
          className="header-panel"
          hidden={!open}
          id="mobile-navigation"
        >
          <ul className="header-mobile-links">
            {mobileNavigation.map((item) => (
              <li key={item.href}>
                <NavLink
                  className="header-mobile-link"
                  to={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                  <span aria-hidden="true">↗</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
