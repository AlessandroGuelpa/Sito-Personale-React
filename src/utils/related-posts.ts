import type { BlogSummary } from "../types/blog";
import { blogHubForPost } from "../config/blog-hubs";

const stopWords = new Set([
  "come", "cosa", "perché", "perche", "senza", "quando",
  "della", "delle", "dello", "degli", "dalla", "dalle",
  "nella", "nelle", "tutto", "sono", "codice", "principio",
  "spiegati", "spiegate", "capire", "primo", "prima", "davvero",
]);

function normalize(value: string) {
  return value.toLocaleLowerCase("it").normalize("NFKD").replace(/\p{M}/gu, "");
}

function titleTerms(title: string) {
  return new Set(
    (normalize(title).match(/[\p{L}\p{N}]{4,}/gu) ?? []).filter(
      (term) => !stopWords.has(term),
    ),
  );
}

// At build time, every post gets navigable neighbors within the same
// editorial topic plus one closely related article. This avoids dead ends
// and preserves coherent reading paths for older articles.
export function selectRelatedPosts(
  post: Pick<BlogSummary, "id" | "title" | "tags" | "category" | "hub">,
  index: BlogSummary[],
): BlogSummary[] {
  const hub = blogHubForPost(post);
  const prefix = ["sonic-pi-", "web-audio-", "rails-", "ruby-", "javascript-"]
    .find((part) => post.id.startsWith(part));
  const tags = new Set(post.tags.map(normalize));
  const terms = titleTerms(post.title);

  const candidates = index
    .filter((candidate) =>
      candidate.id !== post.id &&
      blogHubForPost(candidate) === hub &&
      (hub !== "scienza-passioni" || candidate.category === post.category),
    )
    .map((candidate) => {
      const sharedTags = candidate.tags.filter((tag) => tags.has(normalize(tag))).length;
      const sharedWords = [...titleTerms(candidate.title)].filter((term) => terms.has(term)).length;
      const sameSeries = Boolean(prefix && candidate.id.startsWith(prefix));
      return { candidate, score: sharedTags * 4 + sharedWords * 2 + (sameSeries ? 4 : 0) };
    })
    .sort((a, b) =>
      b.score - a.score ||
      b.candidate.date.localeCompare(a.candidate.date) ||
      a.candidate.id.localeCompare(b.candidate.id),
    );

  // Avoid unrelated newer articles whenever any topically relevant item exists.
  // Only fall back to latest posts inside the hub when the topic has no matches.
  const relevant = candidates.filter(({ score }) => score > 0);
  return (relevant.length ? relevant : candidates)
    .slice(0, 3)
    .map(({ candidate }) => candidate);
}
