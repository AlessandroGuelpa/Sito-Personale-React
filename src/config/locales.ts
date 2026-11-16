export const siteLanguages = ["it", "en"] as const;
export type SiteLanguage = (typeof siteLanguages)[number];

export const portfolioRoutes = {
  home: { it: "/", en: "/en" },
  projects: { it: "/project", en: "/en/projects" },
  about: { it: "/about", en: "/en/about" },
  contact: { it: "/contact", en: "/en/contact" },
} as const;

export const blogRoots = { it: "/blog", en: "/en/blog" } as const;

export const inventoryArticleIds = {
  it: "shopify-inventario-scritture-concorrenti",
  en: "shopify-erp-inventory-sync",
} as const;

export const inventoryArticleRoutes = {
  it: `${blogRoots.it}/${inventoryArticleIds.it}`,
  en: `${blogRoots.en}/${inventoryArticleIds.en}`,
} as const;

const localizedRoutes = [
  ...Object.values(portfolioRoutes),
  inventoryArticleRoutes,
];

export function languageAlternates(path: string) {
  const normalizedPath = path.replace(/\/+$/, "") || "/";

  return localizedRoutes.find(
    ({ it, en }) => normalizedPath === it || normalizedPath === en,
  );
}

export function languageForPath(path: string): SiteLanguage {
  return languageAlternates(path)?.en === path.replace(/\/+$/, "")
    ? "en"
    : "it";
}
