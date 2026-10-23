import type { ComponentProps } from "react";

import { useEffect, useRef, useState } from "react";

export function ArticleCodeBlock({
  children,
  ...props
}: ComponentProps<"pre">) {
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
        <span>Codice</span>
        <button disabled={status === "copying"} type="button" onClick={copy}>
          {status === "copied" ? "Copiato ✓" : "Copia codice"}
        </button>
      </div>
      <pre
        ref={code}
        aria-label="Codice dell’esempio"
        role="region"
        tabIndex={0}
        {...props}
      >
        {children}
      </pre>
      <p className="sr-only" role="status">
        {status === "copied" ? "Codice copiato negli appunti." : ""}
      </p>
      {status === "error" && (
        <p className="article-code-error not-prose" role="status">
          Non riesco ad accedere agli appunti. Puoi selezionare e copiare il
          codice.
        </p>
      )}
    </div>
  );
}
