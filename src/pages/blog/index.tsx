import { useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { blogIndex } from "virtual:blog-index";

import DefaultLayout from "@/layouts/default";
import { PageSeo } from "@/components/page-seo";
import { BlogCard } from "@/components/blog-card";
import {
  BLOG_CATEGORIES,
  blogCategoryLabel,
  isBlogCategory,
} from "@/config/blog";

const PAGE_SIZE = 12;

export default function BlogPage() {
  const [params, setParams] = useSearchParams();
  const resultsHeading = useRef<HTMLHeadingElement>(null);
  const query = params.get("q") || "";
  const tag = params.get("tag") || "";
  const requestedCategory = params.get("category");
  const category = isBlogCategory(requestedCategory) ? requestedCategory : "";
  const filtered = blogIndex.filter(
    (post) =>
      (!category || post.category === category) &&
      (!tag || post.tags.includes(tag)) &&
      `${post.title} ${post.excerpt} ${post.tags.join(" ")} ${blogCategoryLabel(post.category)}`
        .toLocaleLowerCase("it")
        .includes(query.trim().toLocaleLowerCase("it")),
  );
  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const requestedPage = Number(params.get("page")) || 1;
  const page = Math.min(pages, Math.max(1, Math.floor(requestedPage)));
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function change(key: string, value: string) {
    const next = new URLSearchParams(params);

    if (value) next.set(key, value);
    else next.delete(key);
    if (key === "category") next.delete("tag");
    next.delete("page");
    setParams(next, { replace: true });
  }
  function goToPage(nextPage: number) {
    const next = new URLSearchParams(params);

    if (nextPage > 1) next.set("page", String(nextPage));
    else next.delete("page");
    setParams(next);
    resultsHeading.current?.focus();
    resultsHeading.current?.scrollIntoView({ block: "start" });
  }

  return (
    <DefaultLayout>
      <PageSeo
        description="Articoli, esperimenti e riflessioni su sviluppo web, tecnologia e scienza. Cerca nell’archivio del blog di Alessandro Guelpa."
        path="/blog"
        title="Blog · Appunti dal codice"
      />
      <header className="max-w-3xl">
        <p className="eyebrow">{blogIndex.length} articoli nell’archivio</p>
        <h1 className="page-title">Appunti e idee dal codice.</h1>
        <p className="page-intro">
          Sviluppo web, esperimenti e qualche deviazione tra tecnologia e
          scienza. Scegli un argomento o cerca qualcosa che ti incuriosisce.
        </p>
      </header>
      <div className="mt-9 grid gap-5 border-y border-zinc-200 py-6 dark:border-zinc-800 sm:grid-cols-[2fr_1fr]">
        <div>
          <label className="field-label" htmlFor="blog-search">
            Cerca nell’archivio
          </label>
          <input
            className="form-field"
            id="blog-search"
            placeholder="Titolo, argomento o parola chiave"
            type="search"
            value={query}
            onChange={(event) => change("q", event.target.value)}
          />
        </div>
        <div>
          <label className="field-label" htmlFor="blog-category">
            Categoria
          </label>
          <select
            className="form-field"
            id="blog-category"
            value={category}
            onChange={(event) => change("category", event.target.value)}
          >
            <option value="">Tutte le categorie</option>
            {BLOG_CATEGORIES.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      {tag && (
        <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
          <span>Argomento specifico:</span>
          <button
            aria-label={`Rimuovi filtro ${tag}`}
            className="tech-tag inline-flex min-h-9 items-center gap-2"
            type="button"
            onClick={() => change("tag", "")}
          >
            {tag} <span aria-hidden="true">×</span>
          </button>
        </div>
      )}
      <section aria-labelledby="blog-results" className="mt-10">
        <h2
          ref={resultsHeading}
          aria-live="polite"
          className="mb-6 scroll-mt-28 text-sm font-semibold outline-none"
          id="blog-results"
          tabIndex={-1}
        >
          {filtered.length}{" "}
          {filtered.length === 1 ? "articolo trovato" : "articoli trovati"} ·
          Pagina {page} di {pages}
        </h2>
        {visible.length ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="py-10 text-center">
            <p>Nessun articolo corrisponde alla ricerca.</p>
            <button
              className="button-secondary mt-5"
              type="button"
              onClick={() => setParams({})}
            >
              Azzera i filtri
            </button>
          </div>
        )}
        {pages > 1 && (
          <nav
            aria-label="Pagine del blog"
            className="mt-9 flex items-center justify-center gap-4"
          >
            <button
              className="button-secondary"
              disabled={page <= 1}
              type="button"
              onClick={() => goToPage(page - 1)}
            >
              ← Precedente
            </button>
            <span className="text-sm">
              {page} / {pages}
            </span>
            <button
              className="button-secondary"
              disabled={page >= pages}
              type="button"
              onClick={() => goToPage(page + 1)}
            >
              Successiva →
            </button>
          </nav>
        )}
      </section>
    </DefaultLayout>
  );
}
