import { useEffect, useState } from "react";

import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";

export function ThemeSwitch({ className = "" }: { className?: string }) {
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
      aria-label={dark ? "Attiva il tema chiaro" : "Attiva il tema scuro"}
      aria-pressed={dark}
      className={`icon-button ${className}`}
      type="button"
      onClick={toggle}
    >
      {dark ? <SunFilledIcon size={22} /> : <MoonFilledIcon size={22} />}
    </button>
  );
}
