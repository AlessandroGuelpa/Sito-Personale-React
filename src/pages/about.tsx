import { useState } from "react";
import { Link } from "react-router-dom";

import DefaultLayout from "@/layouts/default";
import { PageSeo } from "@/components/page-seo";
import { trackEvent } from "@/utils/analytics";

export default function AboutPage() {
  const [showCv, setShowCv] = useState(false);

  return (
    <DefaultLayout>
      <PageSeo
        description="Alessandro Guelpa: 5 anni nello sviluppo web, esperienza professionale Shopify e integrazioni API, progetti personali React e Rails. Percorso e curriculum."
        path="/about"
        title="Chi sono · Esperienza e competenze"
      />
      <header className="max-w-3xl">
        <p className="eyebrow">Chi sono</p>
        <h1 className="page-title">
          Alessandro, tra interfacce e integrazioni.
        </h1>
        <p className="page-intro">
          Sono uno sviluppatore web con 5 anni di esperienza. Il mio lavoro
          parte spesso da un e-commerce Shopify e arriva fino ai servizi che lo
          collegano agli altri sistemi.
        </p>
      </header>
      <section
        aria-labelledby="experience-title"
        className="mt-10 grid gap-6 md:grid-cols-[1.2fr_0.8fr]"
      >
        <div className="surface-card p-6 sm:p-8">
          <h2 className="text-2xl font-bold" id="experience-title">
            Il mio percorso
          </h2>
          <div className="mt-5 space-y-5 leading-relaxed text-zinc-600 dark:text-zinc-300">
            <p>
              Ho maturato la maggior parte della mia esperienza professionale su{" "}
              <strong className="text-zinc-900 dark:text-white">Shopify</strong>
              , lavorando allo sviluppo di progetti e-commerce.
            </p>
            <p>
              Mi sono occupato anche di backend e integrazioni con API e
              gestionali, usando tra le altre tecnologie Ruby on Rails. Mi
              interessa capire come l’interfaccia e i dati possano funzionare
              bene insieme.
            </p>
            <p>
              Nei progetti personali approfondisco{" "}
              <strong className="text-zinc-900 dark:text-white">
                React, TypeScript e Rails
              </strong>
              . Launch Tracker è un esempio concreto: un frontend per consultare
              i lanci orbitali e un’API per raccogliere e arricchire i dati.
            </p>
          </div>
          <Link
            className="text-link mt-5 inline-flex min-h-11 items-center"
            to="/project"
          >
            Guarda i progetti →
          </Link>
        </div>
        <aside
          aria-labelledby="skills-title"
          className="surface-card p-6 sm:p-8"
        >
          <h2 className="text-2xl font-bold" id="skills-title">
            Dove concentro il lavoro
          </h2>
          <dl className="mt-6 space-y-6">
            {[
              ["E-commerce", "Shopify · sviluppo web"],
              ["Integrazioni", "API · gestionali · Ruby on Rails"],
              [
                "Progetti personali",
                "React · TypeScript · PostgreSQL · Tailwind",
              ],
            ].map(([label, text]) => (
              <div key={label}>
                <dt className="text-sm font-bold text-violet-700 dark:text-violet-400">
                  {label}
                </dt>
                <dd className="mt-2 text-zinc-600 dark:text-zinc-300">
                  {text}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>
      <section aria-labelledby="cv-title" className="section-space">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="eyebrow">Percorso professionale</p>
            <h2 className="section-title" id="cv-title">
              Il mio curriculum
            </h2>
          </div>
          <a
            download
            className="button-primary"
            href="/AlessandroGuelpa_CV.pdf"
            onClick={() => trackEvent("cv_download")}
          >
            Scarica il CV · PDF ↓
          </a>
        </div>
        <details
          className="surface-card mt-7 p-6"
          onToggle={(event) => setShowCv(event.currentTarget.open)}
        >
          <summary className="cursor-pointer font-semibold">
            Apri l’anteprima del CV
          </summary>
          {showCv && (
            <iframe
              className="mt-6 h-[650px] w-full rounded-xl border border-zinc-200"
              loading="lazy"
              src="/AlessandroGuelpa_CV.pdf"
              title="Curriculum di Alessandro Guelpa"
            />
          )}
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            Se il PDF non viene visualizzato,{" "}
            <a
              className="text-link"
              href="/AlessandroGuelpa_CV.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              aprilo in una nuova scheda
            </a>
            .
          </p>
        </details>
      </section>
      <section
        aria-labelledby="off-code-title"
        className="surface-card mt-12 p-6 sm:p-8"
      >
        <h2 className="text-2xl font-bold" id="off-code-title">
          Fuori dal codice
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-zinc-600 dark:text-zinc-300">
          Pratico Jujitsu, mi appassionano le auto e sperimento con la musica.
          Con VEHRT unisco live coding in Sonic Pi e produzione techno.
        </p>
        <div className="mt-5 flex flex-wrap gap-6">
          <Link
            className="text-link min-h-11 inline-flex items-center"
            to="/sports"
          >
            Sport e passioni →
          </Link>
          <Link
            className="text-link min-h-11 inline-flex items-center"
            to="/vehrt"
          >
            Ascolta VEHRT →
          </Link>
        </div>
      </section>
    </DefaultLayout>
  );
}
