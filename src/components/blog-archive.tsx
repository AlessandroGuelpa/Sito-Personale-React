import { useEffect, useRef, useState } from "react";
import {
  Link,
  useLocation,
  useNavigationType,
  useParams,
  useSearchParams,
} from "react-router-dom";

import DefaultLayout from "@/layouts/default";
import NotFoundPage from "@/pages/not-found";
import { PageSeo } from "@/components/page-seo";
import { BlogCard } from "@/components/blog-card";
import {
  BLOG_CATEGORIES,
  blogCategoryLabel,
  isBlogCategory,
} from "@/config/blog";
import {
  BLOG_HUBS,
  BLOG_HUB_GUIDES,
  BLOG_PAGE_SIZE,
  blogArchivePath,
  blogHubForPost,
  blogPageCount,
  getBlogHubSlug,
} from "@/config/blog-hubs";
import { englishBlogHubGuides } from "@/config/blog-hub-guides.en";
import {
  blogHubPath,
  blogHubSlugs,
  blogRoots,
  languageAlternates,
  portfolioRoutes,
  type SiteLanguage,
} from "@/config/locales";
import type { BlogArchivePageCounts, BlogSummary } from "@/types/blog";
import { breadcrumbJsonLd, sitePageUrl } from "@/utils/seo";

const archiveCopy = {
  it: {
    title: "Blog · Appunti dal codice",
    description:
      "Articoli e approfondimenti su sviluppo web, ingegneria, tecnologia e scienza di Alessandro Guelpa.",
    breadcrumb: "Percorso di navigazione",
    heading: "Appunti e idee dal codice.",
    intro:
      "Sviluppo web, esperimenti e approfondimenti tra tecnologia e scienza. Esplora i percorsi tematici o cerca nell’archivio.",
    search: "Cerca nell’archivio",
    placeholder: "Titolo, argomento o parola chiave",
    category: "Categoria",
    allCategories: "Tutte le categorie",
    specificTag: "Argomento specifico:",
    removeTag: "Rimuovi filtro",
    oneResult: "articolo trovato",
    results: "articoli trovati",
    page: "Pagina",
    of: "di",
    empty: "Nessun articolo corrisponde alla ricerca.",
    reset: "Azzera i filtri",
    pagination: "Pagine del blog",
    previous: "← Precedente",
    next: "Successiva →",
    topics: "Percorsi tematici",
    guideId: "guida-tematica",
    readGuide: "Leggi la guida tematica ↓",
    guideLabel: "Approfondimento",
    guideTitle: (topic: string) => `Guida a ${topic}`,
    related: "Approfondimenti collegati",
    sources: "Documentazione primaria",
    author: "Articoli di Alessandro Guelpa.",
    authorLink: "Esperienza professionale e profilo dell’autore",
  },
  en: {
    title: "Blog · Web Development, Engineering and Science",
    description:
      "Alessandro Guelpa’s English-language articles on Shopify and ERP integrations, Ruby on Rails, React, engineering and science.",
    breadcrumb: "Breadcrumb",
    heading: "Development, engineering and science.",
    intro:
      "Practical articles on Shopify integrations, Rails and React, plus explorations in engineering and science. Browse by topic or search the archive.",
    search: "Search the archive",
    placeholder: "Title, topic or keyword",
    category: "Category",
    allCategories: "All categories",
    specificTag: "Topic:",
    removeTag: "Remove filter",
    oneResult: "article found",
    results: "articles found",
    page: "Page",
    of: "of",
    empty: "No articles match your search.",
    reset: "Clear filters",
    pagination: "Blog pages",
    previous: "← Previous",
    next: "Next →",
    topics: "Browse by topic",
    guideId: "topic-guide",
    readGuide: "Read the topic guide ↓",
    guideLabel: "In-depth guide",
    guideTitle: (topic: string) => `Guide to ${topic}`,
    related: "Related articles",
    sources: "Primary sources",
    author: "Articles by Alessandro Guelpa.",
    authorLink: "About the author and his work",
  },
};

