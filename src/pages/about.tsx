import { useState } from "react";
import { Link } from "react-router-dom";

import DefaultLayout from "@/layouts/default";
import { PageSeo } from "@/components/page-seo";
import { portfolioRoutes, type SiteLanguage } from "@/config/locales";
import { trackEvent } from "@/utils/analytics";
import { SITE_URL, sitePageUrl } from "@/utils/seo";
import { siteConfig } from "@/config/site";

const aboutCopy = {
  it: {
    title: "Chi sono · Esperienza e competenze",
    description:
      "Alessandro Guelpa: 5 anni nello sviluppo web, esperienza professionale Shopify e integrazioni API, progetti personali React e Rails. Percorso e curriculum.",
    role: "Sviluppatore web",
    integrations: "Integrazioni API",
    label: "Chi sono",
    heading: "Alessandro, tra interfacce e integrazioni.",
    intro:
      "Sono uno sviluppatore web con 5 anni di esperienza. Il mio lavoro parte spesso da un e-commerce Shopify e arriva fino ai servizi che lo collegano agli altri sistemi.",
    experience: "Esperienza professionale",
    career: "Il mio percorso",
    employment: "Dal dicembre 2021 in Gesca · E-commerce Developer Senior",
    timelineLabel: "Evoluzione del ruolo",
    timeline: [
      {
        period: "Primi 3 anni",
        title: "Front-end ed e-commerce",
        summary:
          "Sviluppo e manutenzione di e-commerce, principalmente su Shopify: interfacce, personalizzazioni dei temi e migrazioni da altre piattaforme.",
        details: [
          "Prestazioni, riduzione delle app esterne e maggiore autonomia nella gestione dello store.",
          "Analisi delle richieste, stime e sviluppo, con confronto diretto con i clienti.",
        ],
      },
      {
        period: "Ultimi 2 anni",
        title: "Backend e integrazioni",
        summary:
          "Al lavoro sul front-end ho affiancato lo sviluppo di servizi e integrazioni tra Shopify, API esterne e gestionali, anche con Ruby on Rails.",
        details: [
          "Autenticazione OAuth, mapping e persistenza dei dati, sincronizzazioni schedulate.",
          "Gestione degli errori e dei tentativi successivi, per rendere gli scambi tra sistemi più affidabili.",
        ],
      },
    ],
    work: "Come lavoro",
    delivery: "Dalla richiesta alla soluzione",
    deliveryDetails:
      "Analisi, scelte tecniche e sviluppo, mantenendo il confronto con chi userà il progetto.",
    mentoring: "Condivisione nel team",
    mentoringDetails:
      "Supporto e formazione ai colleghi junior, insieme al lavoro sui progetti.",
    personal: "Nei progetti personali",
    personalDetails:
      "Approfondisco React, TypeScript e Rails. Con Launch Tracker collego un’interfaccia per i lanci orbitali a un’API e a un database PostgreSQL.",
    projects: "Guarda i progetti",
    education: "Formazione in corso",
    degree: "Ingegneria Informatica",
    degreeDetails: "Corso di laurea L-8 · Sistemi di elaborazione e controllo",
    degreeSince: "Da settembre 2025",
    background: "Percorso professionale",
    cv: "Il mio curriculum",
    download: "Scarica il CV · PDF",
    preview: "Apri l’anteprima del CV",
    previewLabel: "Curriculum di Alessandro Guelpa",
    previewHelp: "Se il PDF non viene visualizzato,",
    newTab: "aprilo in una nuova scheda",
    interests: "Fuori dal codice",
    interestsDetails:
      "Pratico Jujitsu, mi appassionano le auto e sperimento con la musica. Con VEHRT unisco live coding in Sonic Pi e produzione techno.",
    sports: "Sport e passioni",
    music: "Ascolta VEHRT",
  },
  en: {
    title: "About · Shopify Development Experience",
    description:
      "Meet Alessandro Guelpa, a Shopify developer at Gesca working on storefronts, API and ERP integrations. Explore his experience, education and CV.",
    role: "Web developer",
    integrations: "API integrations",
    label: "About",
    heading: "I’m Alessandro, a Shopify and web developer.",
    intro:
      "I have five years of web development experience. Much of my work starts with a Shopify storefront and extends to the services that connect it to other systems.",
    experience: "Professional experience",
    career: "My career so far",
    employment: "Senior E-commerce Developer at Gesca · Since December 2021",
    timelineLabel: "Career timeline",
    timeline: [
      {
        period: "First three years",
        title: "Frontend and e-commerce",
        summary:
          "I built and maintained e-commerce sites, primarily on Shopify, including storefront interfaces, theme customisations and migrations.",
        details: [
          "I improved storefront performance, reduced reliance on third-party apps and gave merchants more control over their stores.",
          "I worked directly with clients to understand requirements, estimate the work and implement it.",
        ],
      },
      {
        period: "Past two years",
        title: "Backend and integrations",
        summary:
          "Alongside frontend work, I’ve developed services that connect Shopify, external APIs and ERP systems, including work in Ruby on Rails.",
        details: [
          "OAuth authentication, data mapping and persistence, and scheduled synchronisation.",
          "Error handling and retry logic to make data exchanges more reliable.",
        ],
      },
    ],
    work: "How I work",
    delivery: "From requirements to delivery",
    deliveryDetails:
      "I analyse requirements, make technical decisions and build the solution while staying in touch with the people who will use it.",
    mentoring: "Supporting the team",
    mentoringDetails:
      "I mentor junior developers and help them work through technical problems alongside my project work.",
    personal: "Personal projects",
    personalDetails:
      "I use personal projects to deepen my knowledge of React, TypeScript and Rails. Launch Tracker connects an orbital launch interface to an API and a PostgreSQL database.",
    projects: "See my projects",
    education: "Currently studying",
    degree: "Computer Engineering",
    degreeDetails: "L-8 degree programme · Computing and control systems",
    degreeSince: "Since September 2025",
    background: "Professional background",
    cv: "My CV",
    download: "Download CV (in Italian) · PDF",
    preview: "Preview my CV (in Italian)",
    previewLabel: "Alessandro Guelpa’s CV in Italian",
    previewHelp: "If the PDF doesn’t display,",
    newTab: "open it in a new tab",
    interests: "Outside of work",
    interestsDetails:
      "I practise jujitsu, enjoy cars and make music. With VEHRT, I combine live coding in Sonic Pi with techno production.",
    sports: "Sports and interests (in Italian)",
    music: "Listen to VEHRT",
  },
};

