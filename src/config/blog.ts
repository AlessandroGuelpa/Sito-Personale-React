import type { SiteLanguage } from "./locales";

export const BLOG_CATEGORIES = [
  {
    id: "sviluppo-software",
    label: "Sviluppo software",
    englishLabel: "Software development",
  },
  { id: "ingegneria", label: "Ingegneria", englishLabel: "Engineering" },
  { id: "spazio", label: "Spazio", englishLabel: "Space" },
  { id: "ambiente", label: "Ambiente", englishLabel: "Environment" },
  {
    id: "musica-audio",
    label: "Musica e audio",
    englishLabel: "Music and audio",
  },
] as const;

export type BlogCategoryId = (typeof BLOG_CATEGORIES)[number]["id"];

export function isBlogCategory(value: string | null): value is BlogCategoryId {
  return BLOG_CATEGORIES.some((category) => category.id === value);
}

export function blogCategoryLabel(
  id: BlogCategoryId,
  language: SiteLanguage = "it",
): string {
  const category = BLOG_CATEGORIES.find((category) => category.id === id);

  return (language === "en" ? category?.englishLabel : category?.label) ?? id;
}