export function BlogArchive({
  posts,
  language,
  alternatePageCounts,
}: {
  posts: BlogSummary[];
  language: SiteLanguage;
  alternatePageCounts: BlogArchivePageCounts;
}) {
  const copy = archiveCopy[language];
  const english = language === "en";
  const { hub: hubParam, page: pageParam } = useParams<{
    hub?: string;
    page?: string;
  }>();
  const [params, setParams] = useSearchParams();
  const { key: locationKey } = useLocation();
  const isHistoryNavigation = useNavigationType() === "POP";
  const [hydrated, setHydrated] = useState(false);
  const [draftQuery, setDraftQuery] = useState<string | null>(null);
  const resultsHeading = useRef<HTMLHeadingElement>(null);
  const hubSlug = getBlogHubSlug(hubParam, language);
  const hub = hubSlug ? BLOG_HUBS[hubSlug][language] : undefined;
  const guide = hubSlug
    ? (english ? englishBlogHubGuides : BLOG_HUB_GUIDES)[hubSlug]
    : undefined;
  // Static HTML represents the path. Apply query-string filters after hydration.
  useEffect(() => setHydrated(true), []);
  const query = hydrated ? params.get("q") || "" : "";
  useEffect(() => {
    setDraftQuery((draft) =>
      isHistoryNavigation || draft === query ? null : draft,
    );
  }, [isHistoryNavigation, locationKey, query]);
  const tag = hydrated ? params.get("tag") || "" : "";
  const requestedCategory = hydrated ? params.get("category") : null;
  const category = isBlogCategory(requestedCategory) ? requestedCategory : "";
  const hasFilters = Boolean(query || tag || category);
  const allHubPosts = hubSlug
    ? posts.filter((post) => blogHubForPost(post) === hubSlug)
    : posts;
  const normalizedQuery = query.trim().toLocaleLowerCase(language);
  const filtered = allHubPosts.filter(
    (post) =>
      (!category || post.category === category) &&
      (!tag || post.tags.includes(tag)) &&
      `${post.title} ${post.excerpt} ${post.tags.join(" ")} ${blogCategoryLabel(post.category, language)}`
        .toLocaleLowerCase(language)
        .includes(normalizedQuery),
  );
  const totalPages = blogPageCount(filtered.length);
  const pathPage = pageParam ? Number(pageParam) : 1;
  const page = hasFilters
    ? Math.floor(Number(params.get("page")) || 1)
    : pathPage;

  if (
    (hubParam && !hubSlug) ||
    (pageParam &&
      (!Number.isSafeInteger(pathPage) ||
        String(pathPage) !== pageParam ||
        pathPage < 2 ||
        pathPage > blogPageCount(allHubPosts.length))) ||
    !Number.isInteger(page) ||
    page < 1 ||
    page > totalPages
  ) {
    return <NotFoundPage />;
  }

  const canonicalPage = hasFilters ? 1 : page;
  const basePath = blogArchivePath(1, hubSlug, language);
  const canonicalPath = blogArchivePath(canonicalPage, hubSlug, language);
  const alternatePaths =
    canonicalPage <= alternatePageCounts[hubSlug ?? "all"]
      ? {
          it: blogArchivePath(canonicalPage, hubSlug, "it"),
          en: blogArchivePath(canonicalPage, hubSlug, "en"),
        }
      : undefined;
  const visible = filtered.slice(
    (page - 1) * BLOG_PAGE_SIZE,
    page * BLOG_PAGE_SIZE,
  );

  function change(key: string, value: string) {
    const next = new URLSearchParams(params);

    if (key === "q") {
      setDraftQuery(value);
    } else if (draftQuery !== null) {
      if (draftQuery) next.set("q", draftQuery);
      else next.delete("q");
    }
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

  const title = `${hub?.title ?? copy.title}${page > 1 ? ` · ${copy.page} ${page}` : ""}`;

  return (
    <DefaultLayout
      alternatePaths={alternatePaths ?? languageAlternates(basePath)}
      language={language}
    >
      <PageSeo
        alternatePaths={alternatePaths}
        description={hub?.description ?? copy.description}
        language={language}
        path={canonicalPath}
        schema={
          hub
            ? {
                "@context": "https://schema.org",
                "@graph": [
                  breadcrumbJsonLd([
                    {
                      name: "Home",
                      url: sitePageUrl(portfolioRoutes.home[language]),
                    },
                    { name: "Blog", url: sitePageUrl(blogRoots[language]) },
                    { name: hub.title, url: sitePageUrl(basePath) },
                  ]),
                  {
                    "@type": "CollectionPage",
                    name: hub.title,
                    url: sitePageUrl(canonicalPath),
                    description: hub.description,
                    inLanguage: language,
                  },
                ],
              }
            : undefined
        }
        title={title}
      />
      <nav
        aria-label={copy.breadcrumb}
        className="mb-6 text-sm text-zinc-600 dark:text-zinc-400"
      >
        <Link className="text-link" to={portfolioRoutes.home[language]}>
          Home
        </Link>{" "}
        <span aria-hidden="true">/</span>{" "}
        {hub ? (
          <>
            <Link className="text-link" to={blogRoots[language]}>
              Blog
            </Link>{" "}
            <span aria-hidden="true">/</span> {hub.title}
          </>
        ) : (
          "Blog"
        )}
      </nav>
      <header className="max-w-3xl">
        {!english && (
          <p className="eyebrow">
            {allHubPosts.length} articoli{" "}
            {hub ? "in questo percorso" : "nell’archivio"}
          </p>
        )}
        <h1 className="page-title">{hub?.title ?? copy.heading}</h1>
        <p className="page-intro">{hub?.intro ?? copy.intro}</p>
        {guide && page === 1 && (
          <a className="text-link mt-4 inline-flex" href={`#${copy.guideId}`}>
            {copy.readGuide}
          </a>
        )}
      </header>
      {!hub && (
        <section aria-labelledby="archive-topics" className="mt-9">
          <h2 className="text-xl font-bold mb-4" id="archive-topics">
            {copy.topics}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {blogHubSlugs.map((slug) => {
              const item = BLOG_HUBS[slug][language];

              return (
                <Link
                  key={slug}
                  to={blogHubPath(slug, language)}
                  className="block border border-zinc-200 rounded-xl p-5 hover:border-violet-500 dark:border-zinc-800 dark:hover:border-violet-500"
                >
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-sm leading-relaxed mt-2 text-zinc-600 dark:text-zinc-400">
                    {item.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>
      )}
      <div className="mt-9 grid gap-5 border-y border-zinc-200 py-6 dark:border-zinc-800 sm:grid-cols-[2fr_1fr]">
        <div>
          <label className="field-label" htmlFor="blog-search">
            {copy.search}
          </label>
          <input
            className="form-field"
            id="blog-search"
            placeholder={copy.placeholder}
            type="search"
            value={draftQuery ?? query}
            onChange={(event) => change("q", event.target.value)}
          />
        </div>
        <div>
          <label className="field-label" htmlFor="blog-category">
            {copy.category}
          </label>
          <select
            className="form-field"
            id="blog-category"
            value={category}
            onChange={(event) => change("category", event.target.value)}
          >
            <option value="">{copy.allCategories}</option>
            {BLOG_CATEGORIES.map((item) => (
              <option key={item.id} value={item.id}>
                {blogCategoryLabel(item.id, language)}
              </option>
            ))}
          </select>
        </div>
      </div>
      {tag && (
        <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
          <span>{copy.specificTag}</span>
          <button
            aria-label={`${copy.removeTag} ${tag}`}
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
          {filtered.length === 1 ? copy.oneResult : copy.results} · {copy.page}{" "}
          {page} {copy.of} {totalPages}
        </h2>
        {visible.length ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((post) => (
              <BlogCard key={post.id} language={language} post={post} />
            ))}
          </div>
        ) : (
          <div className="py-10 text-center">
            <p>{copy.empty}</p>
            <button
              className="button-secondary mt-5"
              type="button"
              onClick={() => {
                setDraftQuery(null);
                setParams({});
              }}
            >
              {copy.reset}
            </button>
          </div>
        )}
        {totalPages > 1 && (
          <nav
            aria-label={copy.pagination}
            className="mt-9 flex items-center justify-center gap-4"
          >
            {hasFilters ? (
              <button
                className="button-secondary"
                disabled={page <= 1}
                type="button"
                onClick={() => goToPage(page - 1)}
              >
                {copy.previous}
              </button>
            ) : page > 1 ? (
              <Link
                className="button-secondary"
                to={blogArchivePath(page - 1, hubSlug, language)}
              >
                {copy.previous}
              </Link>
            ) : (
              <span aria-hidden="true" />
            )}
            <span className="text-sm">
              {page} / {totalPages}
            </span>
            {hasFilters ? (
              <button
                className="button-secondary"
                disabled={page >= totalPages}
                type="button"
                onClick={() => goToPage(page + 1)}
              >
                {copy.next}
              </button>
            ) : page < totalPages ? (
              <Link
                className="button-secondary"
                to={blogArchivePath(page + 1, hubSlug, language)}
              >
                {copy.next}
              </Link>
            ) : (
              <span aria-hidden="true" />
            )}
          </nav>
        )}
      </section>
      {guide && page === 1 && hub && (
        <section
          id={copy.guideId}
          aria-labelledby={`${copy.guideId}-title`}
          className="mt-14 border-t border-zinc-200 pt-10 dark:border-zinc-800"
        >
          <p className="eyebrow">{copy.guideLabel}</p>
          <h2
            id={`${copy.guideId}-title`}
            className="text-2xl font-bold tracking-tight"
          >
            {copy.guideTitle(hub.title)}
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-zinc-700 dark:text-zinc-300">
            {guide.introduction}
          </p>
          <div className="mt-8 grid gap-9">
            {guide.sections.map((section) => (
              <section
                key={section.id}
                aria-labelledby={section.id}
                className="max-w-3xl"
              >
                <h3 className="text-xl font-bold" id={section.id}>
                  {section.title}
                </h3>
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 leading-relaxed text-zinc-700 dark:text-zinc-300"
                  >
                    {paragraph}
                  </p>
                ))}
                <p className="mt-4 text-sm font-semibold">{copy.related}</p>
                <ul className="mt-2 list-disc space-y-2 pl-5">
                  {section.links.map((item) => {
                    const italianPath = `${blogRoots.it}/${item.id}`;
                    const translatedPath =
                      languageAlternates(italianPath)?.[language];

                    return (
                      <li key={item.id}>
                        <Link
                          className="text-link"
                          hrefLang={translatedPath ? language : "it"}
                          to={translatedPath ?? italianPath}
                        >
                          {item.label}
                          {english && !translatedPath && " (in Italian)"}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}
          </div>
          <p className="mt-9 text-sm font-semibold">{copy.sources}</p>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm">
            {guide.sources.map((source) => (
              <li key={source.url}>
                <a
                  className="text-link"
                  href={source.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
      {hub && (
        <p className="mt-10 text-sm text-zinc-600 dark:text-zinc-400">
          {copy.author}{" "}
          <Link className="text-link" to={portfolioRoutes.about[language]}>
            {copy.authorLink}
          </Link>
          .
        </p>
      )}
    </DefaultLayout>
  );
}
