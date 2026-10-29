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
        className="section-space grid gap-12 lg:grid-cols-[1.4fr_0.8fr] lg:gap-20"
      >
        <div>
          <p className="eyebrow">Esperienza professionale</p>
          <h2 className="section-title" id="experience-title">
            Il mio percorso
          </h2>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            Dal dicembre 2021 in Gesca · E-commerce Developer Senior
          </p>
          <ol
            aria-label="Evoluzione del ruolo"
            className="career-timeline mt-9"
          >
            <li>
              <p className="career-period">Primi 3 anni</p>
              <h3 className="mt-2 text-xl font-bold">
                Front-end ed e-commerce
              </h3>
              <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-300">
                Sviluppo e manutenzione di e-commerce, principalmente su
                Shopify: interfacce, personalizzazioni dei temi e migrazioni da
                altre piattaforme.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                <li>
                  Prestazioni, riduzione delle app esterne e maggiore autonomia
                  nella gestione dello store.
                </li>
                <li>
                  Analisi delle richieste, stime e sviluppo, con confronto
                  diretto con i clienti.
                </li>
              </ul>
            </li>
            <li>
              <p className="career-period">Ultimi 2 anni</p>
              <h3 className="mt-2 text-xl font-bold">Backend e integrazioni</h3>
              <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-300">
                Al lavoro sul front-end ho affiancato lo sviluppo di servizi e
                integrazioni tra Shopify, API esterne e gestionali, anche con
                Ruby on Rails.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                <li>
                  Autenticazione OAuth, mapping e persistenza dei dati,
                  sincronizzazioni schedulate.
                </li>
                <li>
                  Gestione degli errori e dei tentativi successivi, per rendere
                  gli scambi tra sistemi più affidabili.
                </li>
              </ul>
            </li>
          </ol>
        </div>
        <aside
          aria-labelledby="working-title"
          className="lg:border-l lg:border-zinc-200 lg:pl-8 dark:lg:border-zinc-800"
        >
          <h2 className="text-xl font-bold" id="working-title">
            Come lavoro
          </h2>
          <dl className="mt-6 space-y-6">
            <div>
              <dt className="font-semibold">Dalla richiesta alla soluzione</dt>
              <dd className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                Analisi, scelte tecniche e sviluppo, mantenendo il confronto con
                chi userà il progetto.
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Condivisione nel team</dt>
              <dd className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                Supporto e formazione ai colleghi junior, insieme al lavoro sui
                progetti.
              </dd>
            </div>
          </dl>
          <div className="mt-8 border-t border-zinc-200 pt-7 dark:border-zinc-800">
            <p className="eyebrow">Nei progetti personali</p>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              Approfondisco React, TypeScript e Rails. Con Launch Tracker
              collego un’interfaccia per i lanci orbitali a un’API e a un
              database PostgreSQL.
            </p>
            <Link
              className="text-link mt-4 inline-flex min-h-11 items-center"
              to="/project"
            >
              Guarda i progetti →
            </Link>
          </div>
        </aside>
      </section>
      <section
        aria-labelledby="education-title"
        className="mt-12 border-y border-zinc-200 py-7 dark:border-zinc-800 sm:flex sm:items-start sm:justify-between sm:gap-8"
      >
        <div>
          <p className="eyebrow">Formazione in corso</p>
          <h2 className="text-xl font-bold" id="education-title">
            Ingegneria Informatica
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
            Corso di laurea L-8 · Sistemi di elaborazione e controllo
          </p>
        </div>
        <p className="mt-4 shrink-0 text-sm text-zinc-600 dark:text-zinc-400 sm:mt-1">
          Da settembre 2025
        </p>
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
          className="mt-7 rounded-xl border border-zinc-200 p-5 dark:border-zinc-800"
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
        className="section-space max-w-3xl border-t border-zinc-200 pt-8 dark:border-zinc-800"
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