export default function AboutPage({ language }: { language: SiteLanguage }) {
  const [showCv, setShowCv] = useState(false);
  const path = portfolioRoutes.about[language];
  const copy = aboutCopy[language];

  return (
    <DefaultLayout>
      <PageSeo
        description={copy.description}
        path={path}
        title={copy.title}
        schema={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          mainEntity: {
            "@type": "Person",
            "@id": `${SITE_URL}/#author`,
            name: "Alessandro Guelpa",
            url: sitePageUrl(path),
            image: `${SITE_URL}/io.jpeg`,
            jobTitle: copy.role,
            knowsAbout: [
              "Shopify",
              "React",
              "Ruby on Rails",
              "TypeScript",
              copy.integrations,
            ],
            sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
          },
        }}
      />
      <header className="max-w-3xl">
        <p className="eyebrow">{copy.label}</p>
        <h1 className="page-title">{copy.heading}</h1>
        <p className="page-intro">{copy.intro}</p>
      </header>
      <section
        aria-labelledby="experience-title"
        className="section-space grid gap-12 lg:grid-cols-[1.4fr_0.8fr] lg:gap-20"
      >
        <div>
          <p className="eyebrow">{copy.experience}</p>
          <h2 className="section-title" id="experience-title">
            {copy.career}
          </h2>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            {copy.employment}
          </p>
          <ol aria-label={copy.timelineLabel} className="career-timeline mt-9">
            {copy.timeline.map(({ period, title, summary, details }) => (
              <li key={period}>
                <p className="career-period">{period}</p>
                <h3 className="mt-2 text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {summary}
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
        <aside
          aria-labelledby="working-title"
          className="lg:border-l lg:border-zinc-200 lg:pl-8 dark:lg:border-zinc-800"
        >
          <h2 className="text-xl font-bold" id="working-title">
            {copy.work}
          </h2>
          <dl className="mt-6 space-y-6">
            <div>
              <dt className="font-semibold">{copy.delivery}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {copy.deliveryDetails}
              </dd>
            </div>
            <div>
              <dt className="font-semibold">{copy.mentoring}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {copy.mentoringDetails}
              </dd>
            </div>
          </dl>
          <div className="mt-8 border-t border-zinc-200 pt-7 dark:border-zinc-800">
            <p className="eyebrow">{copy.personal}</p>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              {copy.personalDetails}
            </p>
            <Link
              className="text-link mt-4 inline-flex min-h-11 items-center"
              to={portfolioRoutes.projects[language]}
            >
              {copy.projects} →
            </Link>
          </div>
        </aside>
      </section>
      <section
        aria-labelledby="education-title"
        className="mt-12 border-y border-zinc-200 py-7 dark:border-zinc-800 sm:flex sm:items-start sm:justify-between sm:gap-8"
      >
        <div>
          <p className="eyebrow">{copy.education}</p>
          <h2 className="text-xl font-bold" id="education-title">
            {copy.degree}
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
            {copy.degreeDetails}
          </p>
        </div>
        <p className="mt-4 shrink-0 text-sm text-zinc-600 dark:text-zinc-400 sm:mt-1">
          {copy.degreeSince}
        </p>
      </section>
      <section aria-labelledby="cv-title" className="section-space">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="eyebrow">{copy.background}</p>
            <h2 className="section-title" id="cv-title">
              {copy.cv}
            </h2>
          </div>
          <a
            download
            className="button-primary"
            href="/AlessandroGuelpa_CV.pdf"
            hrefLang="it"
            onClick={() => trackEvent("cv_download")}
          >
            {copy.download} ↓
          </a>
        </div>
        <details
          className="mt-7 rounded-xl border border-zinc-200 p-5 dark:border-zinc-800"
          onToggle={(event) => setShowCv(event.currentTarget.open)}
        >
          <summary className="cursor-pointer font-semibold">
            {copy.preview}
          </summary>
          {showCv && (
            <iframe
              className="mt-6 h-[650px] w-full rounded-xl border border-zinc-200"
              loading="lazy"
              src="/AlessandroGuelpa_CV.pdf"
              title={copy.previewLabel}
            />
          )}
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            {copy.previewHelp}{" "}
            <a
              className="text-link"
              href="/AlessandroGuelpa_CV.pdf"
              hrefLang="it"
              rel="noopener noreferrer"
              target="_blank"
            >
              {copy.newTab}
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
          {copy.interests}
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-zinc-600 dark:text-zinc-300">
          {copy.interestsDetails}
        </p>
        <div className="mt-5 flex flex-wrap gap-6">
          <Link
            className="text-link min-h-11 inline-flex items-center"
            hrefLang="it"
            to="/sports"
          >
            {copy.sports} →
          </Link>
          <Link
            className="text-link min-h-11 inline-flex items-center"
            to="/vehrt"
          >
            {copy.music} →
          </Link>
        </div>
      </section>
    </DefaultLayout>
  );
}
