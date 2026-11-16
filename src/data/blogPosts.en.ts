import type { translatedArticleSlugs } from "../config/locales";
import type { BlogPost } from "./blogPosts";

type EnglishArticleMetadata = Required<
  Pick<BlogPost, "title" | "date" | "excerpt" | "tags">
> &
  Pick<BlogPost, "updatedAt" | "seoTitle" | "seoDescription">;

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
  "javascript-localstorage-persistenza": {
    date: publicationDate,
    title: "Saving Preferences and Drafts with localStorage",
    seoTitle: "JavaScript localStorage for Persistent Browser Data",
    seoDescription:
      "Persist browser preferences and drafts with localStorage. Includes setItem and JSON examples, invalid data, quota errors and limits for sensitive values.",
    excerpt:
      "Practical browser storage with localStorage, JSON and safe fallbacks.",
    tags: ["JavaScript", "localStorage", "Browser storage"],
  },
  "teoria-del-caos-effetto-farfalla-e-css-globale": {
    date: publicationDate,
    title: "How Global CSS Changes Can Break Other Components",
    seoTitle: "Global CSS Regressions, Cascade and Specificity",
    seoDescription:
      "Trace the winning CSS rule in DevTools, narrow global selectors, and check reused components in hover, focus and dark mode.",
    excerpt:
      "Find the rule behind a CSS regression and test its effect across pages.",
    tags: ["CSS", "Frontend", "Cascade", "Specificity"],
  },
  "luna-massa-peso-inerzia": {
    date: publicationDate,
    title: "What Changes When You Move a Load on the Moon",
    seoTitle: "Mass, Weight and Inertia on the Moon",
    seoDescription:
      "Compare the weight of a 12 kg object on Earth and the Moon. Use W = mg and F = ma to see what it takes to support or stop a moving load.",
    excerpt:
      "A 12 kg example shows the two forces involved in supporting and moving a load on the Moon.",
    tags: ["Moon", "Physics", "Gravity", "Engineering"],
  },
  "javascript-moduli-es-import-export": {
    date: publicationDate,
    title: "Organising JavaScript Code with ES Modules",
    seoTitle: "JavaScript ES Modules with import and export",
    seoDescription:
      "See named and default exports in a small example. Use dynamic import and check side effects, code splitting and bundle size.",
    excerpt:
      "Split JavaScript into modules and check how static and dynamic imports affect the build.",
    tags: ["JavaScript", "ES modules", "Frontend", "Bundling"],
  },
  "javascript-intl-formattazione": {
    date: publicationDate,
    title: "Formatting Values for Different Locales with JavaScript Intl",
    seoTitle: "JavaScript Intl for Dates, Numbers and Currency",
    seoDescription:
      "Format dates, numbers and currencies using JavaScript Intl. Examples cover NumberFormat, DateTimeFormat, relative time and explicit time zones.",
    excerpt: "Use native Intl APIs to display the same data across locales.",
    tags: ["JavaScript", "Intl", "Localisation", "Dates"],
  },
  "sonic-pi-live-loop-cuore-del-live-coding": {
    date: publicationDate,
    title: "Playing a Beat Live with Sonic Pi live_loop",
    seoTitle: "Sonic Pi live_loop for Live-Coded Beats",
    seoDescription:
      "Build a kick and hi-hat with two Sonic Pi live loops. Change a pattern during playback and check how loops of different lengths align.",
    excerpt:
      "Use live_loop to update drum patterns without stopping a Sonic Pi set.",
    tags: ["Sonic Pi", "Live coding", "Music", "Ruby"],
  },
  "rails-request-specs-testare-api": {
    date: publicationDate,
    title: "Testing a Rails API Contract with RSpec Request Specs",
    seoTitle: "Rails RSpec Request Specs for API Testing",
    seoDescription:
      "Use GET and POST request specs to verify HTTP status, JSON, permissions and database effects. Includes a Rails API example for valid and invalid input.",
    excerpt:
      "Check the HTTP contract and persistent effects of a Rails API with RSpec.",
    tags: ["Rails", "RSpec", "API", "Testing"],
  },
  "entanglement-quantistico-e-i-disastri-del-global-state": {
    date: publicationDate,
    title: "Choosing Local, Shared and Server State in React",
    seoTitle: "React State Management and When to Use Context",
    seoDescription:
      "Use a cart example to decide which React state stays local, which belongs in Context, and which values you can derive or load from an API.",
    excerpt:
      "Make React state ownership explicit before reaching for a global store.",
    tags: ["React", "Context", "State management", "Frontend"],
  },
  "web-audio-delay-feedback": {
    date: publicationDate,
    title: "Creating Echoes with DelayNode and Feedback",
    seoTitle: "Web Audio DelayNode for a Feedback Delay",
    seoDescription:
      "Build a Web Audio echo with DelayNode and GainNode. Adjust timing and feedback, separate dry and wet signals, and check output when switching presets.",
    excerpt:
      "Route a delay through a feedback gain to create controllable browser audio echoes.",
    tags: ["Web Audio", "DelayNode", "Audio effects", "JavaScript"],
  },
};
