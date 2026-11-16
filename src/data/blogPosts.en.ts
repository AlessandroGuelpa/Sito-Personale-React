import type { translatedArticleSlugs } from "../config/locales";
import type { BlogPost } from "./blogPosts";

type EnglishArticleMetadata = Required<
  Pick<BlogPost, "title" | "date" | "excerpt" | "tags">
> &
  Pick<BlogPost, "updatedAt">;

const publicationDate = "2026-11-16";

export const englishBlogMetadata: Record<
  keyof typeof translatedArticleSlugs,
  EnglishArticleMetadata
> = {
  "shopify-inventario-scritture-concorrenti": {
    title: "Shopify–ERP Inventory Sync: Handling Concurrent Stock Updates",
    date: "2026-11-16",
    excerpt:
      "Keep Shopify and ERP inventory in sync when orders arrive mid-update. Use compare-and-swap, reconcile stock movements, and retry safely.",
    tags: ["Shopify", "Inventory", "ERP"],
  },
  "webhook-riconciliazione-sincronizzazione": {
    title: "Shopify Webhooks and Reconciliation for Missed Updates",
    date: publicationDate,
    excerpt:
      "Combine Shopify webhooks with a reconciliation job to recover missed updates, handle out-of-order delivery and resume safely from a checkpoint.",
    tags: ["Shopify", "Webhooks", "ERP", "Reconciliation"],
  },
  "shopify-graphql-budget-query": {
    title: "Shopify GraphQL Admin API Query Costs and Rate Limits",
    date: publicationDate,
    excerpt:
      "Read query costs and throttle status, share the budget across workers, and resume paginated Shopify imports safely.",
    tags: ["Shopify", "GraphQL", "API", "Rate limits"],
  },
  "transactional-outbox-invio-erp": {
    title: "Transactional Outbox in Rails for Reliable ERP Integration",
    date: publicationDate,
    excerpt:
      "Save an order and its outgoing event atomically, then deliver it to an ERP with retries, deduplication and observable delivery state.",
    tags: ["Rails", "ERP", "Idempotency", "Background jobs"],
  },
  "retry-backoff-jitter-integrazioni": {
    title: "API Retries with Exponential Backoff and Jitter",
    date: publicationDate,
    excerpt:
      "Classify failures, spread retries over time and set a total retry budget so your clients do not overload a struggling service.",
    tags: ["API", "Retries", "Backoff", "Idempotency"],
  },
  "webhook-idempotenza-ordini": {
    title: "Shopify Webhook Idempotency for Duplicate Order Events",
    date: publicationDate,
    excerpt:
      "Use stable event and order identifiers, database uniqueness and idempotent workers to prevent a duplicate delivery from creating a second order.",
    tags: ["Shopify", "Webhooks", "Orders", "Idempotency"],
  },
  "shopify-custom-fields-app-vs-codice-nativo": {
    title: "Shopify Line Item Properties for Product Customisation",
    date: publicationDate,
    excerpt:
      "Use Shopify line item properties for engraving, gift notes and other order-specific choices, with form submission and fulfilment checks.",
    tags: ["Shopify", "Liquid", "Product customisation", "Orders"],
  },
  "rails-find-each-batch-memoria": {
    title: "Rails Batch Processing with find_each and Stable Checkpoints",
    date: publicationDate,
    excerpt:
      "Process large Active Record relations in batches, keep memory bounded and resume synchronisation without losing or duplicating work.",
    tags: ["Rails", "Active Record", "Background jobs", "Batch processing"],
  },
  "rails-unicita-database-concorrenza": {
    title: "Rails Uniqueness Validation and Unique Indexes Under Concurrency",
    date: publicationDate,
    excerpt:
      "Use Rails validations and database unique indexes together to handle concurrent writes and return useful errors when requests race.",
    tags: ["Rails", "Active Record", "Databases", "Concurrency"],
  },
  "rails-problema-n-piu-1": {
    title: "Rails N+1 Queries with includes, preload and eager_load",
    date: publicationDate,
    excerpt:
      "Recognise Active Record N+1 queries in logs, choose an eager-loading strategy and measure query time, row counts and memory together.",
    tags: ["Rails", "Active Record", "Databases", "Performance"],
  },
  "react-key-liste-indice-stato": {
    title: "React List Keys and State When an Array Is Reordered",
    date: publicationDate,
    excerpt:
      "A small editable list shows how array-index keys can move input state to the wrong row and how stable record IDs keep it attached.",
    tags: ["React", "JavaScript", "Frontend", "State"],
  },
  "react-prerender-html-metadati": {
    title: "React Prerendering for SEO with HTML and Canonical URLs",
    date: publicationDate,
    excerpt:
      "Send useful HTML on the first response with page-specific metadata, crawlable navigation, working deep links and real HTTP status codes.",
    tags: ["React", "SEO", "HTML", "Performance"],
  },
  "fetch-abortcontroller-risposte-obsolete": {
    title: "Fetch and AbortController for Stale Search Responses",
    date: publicationDate,
    excerpt:
      "Cancel obsolete fetch requests and track which request owns the current UI so a slow response cannot overwrite a newer search.",
    tags: ["JavaScript", "Frontend", "Fetch", "Concurrency"],
  },
  "osservabilita-log-metriche-tracce": {
    title: "Observability with Logs, Metrics and Traces",
    date: publicationDate,
    excerpt:
      "Follow a slow order synchronisation through a dashboard, a trace and correlated logs to see what each signal contributes.",
    tags: ["Engineering", "Observability", "Logs", "Tracing"],
  },
  "polo-sud-lunare-ombre-energia-solare": {
    title: "Solar Power at the Lunar South Pole and the Impact of Shadows",
    date: publicationDate,
    excerpt:
      "Two lunar sites can receive the same total sunlight and need different batteries. A 250 W example shows how to size storage around shadows.",
    tags: ["Moon", "Artemis", "Solar power", "Batteries"],
  },
  "fatica-metalli-carichi-ciclici": {
    title: "Metal Fatigue Under Cyclic Loading",
    date: publicationDate,
    excerpt:
      "A bracket that withstands a static load can fail after many cycles. See how stress concentrations and fatigue testing explain the difference.",
    tags: ["Engineering", "Materials", "Fatigue", "Mechanics"],
  },
  "giardini-pioggia-deflusso-tetti": {
    title: "How Rain Gardens Slow Roof Runoff",
    date: publicationDate,
    excerpt:
      "Work out how much runoff a roof can generate and see what a rain garden can store, absorb and safely release.",
    tags: ["Environment", "Water", "Rain gardens", "Stormwater"],
  },
};
