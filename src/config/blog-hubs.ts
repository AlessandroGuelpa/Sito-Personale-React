export const BLOG_HUBS = [
  {
    slug: "shopify-integrazioni",
    title: "Shopify, API e integrazioni ERP",
    description: "Guide su Shopify, GraphQL Admin API, inventario, ordini, webhook e sincronizzazioni affidabili con gestionali.",
    intro: "Dati di catalogo, ordini e magazzino devono restare coerenti anche in presenza di ritardi, retry e richieste concorrenti. Qui raccolgo gli approfondimenti su Shopify, API e integrazioni ERP.",
  },
  {
    slug: "react-frontend",
    title: "React, JavaScript e Frontend",
    description: "Rendering, performance, accessibilità, interfacce e gestione dei dati con React, TypeScript e JavaScript.",
    intro: "Dal rendering SEO-friendly alle interfacce reattive: note pratiche su React, TypeScript, JavaScript, esperienza utente e prestazioni web.",
  },
  {
    slug: "rails-backend",
    title: "Ruby on Rails, backend e architetture",
    description: "Ruby, Rails, database, API, job periodici, affidabilità e progettazione dei servizi backend.",
    intro: "Un servizio backend è utile quando gestisce bene dati, concorrenza ed errori. Qui raccolgo esempi su Rails, API, database, code di lavoro e scelte architetturali.",
  },
  {
    slug: "scienza-passioni",
    title: "Scienza, ingegneria, spazio e passioni",
    description: "Articoli di ingegneria, esplorazione spaziale, ambiente, musica e sperimentazione.",
    intro: "Uno spazio per curiosità e approfondimenti oltre lo sviluppo software: ingegneria, Luna e spazio, sostenibilità, audio e musica generativa.",
  },
] as const;

export type BlogHubSlug = (typeof BLOG_HUBS)[number]["slug"];
export const BLOG_PAGE_SIZE = 12;

export function getBlogHub(slug: string | undefined) {
  return BLOG_HUBS.find((hub) => hub.slug === slug);
}

export function blogHubForPost(post: { hub?: BlogHubSlug; category: string }): BlogHubSlug {
  // Explicit editorial assignment is authoritative. Legacy fixtures use fallback.
  if (post.hub) return post.hub;
  return post.category === "sviluppo-software" ? "react-frontend" : "scienza-passioni";
}

export function blogHubPath(slug: BlogHubSlug) {
  return `/blog/temi/${slug}`;
}

export function blogArchivePath(page: number, slug?: BlogHubSlug) {
  const base = slug ? blogHubPath(slug) : "/blog";
  return page <= 1 ? base : `${base}/page/${page}`;
}
