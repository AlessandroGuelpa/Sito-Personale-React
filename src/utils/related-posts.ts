import type { BlogSummary } from "../types/blog";

const stopWords = new Set([
  "come",
  "cosa",
  "perché",
  "perche",
  "senza",
  "quando",
  "della",
  "delle",
  "dello",
  "degli",
  "dalla",
  "dalle",
  "nella",
  "nelle",
  "tutto",
  "sono",
  "codice",
  "principio",
  "spiegati",
  "spiegate",
  "capire",
  "primo",
  "prima",
  "davvero",
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

// This runs at build time. Each article receives at most three summaries,
// rather than importing the entire archive into the reading page.
export function selectRelatedPosts(
  post: Pick<BlogSummary, "id" | "title" | "tags">,
  index: BlogSummary[],
): BlogSummary[] {
  const tags = new Set(post.tags.map(normalize));
  const terms = titleTerms(post.title);
  const candidates = index
    .filter((candidate) => candidate.id !== post.id)
    .map((candidate) => ({
      candidate,
      score:
        candidate.tags.filter((tag) => tags.has(normalize(tag))).length * 4 +
        [...titleTerms(candidate.title)].filter((term) => terms.has(term))
          .length,
    }))
    .sort(
      (a, b) =>
        b.score - a.score ||
        b.candidate.date.localeCompare(a.candidate.date) ||
        a.candidate.id.localeCompare(b.candidate.id),
    );
  const related = candidates.filter(({ score }) => score > 0);

  return (related.length ? related : candidates)
    .slice(0, 3)
    .map(({ candidate }) => candidate);
}
