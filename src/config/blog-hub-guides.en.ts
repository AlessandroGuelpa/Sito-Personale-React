import type { BlogHubGuide } from "./blog-hubs";
import type { BlogHubSlug } from "./locales";

export const englishBlogHubGuides: Partial<Record<BlogHubSlug, BlogHubGuide>> =
  {
    "shopify-integrazioni": {
      introduction:
        "A Shopify–ERP integration connects systems that can have different clocks and periods of availability. Decide which system owns each value, what should happen when a call is repeated, and how you’ll find changes that failed to synchronise.",
      sections: [
        {
          id: "data-ownership",
          title: "Decide which system owns the data",
          paragraphs: [
            "Before writing code, map the lifecycle of a product, variant, stock quantity, order and fulfilment status. For each field, record which system may change it, which way it synchronises and which ID joins the records. Shopify and the ERP may represent the same value differently, so spell out conversions, missing values and cases where the records cannot be reconciled.",
            "Inventory deserves particular care. A job writing a quantity it read earlier can overwrite stock movements that arrived in the meantime. Account for the platform’s update rules, decide how to order changes and distinguish relative adjustments from absolute updates. A reconciliation job should be able to report a discrepancy before attempting a correction.",
          ],
          links: [
            {
              id: "shopify-inventario-scritture-concorrenti",
              label:
                "Prevent concurrent Shopify inventory updates from overwriting each other",
            },
            {
              id: "rails-find-each-batch-memoria",
              label: "Process a Rails catalogue in batches",
            },
          ],
        },
        {
          id: "webhooks-and-retries",
          title: "Webhooks, idempotency and reconciliation",
          paragraphs: [
            "A webhook can be repeated, delayed or missed. Identify the operation with an idempotency key, record its outcome and limit retries with backoff. Use the recorded operation to ensure that redelivering an event doesn’t create a second order or apply a second stock adjustment.",
            "Run a reconciliation job periodically to compare the two systems and recover changes missed by the event stream. Make the comparison safe to run while newer updates are still arriving. Use metrics and correlated logs to trace a failure, and give operators a documented way to recover cases that the job cannot reconcile.",
          ],
          links: [
            {
              id: "webhook-idempotenza-ordini",
              label: "Handle duplicate Shopify order events",
            },
            {
              id: "webhook-riconciliazione-sincronizzazione",
              label: "Use reconciliation to recover missed updates",
            },
          ],
        },
        {
          id: "api-limits-and-maintenance",
          title: "API limits, access and maintenance",
          paragraphs: [
            "Select the fields you need in the GraphQL Admin API, control pagination and use query cost to manage the request budget. Retrying an expensive request immediately can make a bottleneck worse. Distinguish authentication problems, invalid input and temporary rate limits so each failure gets the appropriate response.",
            "Keep credentials outside the repository and grant only the scopes the integration needs. Test deleted products, changed variants, partial failures and deployment during a sync. Operators should be able to identify an unprocessed record and resume the job without repeating the effects of work that already finished.",
          ],
          links: [
            {
              id: "shopify-graphql-budget-query",
              label: "Manage the GraphQL query budget",
            },
            {
              id: "shopify-custom-fields-app-vs-codice-nativo",
              label: "Use native Shopify line item properties",
            },
          ],
        },
      ],
      sources: [
        {
          label: "Shopify — Webhooks",
          url: "https://shopify.dev/docs/apps/build/webhooks",
        },
        {
          label: "Shopify — GraphQL Admin API rate limits",
          url: "https://shopify.dev/docs/api/usage/limits",
        },
      ],
    },
    "react-frontend": {
      introduction:
        "Organising React components is one part of building a dependable frontend. The initial HTML response, the amount of JavaScript the browser runs, how requests finish and whether the interface is accessible also shape what readers and search engines can use.",
      sections: [
        {
          id: "html-and-discovery",
          title: "Rendering, initial HTML and discovery",
          paragraphs: [
            "A single-page application can render its content after JavaScript runs. For informational pages, SSR or prerendering can make the main text available in the first HTML response. Readers get the important information sooner, and a crawler can discover it without waiting for a later render. Give each page a meaningful title, an H1 that matches its content and a canonical URL.",
            "Use links in the HTML to give search engines and readers a path through articles, sections and pages of results. The sitemap helps with discovery too. Keep filter combinations separate from the canonical archive pages so the same collection does not turn into large numbers of near-identical URLs.",
          ],
          links: [
            {
              id: "equazione-del-razzo-e-il-problema-del-bundle-da-830kb",
              label: "Reduce the initial JavaScript bundle",
            },
            {
              id: "teoria-del-caos-effetto-farfalla-e-css-globale",
              label: "Diagnose global CSS regressions",
            },
          ],
        },
        {
          id: "state-and-concurrent-requests",
          title: "State, concurrent requests and feedback",
          paragraphs: [
            "Keep a choice local when only one component needs it. Share state when several parts of the interface need to respond to the same value. Before adding a global store, decide which component owns the data and which values can be calculated from it. Multiple copies of the same value add work every time they need to be kept in sync.",
            "HTTP requests can finish in a different order from the one in which they were sent. A slow search response might overwrite the results for a newer query. AbortController can cancel work the page no longer needs, and the application can also check which request owns the current view. For an optimistic update, decide how the interface will reconcile the result or roll it back.",
          ],
          links: [
            {
              id: "fetch-abortcontroller-risposte-obsolete",
              label:
                "Handle asynchronous search results that arrive out of order",
            },
            {
              id: "dilatazione-temporale-interstellar-e-optimistic-ui",
              label: "Design optimistic UI with rollback",
            },
          ],
        },
        {
          id: "performance-and-accessibility",
          title: "Measuring performance and checking accessibility",
          paragraphs: [
            "Measure download, parsing, execution and rendering on realistic devices. A small compressed bundle can still keep the main thread busy. Use the measurements to separate network latency from work in the browser. Compare controlled tests with measurements from real visitors when those are available.",
            "Give forms visible labels, actionable error messages and a clear indication of progress. Check each interaction with the keyboard, including where focus moves when a form reports a problem. Use Core Web Vitals alongside manual navigation tests to cover both the measured performance and the experience of using the page.",
          ],
          links: [
            {
              id: "forza-di-attrito-e-la-ux-dei-form",
              label: "Reduce errors and abandonment in forms",
            },
            {
              id: "conservazione-della-massa-e-memory-leaks-in-react",
              label: "Clean up listeners and other resources in React",
            },
          ],
        },
      ],
      sources: [
        { label: "React — Learn", url: "https://react.dev/learn" },
        {
          label: "Google Search Central — JavaScript SEO",
          url: "https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics",
        },
      ],
    },
    "rails-backend": {
      introduction:
        "A reliable Rails backend has to manage transactions, concurrent requests, external systems and background work. Controllers and models give this work a structure. To make the system dependable, account for how the database and worker infrastructure behave when operations overlap or fail.",
      sections: [
        {
          id: "queries-and-constraints",
          title: "Models, queries and database constraints",
          paragraphs: [
            "Active Record makes many database operations easier to express. When a listing loads an association separately for every record, the number of queries can still grow with the results. Compare includes, preload and eager_load using the SQL, row counts and memory from a representative request.",
            "Application validations can give users clear errors. Add a unique index for data that must stay unique when two writes race, and decide how to handle a conflict at the database. For an operation that must succeed or fail as a unit, identify which writes belong in the same transaction.",
          ],
          links: [
            {
              id: "rails-problema-n-piu-1",
              label: "Reduce N+1 queries in Active Record",
            },
            {
              id: "rails-unicita-database-concorrenza",
              label: "Enforce uniqueness under concurrent writes",
            },
          ],
        },
        {
          id: "jobs-and-integrations",
          title: "Background jobs and external integrations",
          paragraphs: [
            "A background job can keep a request from waiting on slow work. Plan for busy queues, retries and duplicate runs, and give each operation an ID you can follow through its logs. Make repeated work idempotent where possible. Test what a worker does during a deployment, a timeout or an interruption midway through the job.",
            "When a database update must notify another system, a local transaction can record the intention to send. A transactional outbox stores that event alongside the data change and lets a worker deliver it afterward. Plan for deduplication on delivery and reconciliation when outcomes are uncertain.",
          ],
          links: [
            {
              id: "rails-background-job-active-job",
              label: "Plan retries and idempotency in Active Job",
            },
            {
              id: "transactional-outbox-invio-erp",
              label: "Use a transactional outbox for ERP integration",
            },
          ],
        },
        {
          id: "testing-and-maintenance",
          title: "Tests, maintenance and service boundaries",
          paragraphs: [
            "Before introducing an abstraction, define the behaviour the application must preserve. A service object can coordinate a workflow involving several models. Specify its inputs, outputs and side effects. Unit tests can exercise the rules in isolation, while request specs check the HTTP contract and resulting changes to data.",
            "Make legacy changes small enough to observe and reverse. Document the dependencies and decisions that affect rollout, and verify that database migrations are compatible with the versions of the application that will be running. Exercise recovery as well as success so the team knows how to recognise and correct a failure after release.",
          ],
          links: [
            {
              id: "rails-service-objects",
              label: "Use service objects with testable contracts",
            },
            {
              id: "rails-request-specs-testare-api",
              label: "Verify the HTTP contract with request specs",
            },
          ],
        },
      ],
      sources: [
        {
          label: "Rails Guides — Active Record Querying",
          url: "https://guides.rubyonrails.org/active_record_querying.html",
        },
        {
          label: "Rails Guides — Active Job Basics",
          url: "https://guides.rubyonrails.org/active_job_basics.html",
        },
      ],
    },
  };
