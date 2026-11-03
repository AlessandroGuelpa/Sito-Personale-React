import type { BlogCategoryId } from "../config/blog";

export interface BlogSummary {
  id: string;
  title: string;
  date: string;
  category: BlogCategoryId;
  excerpt: string;
  tags: string[];
  minutes: number;
  icon?: string;
}
