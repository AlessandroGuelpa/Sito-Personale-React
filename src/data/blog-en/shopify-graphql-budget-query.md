A Shopify integration can make a handful of requests and still use much of its API budget. A query that asks for many nested records can cost more than a small query that runs several times. Shopify’s GraphQL Admin API accounts for the work requested by each application and shop combination.

This matters when a [Shopify inventory conflict](/blog/shopify-inventario-scritture-concorrenti) triggers a fresh read or a [scheduled reconciliation job](/blog/webhook-riconciliazione-sincronizzazione) scans a large set of records. Workers for the same application and shop share capacity, including when they run in separate processes.

## Read the requested cost and the remaining capacity

When the response includes `extensions.cost`, look at `requestedQueryCost`, `actualQueryCost` and `throttleStatus`. The requested cost reflects the work implied by the selection. The actual cost reflects what the operation resolved. `currentlyAvailable` and `restoreRate` report the remaining capacity and how quickly it replenishes.

Suppose a shop has 40 points available and replenishes 50 points per second. A query with a requested cost of 90 would need about one second to become affordable, assuming no other requests consume capacity in the meantime. Treat this as an estimate, since another worker can take part of that budget before the next attempt. Use the API version and the limits reported in your own responses when choosing delays.

## Ask Shopify for less work

Inspect the selected fields, nested connections and page size before raising the retry limit. An export that needs identifiers and SKUs can request those fields directly. Reducing page size can also make a query affordable, though the resulting import has more pages and checkpoint updates to process.

For a large export, check whether Shopify’s bulk operations support the data and workflow you need. An interactive request that needs an immediate answer has different latency and response requirements from a long-running bulk job. The most useful comparison measures both the API budget and the time before the result can be consumed.

## Coordinate workers and persist progress

Imagine two workers that both see 40 available points and each decide to spend them. Their local observations were accurate when read, but their combined decision exceeds the remaining capacity. A dispatcher per shop or a shared policy for concurrent workers makes consumption more predictable. Reserve capacity for interactive work when it shares the same app and shop with a large import.

Use cursor-based pagination for a multi-page import and save progress only once the page has been persisted. Restarting after a crash may read some of the same rows again. Stable identifiers and idempotent writes make that safe. Saving the checkpoint first risks skipping a page if the process stops before the data reaches your database.

## Check the GraphQL response body

HTTP 200 tells you that the server sent a response. Inspect top-level `errors`, the requested data and any mutation `userErrors` relevant to your operation. A throttled query calls for waiting or reducing its cost. Expired credentials need to be restored, and an invalid operation needs to be corrected before another attempt.

When the API asks you to wait, keep enough state to resume later without replaying the entire import. That is particularly helpful after an [inventory write conflict](/blog/shopify-inventario-scritture-concorrenti), where both the updated quantity and the retry decision depend on a fresh read.

## Sources

- [Shopify API rate limits](https://shopify.dev/docs/api/usage/limits)
- [Shopify GraphQL Admin API reference](https://shopify.dev/docs/api/admin-graphql/latest)
