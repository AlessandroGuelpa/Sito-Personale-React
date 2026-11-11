// Dates are editorial ISO calendar dates (YYYY-MM-DD). Keeping comparisons
// lexicographic avoids local-time and timezone shifts in SEO metadata.
export type ArticleDates = {
  date: string;
  firstPublishedAt?: string;
  updatedAt?: string;
};

export function effectiveArticleDates(post: ArticleDates) {
  const publishedAt = post.firstPublishedAt ?? post.date;
  const modifiedAt = [post.date, post.firstPublishedAt, post.updatedAt]
    .filter((date): date is string => Boolean(date))
    .sort()
    .at(-1) ?? publishedAt;
  return { publishedAt, modifiedAt };
}
