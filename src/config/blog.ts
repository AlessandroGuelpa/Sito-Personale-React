export const BLOG_CATEGORIES = [
  { id: "sviluppo-software", label: "Sviluppo software" },
  { id: "ingegneria", label: "Ingegneria" },
  { id: "spazio", label: "Spazio" },
  { id: "ambiente", label: "Ambiente" },
  { id: "musica-audio", label: "Musica e audio" },
] as const;

export type BlogCategoryId = (typeof BLOG_CATEGORIES)[number]["id"];

export function isBlogCategory(value: string | null): value is BlogCategoryId {
  return BLOG_CATEGORIES.some((category) => category.id === value);
}

export function blogCategoryLabel(id: BlogCategoryId): string {
  return BLOG_CATEGORIES.find((category) => category.id === id)?.label ?? id;
}
