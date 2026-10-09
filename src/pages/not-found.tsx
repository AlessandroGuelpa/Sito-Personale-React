import { Link, useLocation } from "react-router-dom";

import DefaultLayout from "@/layouts/default";
import { PageSeo } from "@/components/page-seo";

export default function NotFoundPage() {
  const { pathname } = useLocation();

  return (
    <DefaultLayout>
      <PageSeo
        noindex
        description="Questa pagina non esiste. Riparti dai progetti o dal blog di Alessandro Guelpa."
        path={pathname}
        title="Pagina non trovata"
      />
      <section className="py-24 text-center">
        <p className="eyebrow">Errore 404</p>
        <h1 className="page-title">Pagina non trovata</h1>
        <p className="mt-6 text-zinc-600 dark:text-zinc-300">
          Il link potrebbe essere cambiato. Scegli da dove ripartire.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link className="button-primary" to="/">
            Torna alla home
          </Link>
          <Link className="button-secondary" to="/blog">
            Vai al blog
          </Link>
        </div>
      </section>
    </DefaultLayout>
  );
}
