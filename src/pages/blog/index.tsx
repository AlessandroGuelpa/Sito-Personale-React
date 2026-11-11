import { useRef } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { blogIndex } from "virtual:blog-index";

import DefaultLayout from "@/layouts/default";
import NotFoundPage from "@/pages/not-found";
import { PageSeo } from "@/components/page-seo";
import { BlogCard } from "@/components/blog-card";
import { BLOG_CATEGORIES, blogCategoryLabel, isBlogCategory } from "@/config/blog";
import { BLOG_HUBS, BLOG_PAGE_SIZE, blogArchivePath, blogHubForPost, blogHubPath, getBlogHub } from "@/config/blog-hubs";
import { SITE_URL, breadcrumbJsonLd } from "@/utils/seo";

export default function BlogPage() {
  const { hub: hubSlug, page: pageParam } = useParams<{ hub?: string; page?: string }>();
  const [params, setParams] = useSearchParams();
  const resultsHeading = useRef<HTMLHeadingElement>(null);
  const hub = getBlogHub(hubSlug);
  const query = params.get("q") || "";
  const tag = params.get("tag") || "";
  const requestedCategory = params.get("category");
  const category = isBlogCategory(requestedCategory) ? requestedCategory : "";
  const hasFilters = Boolean(query || tag || category);
  const allHubPosts = hub ? blogIndex.filter((post) => blogHubForPost(post) === hub.slug) : blogIndex;
  const filtered = allHubPosts.filter(
    (post) =>
      (!category || post.category === category) &&
      (!tag || post.tags.includes(tag)) &&
      `${post.title} ${post.excerpt} ${post.tags.join(" ")} ${blogCategoryLabel(post.category)}`
        .toLocaleLowerCase("it")
        .includes(query.trim().toLocaleLowerCase("it")),
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / BLOG_PAGE_SIZE));
  const requestedPage = hasFilters
    ? Number(params.get("page")) || 1
    : pageParam ? Number(pageParam) : 1;
  const page = Math.floor(requestedPage);
  const basePath = hub ? blogHubPath(hub.slug) : "/blog";
  const canonicalPath = blogArchivePath(page, hub?.slug);
  const visible = filtered.slice((page - 1) * BLOG_PAGE_SIZE, page * BLOG_PAGE_SIZE);

  if ((hubSlug && !hub) || !Number.isInteger(page) || page < 1 || page > totalPages || page === 1 && Boolean(pageParam)) {
    return <NotFoundPage />;
  }

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

  const title = hub
    ? `${hub.title}${page > 1 ? ` · Pagina ${page}` : ""}`
    : `Blog · Appunti dal codice${page > 1 ? ` · Pagina ${page}` : ""}`;

  return (
    <DefaultLayout>
      <PageSeo
        description={hub?.description ?? "Articoli e approfondimenti su sviluppo web, ingegneria, tecnologia e scienza di Alessandro Guelpa."}
        path={hasFilters ? canonicalPath : canonicalPath}
        schema={hub ? {
          "@context": "https://schema.org",
          "@graph": [
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "Blog", url: `${SITE_URL}/blog` },
              { name: hub.title, url: `${SITE_URL}${basePath}` },
            ]),
            {
              "@type": "CollectionPage",
              name: hub.title,
              url: `${SITE_URL}${canonicalPath}`,
              description: hub.description,
            },
          ],
        } : undefined}
        title={title}
      />
      <nav aria-label="Percorso di navigazione" className="mb-6 text-sm text-zinc-600 dark:text-zinc-400">
        <Link className="text-link" to="/">Home</Link> <span aria-hidden="true">/</span>{" "}
        {hub ? <><Link className="text-link" to="/blog">Blog</Link> <span aria-hidden="true">/</span> {hub.title}</> : "Blog"}
      </nav>
      <header className="max-w-3xl">
        <p className="eyebrow">{allHubPosts.length} articoli {hub ? "in questo percorso" : "nell’archivio"}</p>
        <h1 className="page-title">{hub?.title ?? "Appunti e idee dal codice."}</h1>
        <p className="page-intro">{hub?.intro ?? "Sviluppo web, esperimenti e approfondimenti tra tecnologia e scienza. Esplora i percorsi tematici o cerca nell’archivio."}</p>
      </header>
      <section aria-label="Percorsi tematici" className="mt-9">
        <h2 className="text-xl font-bold mb-4">Percorsi tematici</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {BLOG_HUBS.map((item) => (
            <Link
              key={item.slug}
              to={blogHubPath(item.slug)}
              className="block border border-zinc-200 rounded-xl p-5 hover:border-violet-500 dark:border-zinc-800 dark:hover:border-violet-500"
              aria-current={hub?.slug === item.slug ? "page" : undefined}
            >
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-sm leading-relaxed mt-2 text-zinc-600 dark:text-zinc-400">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <div className="mt-9 grid gap-5 border-y border-zinc-200 py-6 dark:border-zinc-800 sm:grid-cols-[2fr_1fr]">
        <div>
          <label className="field-label" htmlFor="blog-search">Cerca nell’archivio</label>
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
          <label className="field-label" htmlFor="blog-category">Categoria</label>
          <select
            className="form-field"
            id="blog-category"
            value={category}
            onChange={(event) => change("category", event.target.value)}
          >
            <option value="">Tutte le categorie</option>
            {BLOG_CATEGORIES.map((item) => (
              <option key={item.id} value={item.id}>{item.label}</option>
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
          {filtered.length} {filtered.length === 1 ? "articolo trovato" : "articoli trovati"} · Pagina {page} di {totalPages}
        </h2>
        {visible.length ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((post) => <BlogCard key={post.id} post={post} />)}
          </div>
        ) : (
          <div className="py-10 text-center">
            <p>Nessun articolo corrisponde alla ricerca.</p>
            <button className="button-secondary mt-5" type="button" onClick={() => setParams({})}>Azzera i filtri</button>
          </div>
        )}
        {totalPages > 1 && (
          <nav aria-label="Pagine del blog" className="mt-9 flex items-center justify-center gap-4">
            {hasFilters ? (
              <button className="button-secondary" disabled={page <= 1} type="button" onClick={() => goToPage(page - 1)}>← Precedente</button>
            ) : page > 1 ? (
              <Link className="button-secondary" to={blogArchivePath(page - 1, hub?.slug)}>← Precedente</Link>
            ) : <span aria-hidden="true" />}
            <span className="text-sm">{page} / {totalPages}</span>
            {hasFilters ? (
              <button className="button-secondary" disabled={page >= totalPages} type="button" onClick={() => goToPage(page + 1)}>Successiva →</button>
            ) : page < totalPages ? (
              <Link className="button-secondary" to={blogArchivePath(page + 1, hub?.slug)}>Successiva →</Link>
            ) : <span aria-hidden="true" />}
          </nav>
        )}
      </section>
      {hub && <p className="mt-10 text-sm text-zinc-600 dark:text-zinc-400">Articoli di Alessandro Guelpa. <Link className="text-link" to="/about">Esperienza professionale e profilo dell'autore</Link>.</p>}
    </DefaultLayout>
  );
}
