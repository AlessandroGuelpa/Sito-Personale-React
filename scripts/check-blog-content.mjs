import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const source = await readFile("src/data/blogPosts.ts", "utf8");
const matches = [...source.matchAll(/^  \{\s*\n\s*id: "([^"]+)"/gm)];
const NO_LONGER_ALLOWED_BOILERPLATE = "I casi sono diversi, ma evidenziano precondizioni";
const DEEP_DIVES = new Set([
  "shopify-inventario-scritture-concorrenti",
  "webhook-riconciliazione-sincronizzazione",
  "shopify-graphql-budget-query",
  "transactional-outbox-invio-erp",
  "webhook-idempotenza-ordini",
  "rails-find-each-batch-memoria",
  "rails-unicita-database-concorrenza",
  "rails-problema-n-piu-1",
  "react-prerender-html-metadati",
  "fetch-abortcontroller-risposte-obsolete",
]);
const ALLOWED_HUBS = new Set([
  "shopify-integrazioni",
  "react-frontend",
  "rails-backend",
  "scienza-passioni",
]);

function contentOf(block, id) {
  const m = /\n\s*content:\s*`/.exec(block);
  assert(m, `Missing content for ${id}`);
  const from = m.index + m[0].length;
  let end = from;
  for (; end < block.length; end += 1) {
    if (block[end] !== "`") continue;
    let slashes = 0;
    for (let i = end - 1; i >= from && block[i] === "\\"; i -= 1) slashes += 1;
    if (slashes % 2 === 0) break;
  }
  assert(end < block.length, `Unclosed content literal: ${id}`);
  return block.slice(from, end).replace(/\\`/g, "`");
}

function editorialWordCount(markdown) {
  const text = markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/~~~[\s\S]*?~~~/g, " ")
    .replace(/\n\*\*(?:Fonti|Documentazione(?: ufficiale)?|Approfondimenti)\*\*[\s\S]*$/i, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/(^|\n)#{1,6}\s+/g, " ")
    .replace(/https?:\/\/\S+/g, " ")
    .replace(/[\\*`]/g, " ");
  return text.trim().split(/\s+/).filter(Boolean).length;
}

const entries = matches.map((match, i) => {
  const id = match[1];
  const block = source.slice(match.index, matches[i + 1]?.index ?? source.lastIndexOf("\n];"));
  return {
    id,
    block,
    hub: block.match(/\n\s*hub: "([^"]+)"/)?.[1],
    date: block.match(/\n\s*date: "([^"]+)"/)?.[1],
    firstPublishedAt: block.match(/\n\s*firstPublishedAt: "([^"]+)"/)?.[1],
    updatedAt: block.match(/\n\s*updatedAt: "([^"]+)"/)?.[1],
    content: contentOf(block, id),
  };
}).filter((post) => post.id !== "overshoot-day-trogloditi"); // Commented-out draft.

const ids = new Set(entries.map((post) => post.id));
assert.equal(ids.size, entries.length, "Every published article must have a unique slug");
assert(entries.length > 0, "No published articles found");
let minWords = Infinity;
const wordCounts = [];
let internalLinks = 0;

for (const post of entries) {
  const expectedPublishedAt = post.firstPublishedAt ?? post.date;
  const expectedModifiedAt = [post.date, post.firstPublishedAt, post.updatedAt].filter(Boolean).sort().at(-1);
  assert(expectedModifiedAt >= expectedPublishedAt, `Invalid publication chronology: ${post.id}`);
  assert(ALLOWED_HUBS.has(post.hub), `Invalid or missing editorial hub: ${post.id}`);
  const count = editorialWordCount(post.content);
  minWords = Math.min(minWords, count);
  wordCounts.push(count);
  assert(count >= 251, `Article ${post.id} has ${count} editorial words: minimum 251`);
  assert(!post.content.includes(NO_LONGER_ALLOWED_BOILERPLATE), `Generic linking filler remains in ${post.id}`);
  if (DEEP_DIVES.has(post.id)) {
    assert(count >= 500, `Specialist article ${post.id} must have at least 500 substantive words, got ${count}`);
  }
  const links = [...post.content.matchAll(/\]\(\/blog\/([a-z0-9-]+)\)/g)].map((match) => match[1]);
  assert(links.length > 0, `Article ${post.id} needs at least one contextual internal link`);
  for (const slug of links) {
    assert(ids.has(slug), `Broken internal link from ${post.id} to ${slug}`);
    assert(slug !== post.id, `Article ${post.id} links to itself`);
    internalLinks++;
  }
}
wordCounts.sort((a, b) => a - b);
const median = wordCounts[Math.floor(wordCounts.length / 2)];
assert(median > 250, `Median article word count must exceed 250, got ${median}`);
console.log(`Blog quality validated: ${entries.length} articles, min ${minWords} words, median ${median}, ${internalLinks} contextual links.`);
