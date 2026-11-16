import { useEffect, useState } from "react";

import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";
import type { SiteLanguage } from "@/config/locales";

const themeLabels = {
  it: { light: "Attiva il tema chiaro", dark: "Attiva il tema scuro" },
  en: { light: "Switch to light theme", dark: "Switch to dark theme" },
};

export function ThemeSwitch({
  className = "",
  language,
}: {
  className?: string;
  language: SiteLanguage;
}) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);
  function toggle() {
    const next = !dark;

    document.documentElement.classList.toggle("dark", next);
    document.documentElement.style.colorScheme = next ? "dark" : "light";
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* Optional preference storage. */
    }
    setDark(next);
  }

  return (
    <button
      aria-label={themeLabels[language][dark ? "light" : "dark"]}
      aria-pressed={dark}
      className={`icon-button ${className}`}
      type="button"
      onClick={toggle}
    >
      {dark ? <SunFilledIcon size={22} /> : <MoonFilledIcon size={22} />}
    </button>
  );
}
