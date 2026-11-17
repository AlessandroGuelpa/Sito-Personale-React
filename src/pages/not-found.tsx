import { Link, useLocation } from "react-router-dom";

import DefaultLayout from "@/layouts/default";
import { PageSeo } from "@/components/page-seo";
import {
  blogRoots,
  languageForPath,
  notFoundRoutes,
  portfolioRoutes,
} from "@/config/locales";

const notFoundCopy = {
  it: {
    title: "Pagina non trovata",
    description:
      "Questa pagina non esiste. Riparti dai progetti o dal blog di Alessandro Guelpa.",
    error: "Errore 404",
    message: "Il link potrebbe essere cambiato. Scegli da dove ripartire.",
    home: "Torna alla home",
    blog: "Vai al blog",
  },
  en: {
    title: "Page not found",
    description:
      "This page could not be found. Continue from Alessandro Guelpa’s homepage or blog.",
    error: "Error 404",
    message: "The link may have changed. Use the homepage or blog to find what you were looking for.",
    home: "Back to home",
    blog: "Go to the blog",
  },
};

export default function NotFoundPage() {
  const { pathname } = useLocation();
  const language = languageForPath(pathname);
  const copy = notFoundCopy[language];

  return (
    <DefaultLayout language={language}>
      <PageSeo
        noindex
        description={copy.description}
        language={language}
        path={notFoundRoutes[language]}
        title={copy.title}
      />
      <section className="py-24 text-center">
        <p className="eyebrow">{copy.error}</p>
        <h1 className="page-title mx-auto">{copy.title}</h1>
        <p className="mt-6 text-zinc-600 dark:text-zinc-300">
          {copy.message}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link className="button-primary" to={portfolioRoutes.home[language]}>
            {copy.home}
          </Link>
          <Link className="button-secondary" to={blogRoots[language]}>
            {copy.blog}
          </Link>
        </div>
      </section>
    </DefaultLayout>
  );
}
