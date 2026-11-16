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
  "javascript-set-e-map": {
    date: publicationDate,
    title: "JavaScript Set and Map for Equality and Deduplication",
    excerpt:
      "Choose Set for unique values and Map for keyed data. See how object identity affects deduplication and how to index API records by ID.",
    tags: ["JavaScript", "Set", "Map", "Data structures"],
  },
  "javascript-optional-chaining-nullish": {
    date: publicationDate,
    title: "Optional Chaining and Nullish Coalescing in JavaScript",
    excerpt:
      "Use ?. for optional fields and ?? for defaults while keeping zero, false and empty strings. Includes examples and API validation checks.",
    tags: ["JavaScript", "Optional chaining", "API", "Validation"],
  },
  "javascript-closure-spiegate-bene": {
    date: publicationDate,
    title: "JavaScript Closures and Lexical Scope",
    excerpt:
      "Build a private counter with a closure. See how separate instances capture variables and why callback lifetime matters.",
    tags: ["JavaScript", "Closures", "Functions", "State"],
  },
  "javascript-fetch-api": {
    date: publicationDate,
    title: "Fetch API for HTTP Errors, Timeouts and Aborts",
    excerpt:
      "Make GET and POST requests with fetch, check HTTP status, handle empty responses and cancel obsolete requests with AbortController.",
    tags: ["JavaScript", "Fetch", "API", "AbortController"],
  },
  "javascript-debounce-throttle": {
    date: publicationDate,
    title: "Debounce vs Throttle in JavaScript",
    excerpt:
      "Pick debounce for live search or throttle for periodic updates. A 300 ms example shows how to reduce requests and handle stale results.",
    tags: ["JavaScript", "Debounce", "Throttle", "Frontend"],
  },
  "react-stato-derivato-carrello": {
    date: publicationDate,
    title: "React Derived State for Cart Totals",
    excerpt:
      "Calculate a React cart total from line items and quantities. Keep rendered state consistent during edits, removals and failed updates.",
    tags: ["React", "State management", "E-commerce", "Frontend"],
  },
  "progressive-enhancement-funzione-base": {
    date: publicationDate,
    title: "Progressive Enhancement When JavaScript Loads Slowly",
    excerpt:
      "Start with working HTML links and forms. Test which tasks visitors can complete before scripts or third-party integrations load.",
    tags: ["Frontend", "HTML", "Accessibility", "Performance"],
  },
  "equazione-del-razzo-e-il-problema-del-bundle-da-830kb": {
    date: publicationDate,
    title: "How to Reduce the Initial JavaScript Bundle",
    excerpt:
      "Measure JavaScript download and execution, split route code with dynamic imports, and check that deferred features still load smoothly.",
    tags: ["JavaScript", "Performance", "Code splitting", "SEO"],
  },
  "rails-activerecord-le-basi": {
    date: publicationDate,
    title: "Rails Active Record Models, Queries and SQL",
    excerpt:
      "Create and update records in Rails, compose lazy relations and inspect the SQL and query plans behind Active Record calls.",
    tags: ["Rails", "Active Record", "SQL", "Databases"],
  },
  "rails-associazioni-has-many-belongs-to": {
    date: publicationDate,
    title: "Rails belongs_to and has_many Associations",
    excerpt:
      "Connect Rails models with foreign keys, choose how dependent records are handled, and check query counts when loading associations.",
    tags: ["Rails", "Active Record", "Associations", "Databases"],
  },
  "rails-validazioni-dati-puliti": {
    date: publicationDate,
    title: "Rails Validations and Database Constraints",
    excerpt:
      "Give users clear model validation errors and enforce uniqueness under concurrent writes with a database constraint.",
    tags: ["Rails", "Active Record", "Validation", "Concurrency"],
  },
  "rails-caching-basi": {
    date: publicationDate,
    title: "Rails Caching, Cache Keys and Invalidation",
    excerpt:
      "Use Rails.cache.fetch for expensive results. Choose keys and expiry rules, and test that users see updated data when its source changes.",
    tags: ["Rails", "Caching", "Performance", "Databases"],
  },
  "rails-api-only-mode": {
    date: publicationDate,
    title: "Rails API-Only Mode for JSON Endpoints",
    excerpt:
      "Start a Rails API-only app, return JSON from controllers and define response, permission and pagination rules clients can test.",
    tags: ["Rails", "API", "JSON", "Backend"],
  },
  "latenza-percentili-media-p99": {
    date: publicationDate,
    title: "Latency Percentiles and How to Read p95 and p99",
    excerpt:
      "See what p50, p95 and p99 reveal about slow requests. Read percentiles with traffic volume, route scope and error rates.",
    tags: ["Engineering", "Latency", "Observability", "Performance"],
  },
  "ghiaccio-lunare-risorsa-utilizzabile": {
    date: publicationDate,
    title: "Lunar Ice and the Challenge of Recovering Water",
    excerpt:
      "Follow the engineering steps between finding ice on the Moon and supplying water reliably, from locating deposits to extraction and storage.",
    tags: ["Moon", "Lunar ice", "Space", "Engineering"],
  },
  "kw-kwh-potenza-energia": {
    date: publicationDate,
    title: "kW vs kWh in Power and Energy Calculations",
    excerpt:
      "Calculate how much energy an 800 W device uses in three hours. Learn when to read power, energy or battery capacity.",
    tags: ["Energy", "Power", "Electricity", "Engineering"],
  },
  "allunaggio-paracadute-propulsione": {
    date: publicationDate,
    title: "Why Lunar Landers Use Propulsion to Slow Down",
    excerpt:
      "The Moon’s thin exosphere offers little drag. See how thrust, orbital velocity and terrain shape a controlled lunar landing.",
    tags: ["Moon", "Space", "Lunar landing", "Physics"],
  },
  "sonic-pi-sync-cue": {
    date: publicationDate,
    title: "Sonic Pi cue and sync for Aligning Live Loops",
    excerpt:
      "Send a timing event from a metronome loop and let a bass line wait for it. Check cold starts and edits against the shared pulse.",
    tags: ["Sonic Pi", "Live coding", "Music", "Ruby"],
  },
  "sonic-pi-primo-suono-play-sleep": {
    date: publicationDate,
    title: "Your First Sonic Pi Notes with play and sleep",
    excerpt:
      "Write and run a short Sonic Pi phrase. Use MIDI note numbers and beat durations, and hear how changing sleep changes the rhythm.",
    tags: ["Sonic Pi", "Ruby", "Music", "Live coding"],
  },
  "web-audio-convolver-riverbero": {
    date: publicationDate,
    title: "Convolution Reverb with Web Audio ConvolverNode",
    excerpt:
      "Load an impulse response and build a convolution reverb in Web Audio. Set the dry/wet mix and handle failed audio loads.",
    tags: ["Web Audio", "ConvolverNode", "Reverb", "JavaScript"],
  },
  "http-etag-cache-rivalidazione": {
    title: "ETag and HTTP Cache Revalidation",
    date: publicationDate,
    excerpt:
      "See how If-None-Match and 304 Not Modified let a browser reuse a cached response, and when to choose no-cache or no-store.",
    tags: ["HTTP", "Caching", "Web performance"],
  },
  "forza-di-attrito-e-la-ux-dei-form": {
    title: "Form UX That Reduces Errors and Abandonment",
    date: publicationDate,
    excerpt:
      "Improve form completion with essential fields, persistent labels, accessible error messages and measurements that account for device and traffic.",
    tags: ["UX", "Forms", "Accessibility", "Frontend"],
  },
  "dilatazione-temporale-interstellar-e-optimistic-ui": {
    title: "Optimistic UI with Rollback and Reconciliation",
    date: publicationDate,
    excerpt:
      "Update the UI while a request is pending, roll back failures, and reconcile responses that arrive out of order.",
    tags: ["React", "UX", "Frontend", "Latency"],
  },
  "conservazione-della-massa-e-memory-leaks-in-react": {
    title: "React Memory Leaks and useEffect Cleanup",
    date: publicationDate,
    excerpt:
      "Clean up event listeners, timers, connections and fetch requests in React, then verify with Strict Mode and browser memory tools.",
    tags: ["React", "useEffect", "Memory management", "Frontend"],
  },
  "relativita-del-tempo-e-timezone-nei-database": {
    title: "Database Timestamps, UTC and Local Time Zones",
    date: publicationDate,
    excerpt:
      "Store event timestamps unambiguously and preserve IANA time zones for recurring appointments. Test DST boundaries across the database, API and browser.",
    tags: ["Databases", "UTC", "Time zones", "JavaScript"],
  },
  "il-caffe-luniversita-e-la-magia-del-codice-asincrono": {
    title: "Asynchronous JavaScript with fetch and await",
    date: publicationDate,
    excerpt:
      "Follow a fetch request from its Promise to the rendered result and handle loading, HTTP failures, JSON parsing and stale responses.",
    tags: ["JavaScript", "Fetch", "Async", "Frontend"],
  },
  "web-audio-primo-oscillatore-audiocontext": {
    title: "Web Audio API with AudioContext and an Oscillator",
    date: publicationDate,
    excerpt:
      "Play a short tone from a button in the browser with AudioContext, OscillatorNode and a GainNode to control the level.",
    tags: ["Web Audio API", "AudioContext", "OscillatorNode", "JavaScript"],
  },
  "javascript-promise-async-await": {
    title: "JavaScript Promises and async/await Error Handling",
    date: publicationDate,
    excerpt:
      "Use async/await with fetch, choose between sequential and concurrent work, and decide how to handle rejections and partial results.",
    tags: ["JavaScript", "Promises", "Async", "Fetch"],
  },
  "web-audio-oscillatore-forme-onda": {
    title: "OscillatorNode Waveforms for Web Audio Synthesis",
    date: publicationDate,
    excerpt:
      "Compare sine, triangle, square and sawtooth at the same pitch and envelope, then hear how a low-pass filter changes the harmonics.",
    tags: ["Web Audio API", "OscillatorNode", "Synthesis", "Waveforms"],
  },
  "rails-migrazioni-versionare-il-database": {
    title: "Rails Database Migrations for Safe Schema Changes",
    date: publicationDate,
    excerpt:
      "Version database changes in Rails and plan deploy-compatible migrations, backfills and rollbacks when production data is involved.",
    tags: ["Rails", "Active Record", "Databases", "Migrations"],
  },
  "javascript-event-loop-come-funziona": {
    title: "JavaScript Event Loop with Tasks and Microtasks",
    date: publicationDate,
    excerpt:
      "Predict Promise and timer execution order, understand what delays rendering, and decide when CPU-heavy work belongs in a Web Worker.",
    tags: ["JavaScript", "Event loop", "Promises", "Browser performance"],
  },
  "web-audio-gainnode-volume-envelope": {
    title: "Web Audio GainNode and ADSR Envelopes",
    date: publicationDate,
    excerpt:
      "Shape attack and release with GainNode and AudioParam, avoid audible clicks, and manage levels when several notes play together.",
    tags: ["Web Audio API", "GainNode", "ADSR", "Synthesis"],
  },
  "web-audio-grafo-nodi-connect": {
    title: "Web Audio Graphs and the Signal Path",
    date: publicationDate,
    excerpt:
      "Connect sources, filters, gain and output in Web Audio. Trace dry and wet routes and catch duplicate connections when changing presets.",
    tags: ["Web Audio API", "AudioNode", "Audio graphs", "Effects"],
  },
  "web-audio-biquadfilter": {
    title: "BiquadFilterNode Cutoff, Resonance and Filter Types",
    date: publicationDate,
    excerpt:
      "Shape a Web Audio signal with low-pass, high-pass and band-pass filters. Hear what cutoff and Q do, and automate frequency changes.",
    tags: ["Web Audio API", "BiquadFilterNode", "Filters", "Synthesis"],
  },
  "rails-consumare-api-esterne": {
    title: "Calling External APIs Reliably from Rails",
    date: publicationDate,
    excerpt:
      "Fetch and normalise launch data in Rails, then handle timeouts, invalid responses and retries without discarding the last good result.",
    tags: ["Rails", "API", "Faraday", "Background jobs"],
  },
  "web-audio-metronomo-preciso": {
    title: "Web Audio Metronome with Lookahead Scheduling",
    date: publicationDate,
    excerpt:
      "Schedule clicks on the AudioContext clock, use a JavaScript timer to refill the scheduling window, and handle tempo changes and restart.",
    tags: ["Web Audio API", "Scheduling", "Metronome", "JavaScript"],
  },
  "rails-background-job-active-job": {
    title: "Rails Active Job for Background Work and Retries",
    date: publicationDate,
    excerpt:
      "Move slow work out of Rails requests, then account for queue delays, worker retries and duplicate delivery when updating records.",
    tags: ["Rails", "Active Job", "Background jobs", "Idempotency"],
  },
  "javascript-this-binding": {
    title: "JavaScript this with call, bind and Arrow Functions",
    date: publicationDate,
    excerpt:
      "See what happens when a method is extracted or passed as a callback, and preserve its receiver with bind, call or a wrapper.",
    tags: ["JavaScript", "this", "Functions", "Callbacks"],
  },
  "rails-hotwire-turbo": {
    title: "Hotwire and Turbo in Rails with Frames and Streams",
    date: publicationDate,
    excerpt:
      "Update server-rendered Rails views with Turbo Drive, Frames and Streams, and handle JavaScript setup during navigation.",
    tags: ["Rails", "Hotwire", "Turbo", "HTML"],
  },
  "rails-strong-parameters": {
    title: "Rails Strong Parameters and Mass Assignment",
    date: publicationDate,
    excerpt:
      "Filter the attributes writable through a Rails controller and test the endpoint's input contract alongside authorisation and validation.",
    tags: ["Rails", "Action Controller", "Strong Parameters", "API"],
  },
  "velocita-della-luce-ping-e-content-delivery-network": {
    title: "CDN Caching and Network Latency",
    date: publicationDate,
    excerpt:
      "See when an edge cache lowers TTFB, how to treat personalised responses, and what to measure on cache hits and misses.",
    tags: ["CDN", "HTTP", "Caching", "Web performance"],
  },
  "javascript-metodi-array-essenziali": {
    title: "JavaScript Array Methods from map to reduce",
    date: publicationDate,
    excerpt:
      "Choose map, filter, find, some, every or reduce by the result you need. Handle empty arrays, shared objects and sorting safely.",
    tags: ["JavaScript", "Arrays", "Immutability", "Collections"],
  },
  "javascript-destructuring": {
    title: "JavaScript Destructuring with Defaults and Aliases",
    date: publicationDate,
    excerpt:
      "Unpack objects and arrays, rename bindings, and see how destructuring defaults handle missing fields, undefined and null.",
    tags: ["JavaScript", "Destructuring", "Arrays", "Objects"],
  },
  "javascript-prototipi-ereditarieta": {
    title: "JavaScript Prototype Chains and Inheritance",
    date: publicationDate,
    excerpt:
      "Trace own and inherited properties, see how class extends uses prototypes, and use Object.hasOwn to check where a property lives.",
    tags: ["JavaScript", "Prototypes", "Classes", "Inheritance"],
  },
  "javascript-generatori": {
    title: "JavaScript Generators and Lazy Iteration with yield",
    date: publicationDate,
    excerpt:
      "Produce values on demand with function* and yield, and handle early exits, synchronous work and asynchronous sequences.",
    tags: ["JavaScript", "Generators", "Iterators", "Async"],
  },
  "javascript-proxy-reflect": {
    title: "JavaScript Proxy and Reflect with Traps and Invariants",
    date: publicationDate,
    excerpt:
      "Observe property operations and validate writes using Proxy traps. Delegate with Reflect and keep the target's property invariants intact.",
    tags: ["JavaScript", "Proxy", "Reflect", "Objects"],
  },
  "javascript-web-workers": {
    title: "JavaScript Web Workers for Background Computation",
    date: publicationDate,
    excerpt:
      "Run CPU-heavy code in a Web Worker and pass results back to the main thread. Measure startup, structured cloning and buffer transfer.",
    tags: ["JavaScript", "Web Workers", "Browser performance", "Concurrency"],
  },
  "javascript-immutabilita-structuredclone": {
    title: "JavaScript structuredClone and the Limits of Deep Copying",
    date: publicationDate,
    excerpt:
      "Compare spread and structuredClone on nested objects, then choose between deep copies and targeted immutable updates in React.",
    tags: ["JavaScript", "structuredClone", "React", "Immutability"],
  },
  "rails-mvc-in-tre-minuti": {
    title: "Rails MVC and the Request Lifecycle",
    date: publicationDate,
    excerpt:
      "Follow a request from a Rails controller to an Active Record model and an HTML view, with a clear place for domain rules and service objects.",
    tags: ["Rails", "MVC", "Active Record", "Architecture"],
  },
  "rails-stimulus-js-leggero": {
    title: "Rails Stimulus Controllers, Targets and Actions",
    date: publicationDate,
    excerpt:
      "Attach JavaScript to server-rendered HTML with Stimulus and use connect and disconnect to manage behaviour as Turbo replaces elements.",
    tags: ["Rails", "Stimulus", "Hotwire", "JavaScript"],
  },
  "rails-service-objects": {
    title: "Rails Service Objects with Explicit Contracts",
    date: publicationDate,
    excerpt:
      "Use a plain Ruby class to coordinate a Rails operation and test its results, failures and database or API boundaries.",
    tags: ["Rails", "Ruby", "Service objects", "Testing"],
  },
  "rails-routing-restful": {
    title: "RESTful Routing in Rails with resources",
    date: publicationDate,
    excerpt:
      "Map HTTP methods and paths to Rails controller actions, limit what you expose, and test routing, permissions and missing records.",
    tags: ["Rails", "Routing", "REST", "HTTP"],
  },
  "rails-active-storage-allegati": {
    title: "Rails Active Storage for Uploads and Image Variants",
    date: publicationDate,
    excerpt:
      "Attach files to Rails records, generate image variants and verify upload limits, access permissions and how to remove unused files.",
    tags: ["Rails", "Active Storage", "File uploads", "Images"],
  },
  "rails-full-text-search-postgres": {
    title: "PostgreSQL Full-Text Search with Rails",
    date: publicationDate,
    excerpt:
      "Use pg_search in Rails, tune language and relevance, and check whether a matching GIN index helps your PostgreSQL queries.",
    tags: ["Rails", "PostgreSQL", "Full-text search", "Active Record"],
  },
  "sonic-pi-sample-libreria-integrata": {
    title: "Sonic Pi Samples with Rate, Pan and Beat Stretch",
    date: publicationDate,
    excerpt:
      "Explore the built-in sample library and compare playback rate, stereo position, level and duration before using a sound in a loop.",
    tags: ["Sonic Pi", "Samples", "Live coding", "Music"],
  },
  "sonic-pi-use-synth-scegliere-sintetizzatori": {
    title: "Sonic Pi use_synth for Timbre and Envelopes",
    date: publicationDate,
    excerpt:
      "Compare Prophet, TB-303 and detuned saw sounds on the same notes, then adjust attack, release and cutoff where supported.",
    tags: ["Sonic Pi", "Synthesis", "Live coding", "Timbre"],
  },
  "sonic-pi-with-fx-effetti": {
    title: "Sonic Pi with_fx for Reverb, Echo and Distortion",
    date: publicationDate,
    excerpt:
      "Route notes through effects with with_fx, understand nested effect order, and balance dry and wet signals over a phrase.",
    tags: ["Sonic Pi", "Audio effects", "Reverb", "Live coding"],
  },
  "sonic-pi-scale-accordi": {
    title: "Sonic Pi Scales, Chords and Arpeggios",
    date: publicationDate,
    excerpt:
      "Build melodies from scale and chord in Sonic Pi, then choose a register, vary the rhythm and check how a loop resolves.",
    tags: ["Sonic Pi", "Scales", "Chords", "Live coding"],
  },
  "web-audio-drum-machine-browser": {
    title: "Web Audio Drum Machines with Synthesis and Samples",
    date: publicationDate,
    excerpt:
      "Synthesise a kick, reuse decoded sample buffers, and schedule each hit on the audio clock without accumulating timing drift.",
    tags: ["Web Audio API", "Drum machine", "Synthesis", "Scheduling"],
  },
  "web-audio-sequencer-step": {
    title: "A JavaScript Step Sequencer with Web Audio",
    date: publicationDate,
    excerpt:
      "Turn a pattern grid into timed Web Audio events, derive step duration from BPM, and manage edits to the sequence during playback.",
    tags: ["JavaScript", "Web Audio API", "Sequencer", "Scheduling"],
  },
  "orion-controllo-termico-radiatori-vuoto": {
    title: "Orion Thermal Control and Radiators in Space",
    date: publicationDate,
    excerpt:
      "Follow heat from Orion's systems to the service module radiators. A hypothetical 600 W load shows how to check the thermal balance.",
    tags: ["Orion", "Artemis", "Thermal control", "Spacecraft"],
  },
  "raee-elettronica-fine-vita": {
    title: "E-Waste, Repair and Recycling for Old Electronics",
    date: publicationDate,
    excerpt:
      "Decide whether an old device can be reused or repaired, protect the data on it, and use the right collection route for electronic waste.",
    tags: ["E-waste", "Electronics", "Repair", "Recycling"],
  },
  "ridondanza-guasti-correlati": {
    title: "Redundancy and Correlated Failures",
    date: publicationDate,
    excerpt:
      "See how shared databases, regions or releases can fail together, then define fault domains and test whether failover actually works.",
    tags: ["Engineering", "Reliability", "Redundancy", "Failover"],
  },
  "biodiversita-impollinatori-reti": {
    title: "Pollinator Diversity and Habitat Networks",
    date: publicationDate,
    excerpt:
      "Look beyond hive counts at wild pollinators, seasonal resources and the local habitat conditions that support pollination.",
    tags: ["Biodiversity", "Pollinators", "Habitat", "Environment"],
  },
  "navigazione-spaziale-posizione-orientamento": {
    title: "Spacecraft Navigation with Position and Attitude",
    date: publicationDate,
    excerpt:
      "See what star trackers, optical navigation and radio ranging measure, and how those observations help estimate a spacecraft's state.",
    tags: ["Spacecraft", "Navigation", "Attitude", "Orion"],
  },
  "adr-decisioni-architetturali": {
    title: "Architecture Decision Records with a Queue Example",
    date: publicationDate,
    excerpt:
      "Capture the context, alternatives and consequences of a significant decision in an ADR, and preserve its history when requirements change.",
    tags: ["Engineering", "Architecture", "ADR", "Documentation"],
  },
  "rete-elettrica-flessibilita-domanda": {
    title: "Electricity Grid Flexibility with Storage and Demand Response",
    date: publicationDate,
    excerpt:
      "See why annual energy totals hide grid constraints, how to read a battery's MW and MWh ratings, and when shifting demand can help.",
    tags: ["Electricity grid", "Energy storage", "Demand response", "Energy"],
  },
  "deep-space-network-collegamento": {
    title: "How NASA's Deep Space Network Supports Missions",
    date: publicationDate,
    excerpt:
      "Follow a spacecraft's data and navigation measurements through ground antennas, and see why contact time and bandwidth need planning.",
    tags: ["NASA", "Deep Space Network", "Space communications", "Navigation"],
  },
  "lca-confini-unita-funzionale": {
    title: "Life Cycle Assessment and the Functional Unit",
    date: publicationDate,
    excerpt:
      "Compare products on a shared functional unit and system boundary. See how reuse, washing and transport can change the result.",
    tags: ["Environment", "Life cycle assessment", "LCA", "Sustainability"],
  },
  "finestre-lancio-luna-orbite": {
    title: "How Lunar Launch Windows Work",
    date: publicationDate,
    excerpt:
      "See how Earth–Moon geometry, flight manoeuvres, lighting and return conditions determine when a mission can launch.",
    tags: ["Moon", "Artemis", "Orbital mechanics", "Launch windows"],
  },
  "alberi-citta-calore-progetto": {
    title: "How Urban Trees Provide Shade and Cooling",
    date: publicationDate,
    excerpt:
      "See how tree canopy and evapotranspiration change heat exposure, and plan for soil, water, shade coverage and maintenance.",
    tags: ["Urban trees", "Heat", "Shade", "Environment"],
  },
  "tolleranze-catena-dimensionale": {
    title: "Worst-Case Tolerance Stack-Up for an Assembly",
    date: publicationDate,
    excerpt:
      "Add the tolerances of three spacers, distinguish tolerance from measurement uncertainty, and check the final fit against the requirement.",
    tags: ["Engineering", "Tolerances", "Design", "Manufacturing"],
  },
  "riciclo-raccolta-qualita-materiale": {
    title: "Recycling Collection and Material Quality",
    date: publicationDate,
    excerpt:
      "Follow packaging from collection through sorting and treatment, and see how contamination and local rules affect usable recycled material.",
    tags: ["Recycling", "Waste", "Materials", "Circular economy"],
  },
  "punti-lagrange-equilibrio-instabile": {
    title: "Lagrange Points, L2 and the Webb Telescope's Orbit",
    date: publicationDate,
    excerpt:
      "Understand L2 in a rotating frame, why nearby trajectories need corrections, and how the Sun–Earth geometry helps Webb observe.",
    tags: ["Space", "Lagrange points", "Orbital mechanics", "Webb"],
  },
  "campionamento-aliasing-segnali": {
    title: "Sampling and Aliasing in Signals",
    date: publicationDate,
    excerpt:
      "A wheel that appears to turn backwards illustrates aliasing. Learn what the sampling theorem assumes and why the filter comes first.",
    tags: ["Engineering", "Sampling", "Aliasing", "Signal processing"],
  },
  "impronta-idrica-contesto": {
    title: "Virtual Water and the Green, Blue and Grey Footprints",
    date: publicationDate,
    excerpt:
      "See what each water footprint component measures and why basin, season and supply chain boundaries matter when comparing products.",
    tags: ["Environment", "Water footprint", "Virtual water", "Supply chains"],
  },
  "radiazioni-luna-protezione-massa": {
    title: "Lunar Radiation Shielding and the Spacecraft Mass Budget",
    date: publicationDate,
    excerpt:
      "See how solar particle events and cosmic rays affect lunar mission design, and how materials already on board can help shield the crew.",
    tags: ["Moon", "Radiation shielding", "Orion", "Mission design"],
  },
  "legge-little-code-tempi-attesa": {
    title: "Little's Law for Queue Length and Wait Time",
    date: publicationDate,
    excerpt:
      "Use L = λW to connect average throughput, time in the system and work in progress. A 12-jobs-per-minute example shows the units.",
    tags: ["Engineering", "Queues", "Little's law", "Latency"],
  },
  "spreco-alimentare-misurare-prima": {
    title: "Measuring Food Waste at Home",
    date: publicationDate,
    excerpt:
      "Track what you throw away and why, then compare similar weeks to see whether changing shopping, storage or portion sizes helps.",
    tags: ["Food waste", "Environment", "Measurement", "Households"],
  },
  "polvere-lunare-progettazione": {
    title: "Lunar Dust and the Design of Surface Equipment",
    date: publicationDate,
    excerpt:
      "See why abrasive lunar dust sticks to surfaces, affects seals and joints, and changes how equipment is tested and maintained.",
    tags: ["Moon", "Lunar dust", "Regolith", "Engineering"],
  },
  "feedback-controllo-ritardi-oscillazioni": {
    title: "Feedback Control, Delay and Oscillation",
    date: publicationDate,
    excerpt:
      "See why delayed feedback can overshoot a target and how to test one adjustment at a time, from a thermostat to a job queue.",
    tags: ["Engineering", "Feedback", "Control systems", "Latency"],
  },
  "elettricita-intensita-carbonica": {
    title: "Electricity Carbon Intensity per Kilowatt-Hour",
    date: publicationDate,
    excerpt:
      "Convert electricity use to estimated CO₂e and check what the emission factor covers by time, location and generation mix.",
    tags: ["Electricity", "Carbon intensity", "Emissions", "Energy"],
  },
  "margine-progetto-budget-capacita": {
    title: "Engineering Design Margin and Capacity Budgets",
    date: publicationDate,
    excerpt:
      "Calculate remaining headroom and document the conditions behind it. A memory budget example shows why the denominator and workload matter.",
    tags: ["Engineering", "Design margin", "Capacity", "Systems engineering"],
  },
  "luna-latenza-comunicazioni": {
    title: "Earth–Moon Communication Latency",
    date: publicationDate,
    excerpt:
      "Estimate the 1.3-second signal delay each way, distinguish latency from bandwidth, and design remote operations around the wait.",
    tags: ["Moon", "Space communications", "Latency", "Engineering"],
  },
  "misure-incertezza-cifre-decimali": {
    title: "Measurement Uncertainty and Decimal Places",
    date: publicationDate,
    excerpt:
      "Distinguish resolution, repeatability and uncertainty, then report benchmark results with conditions and meaningful precision.",
    tags: ["Engineering", "Measurement", "Uncertainty", "Benchmarking"],
  },
  "riparabilita-progetto-prodotti": {
    title: "Product Repairability Starts at the Design Stage",
    date: publicationDate,
    excerpt:
      "Compare how products handle a worn connector or battery, including access, parts, tools, instructions and software support.",
    tags: [
      "Repairability",
      "Product design",
      "Electronics",
      "Circular economy",
    ],
  },
  "orion-rientro-scudo-termico": {
    title: "Orion Re-Entry and the Ablative Heat Shield",
    date: publicationDate,
    excerpt:
      "See how return speed, atmospheric compression, an ablative heat shield and the flight path shape Orion's re-entry heating.",
    tags: ["Orion", "Artemis", "Heat shield", "Re-entry"],
  },
  "verifica-validazione-requisiti": {
    title: "Verification and Validation of Requirements",
    date: publicationDate,
    excerpt:
      "Use a CSV export example to check both specification conformance and whether users can complete the real task in their environment.",
    tags: ["Engineering", "Verification", "Validation", "Requirements"],
  },
  "principio-di-archimede-e-i-container-docker": {
    title: "Docker Containers, Images and Reproducible Builds",
    date: publicationDate,
    excerpt:
      "Package an application with its runtime and dependencies, then handle configuration, secrets and persistent data at runtime.",
    tags: ["Docker", "Containers", "Deployment", "CI"],
  },
  "principio-di-inerzia-e-la-sindrome-del-non-toccare": {
    title: "Changing Legacy Code Without Regressions",
    date: publicationDate,
    excerpt:
      "Capture existing behaviour with characterisation tests, make one small change, and decide when a gradual replacement is warranted.",
    tags: ["Legacy code", "Refactoring", "Testing", "Engineering"],
  },
  "radiazione-di-fondo-e-il-cimitero-dei-console-log": {
    title: "JavaScript Logging with Structured Events",
    date: publicationDate,
    excerpt:
      "Structure logs by event, outcome and correlation ID. Use metrics to spot patterns and keep personal data and credentials out of logs.",
    tags: ["JavaScript", "Logging", "Observability", "OpenTelemetry"],
  },
  "gatto-di-schrodinger-e-allucinazioni-ia": {
    title: "How to Verify AI-Generated Code and Suggestions",
    date: publicationDate,
    excerpt:
      "Check library versions and edge cases, run tests against the actual requirement, and review generated code before it changes data.",
    tags: ["AI", "Code review", "Testing", "Software engineering"],
  },
  "principio-di-esclusione-di-pauli-e-i-conflitti-git": {
    title: "Resolving Git Merge Conflicts Without Losing Work",
    date: publicationDate,
    excerpt:
      "Read conflict markers and diffs, combine the intended changes, and test the resulting behaviour before updating a shared branch.",
    tags: ["Git", "Merge conflicts", "Code review", "Testing"],
  },
  "legge-di-gravitazione-universale-e-i-legacy-code": {
    title: "Reducing Coupling Between Legacy Code Modules",
    date: publicationDate,
    excerpt:
      "Trace a request's dependencies, isolate a remote service behind a clear contract, and verify the behaviour of each small refactor.",
    tags: ["Legacy code", "Refactoring", "Coupling", "Architecture"],
  },
  "non-puoi-negoziare-con-la-gravita-space-force-e-le-scadenze-assurde": {
    title: "Software Estimation for Deadlines, Scope and Risk",
    date: publicationDate,
    excerpt:
      "Estimate integration and verification work, communicate uncertainty, and decide what an ecommerce release can safely defer.",
    tags: ["Software engineering", "Estimation", "Risk", "Project planning"],
  },
  "entropia-del-codice": {
    title: "Technical Debt and Software Maintainability",
    date: publicationDate,
    excerpt:
      "Prioritise technical debt by change frequency, dependencies and regressions. Set a testable goal before refactoring a module.",
    tags: [
      "Software engineering",
      "Technical debt",
      "Refactoring",
      "Maintainability",
    ],
  },
  "effetto-osservatore-fisica-quantistica-e-l-arte-del-debugging": {
    title: "Debugging Reproducible Bugs and Race Conditions",
    date: publicationDate,
    excerpt:
      "Reduce a bug to a small case, test one hypothesis at a time, and reproduce out-of-order requests without relying on breakpoints.",
    tags: ["Debugging", "Race conditions", "Testing", "Observability"],
  },
  "la-sindrome-del-funzionava-sulla-mia-macchina": {
    title: "Debugging a Deployment That Only Fails in Production",
    date: publicationDate,
    excerpt:
      "Compare local, preview and production builds. Check direct routes, generated assets, environment variables and API failures.",
    tags: ["Deployment", "Vite", "Debugging", "Environment variables"],
  },
  "chi-ha-scritto-questa-roba": {
    title: "Documenting Code to Reduce Technical Debt",
    date: publicationDate,
    excerpt:
      "Preserve the decisions and contracts that maintainers need, using a Rails order import to illustrate inputs, side effects and retries.",
    tags: ["Technical debt", "Documentation", "Refactoring", "Rails"],
  },
  "i-messaggi-di-errore-non-ti-stanno-giudicando": {
    title: "Reading JavaScript Errors and Stack Traces",
    date: publicationDate,
    excerpt:
      "Trace a React blank screen from a TypeError to the missing data, then reproduce it and test the expected loading or error state.",
    tags: ["JavaScript", "Errors", "Stack traces", "Debugging"],
  },
};
