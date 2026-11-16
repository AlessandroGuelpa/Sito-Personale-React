import type { ComponentProps } from "react";
import type { SiteLanguage } from "@/config/locales";

import { useEffect, useRef, useState } from "react";

const codeCopy = {
  it: {
    label: "Codice",
    example: "Codice dell’esempio",
    copy: "Copia codice",
    copied: "Copiato ✓",
    announced: "Codice copiato negli appunti.",
    error:
      "Non riesco ad accedere agli appunti. Puoi selezionare e copiare il codice.",
  },
  en: {
    label: "Code",
    example: "Example code",
    copy: "Copy code",
    copied: "Copied ✓",
    announced: "Code copied to the clipboard.",
    error: "Clipboard access failed. You can select and copy the code.",
  },
};

export function ArticleCodeBlock({
  children,
  language,
  ...props
}: ComponentProps<"pre"> & { language: SiteLanguage }) {
  const labels = codeCopy[language];
  const code = useRef<HTMLPreElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const [status, setStatus] = useState<"idle" | "copying" | "copied" | "error">(
    "idle",
  );

  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    clearTimeout(timer.current);
    setStatus("copying");
    try {
      await navigator.clipboard.writeText(code.current?.textContent ?? "");
      setStatus("copied");
      timer.current = setTimeout(() => setStatus("idle"), 2500);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="article-code-block">
      <div className="article-code-toolbar not-prose">
        <span>{labels.label}</span>
        <button disabled={status === "copying"} type="button" onClick={copy}>
          {status === "copied" ? labels.copied : labels.copy}
        </button>
      </div>
      <pre
        ref={code}
        aria-label={labels.example}
        role="region"
        tabIndex={0}
        {...props}
      >
        {children}
      </pre>
      <p className="sr-only" role="status">
        {status === "copied" ? labels.announced : ""}
      </p>
      {status === "error" && (
        <p className="article-code-error not-prose" role="status">
          {labels.error}
        </p>
      )}
    </div>
  );
}
