import type { BlogCategoryId } from "../config/blog";
import type { BlogHubSlug } from "../config/blog-hubs";

export type BlogArchivePageCounts = Record<"all" | BlogHubSlug, number>;

export interface BlogSummary {
  id: string;
  title: string;
  date: string;
  category: BlogCategoryId;
  hub?: BlogHubSlug;
  excerpt: string;
  tags: string[];
  minutes: number;
  icon?: string;
}
