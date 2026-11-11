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
  post: Pick<BlogSummary, "id" | "title" | "tags" | "category">,
  index: BlogSummary[],
): BlogSummary[] {
  const hub = blogHubForPost(post);
  const prefix = post.id.startsWith("sonic-pi-") ? "sonic-pi-"
    : post.id.startsWith("web-audio-") ? "web-audio-"
    : post.id.startsWith("rails-") ? "rails-"
    : post.id.startsWith("ruby-") ? "ruby-"
    : post.id.startsWith("javascript-") ? "javascript-"
    : null;

  const inHub = index.filter((candidate) =>
    blogHubForPost(candidate) === hub &&
    (hub !== "scienza-passioni" || candidate.category === post.category),
  );
  const series = prefix
    ? inHub.filter((candidate) => candidate.id.startsWith(prefix))
    : inHub;
  const ordered = (series.length >= 2 ? series : inHub)
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date) || a.id.localeCompare(b.id));
  const position = ordered.findIndex((candidate) => candidate.id === post.id);
  const neighbors = position === -1 ? [] : [
    ordered[position - 1],
    ordered[position + 1],
  ].filter((candidate): candidate is BlogSummary => Boolean(candidate));

  const tags = new Set(post.tags.map(normalize));
  const terms = titleTerms(post.title);
  const selected = new Set([post.id, ...neighbors.map((candidate) => candidate.id)]);
  const relevant = inHub
    .filter((candidate) => !selected.has(candidate.id))
    .map((candidate) => ({
      candidate,
      score:
        candidate.tags.filter((tag) => tags.has(normalize(tag))).length * 4 +
        [...titleTerms(candidate.title)].filter((term) => terms.has(term)).length,
    }))
    .sort((a, b) =>
      b.score - a.score ||
      b.candidate.date.localeCompare(a.candidate.date) ||
      a.candidate.id.localeCompare(b.candidate.id),
    );

  return [...neighbors, ...relevant.map(({ candidate }) => candidate)].slice(0, 3);
}
