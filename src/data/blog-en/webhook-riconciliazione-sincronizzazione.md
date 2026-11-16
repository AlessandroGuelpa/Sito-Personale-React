A webhook is a fast way to learn that something changed in Shopify. It saves the receiving system from repeatedly asking for updates. A temporary outage, a failing handler or an out-of-order delivery can still leave Shopify and the ERP with different values.

Reconciliation recovers differences that the event path missed. [Webhook idempotency](/blog/webhook-idempotenza-ordini) protects the receiving system from processing a delivery twice. Together, these measures let the integration detect and repair a mismatch even when processing the original event failed.

## Give delivery, processing and recovery separate jobs

Shopify recommends reconciliation jobs alongside webhooks. I would start by deciding how quickly each kind of change needs to propagate. A webhook lets the system react quickly to an order or inventory update. A scheduled job compares the actual state of the two systems and recovers whatever still needs attention.

Keep the receiver short. Verify the origin of the request, save the notification or enqueue it durably, then acknowledge receipt. A worker can perform the slower work and retry it if necessary. In an order flow, a successful acknowledgement means the receiver accepted the notification. The ERP status needs its own evidence that the change was applied.

## Save a checkpoint only after the work is durable

Imagine a job that queries records updated since the previous run and fetches them in pages. If it advances its checkpoint after reading a page and crashes before saving that page, the next run may start after records it still needs.

Records can also share an `updated_at` timestamp. A strictly greater filter can skip records on the boundary, especially after a restart mid-page. Where the API supports it, use a stable sort and a secondary tie-breaker, then advance the checkpoint only after the corresponding data has been persisted. An overlapping time window can help catch boundary records. Idempotent upserts let the job safely see a record again when that happens.

Plan how to detect deletions, changed identifiers and records that are no longer visible to the same query. An incremental filter for recently updated records may need a separate way to identify those cases.

## Define which system owns each value

When Shopify and the ERP can both update a field, specify which change takes precedence and how the systems recognise a more recent version. A delivery ID identifies a repeat of one event. Business ordering needs its own signal, such as a version from the system that owns the value. Where a comparison is ambiguous, surface the conflict for reconciliation instead of overwriting the current state.

This matters even when events arrive close together. Applying an older delivery after a newer one may move the ERP backwards despite both deliveries having distinct IDs. For inventory writes, the integration can also [compare the expected quantity at write time](/blog/shopify-inventario-scritture-concorrenti).

## Test a missed delivery and a failed page

Interrupt the webhook path, change a record, then run reconciliation and check that it finds the divergence. Repeat with out-of-order events and a throttled API response mid-scan. Confirm that work resumes from the last persisted page and preserves newer values.

Track how many records are out of sync, how long they stay that way and how many retries are pending. Use the [GraphQL query budget](/blog/shopify-graphql-budget-query) to control how quickly the reconciliation job scans while other workers are using the same shop.

## Sources

- [Shopify webhooks and reconciliation](https://shopify.dev/docs/apps/build/webhooks)
- [Shopify webhook delivery verification](https://shopify.dev/docs/apps/build/webhooks/verify-deliveries)
