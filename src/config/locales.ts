export const siteLanguages = ["it", "en"] as const;
export type SiteLanguage = (typeof siteLanguages)[number];

export const portfolioRoutes = {
  home: { it: "/", en: "/en" },
  projects: { it: "/project", en: "/en/projects" },
  about: { it: "/about", en: "/en/about" },
  contact: { it: "/contact", en: "/en/contact" },
} as const;

export const blogRoots = { it: "/blog", en: "/en/blog" } as const;

const inventoryArticleId = "shopify-inventario-scritture-concorrenti";

export const translatedArticleSlugs = {
  [inventoryArticleId]: "shopify-erp-inventory-sync",
  "webhook-riconciliazione-sincronizzazione":
    "shopify-webhooks-inventory-reconciliation",
  "shopify-graphql-budget-query": "shopify-graphql-query-cost-rate-limits",
  "transactional-outbox-invio-erp": "rails-transactional-outbox-erp",
  "retry-backoff-jitter-integrazioni": "api-retry-backoff-jitter",
  "webhook-idempotenza-ordini": "shopify-webhook-idempotency-duplicate-orders",
  "shopify-custom-fields-app-vs-codice-nativo": "shopify-line-item-properties",
  "rails-find-each-batch-memoria": "rails-find-each-batch-processing",
  "rails-unicita-database-concorrenza":
    "rails-unique-index-concurrent-requests",
  "rails-problema-n-piu-1": "rails-n-plus-one-queries",
  "react-key-liste-indice-stato": "react-list-keys-state-array-index",
  "react-prerender-html-metadati": "react-prerendering-seo",
  "fetch-abortcontroller-risposte-obsolete":
    "fetch-abortcontroller-stale-responses",
  "osservabilita-log-metriche-tracce": "observability-logs-metrics-traces",
  "polo-sud-lunare-ombre-energia-solare":
    "lunar-south-pole-shadows-solar-power",
  "fatica-metalli-carichi-ciclici": "metal-fatigue-cyclic-loading",
  "giardini-pioggia-deflusso-tetti": "rain-gardens-roof-runoff",
  "javascript-localstorage-persistenza":
    "javascript-localstorage-browser-storage",
  "teoria-del-caos-effetto-farfalla-e-css-globale":
    "global-css-cascade-specificity-regressions",
  "luna-massa-peso-inerzia": "mass-weight-inertia-on-the-moon",
  "javascript-moduli-es-import-export": "javascript-es-modules-import-export",
  "javascript-intl-formattazione":
    "javascript-intl-format-dates-numbers-currency",
  "sonic-pi-live-loop-cuore-del-live-coding": "sonic-pi-live-loop-beat",
  "rails-request-specs-testare-api": "rails-rspec-request-specs-api-testing",
  "entanglement-quantistico-e-i-disastri-del-global-state":
    "react-local-shared-global-state",
  "web-audio-delay-feedback": "web-audio-delaynode-feedback",
} as const;

export const inventoryArticleRoutes = {
  it: `${blogRoots.it}/${inventoryArticleId}`,
  en: `${blogRoots.en}/${translatedArticleSlugs[inventoryArticleId]}`,
} as const;

const localizedRoutes = [
  ...Object.values(portfolioRoutes),
  blogRoots,
  ...Object.entries(translatedArticleSlugs).map(([it, en]) => ({
    it: `${blogRoots.it}/${it}`,
    en: `${blogRoots.en}/${en}`,
  })),
];
const alternatesByPath = new Map(
  localizedRoutes.flatMap((pair) =>
    siteLanguages.map((language) => [pair[language], pair] as const),
  ),
);

export function languageAlternates(path: string) {
  return alternatesByPath.get(path.replace(/\/+$/, "") || "/");
}

export function languageForPath(path: string): SiteLanguage {
  return languageAlternates(path) && (path === "/en" || path.startsWith("/en/"))
    ? "en"
    : "it";
}
