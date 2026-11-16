An integration receives an order from a shop, saves it and sends a confirmation. The response gets lost, so the sender tries again. The second delivery is just as valid as the first. If every delivery creates an order, the receiving database now has two records for one purchase.

Deduplication protects an operation when Shopify repeats a delivery. Use [reconciliation jobs](/blog/webhook-riconciliazione-sincronizzazione) to cover missed updates and [backoff with jitter](/blog/retry-backoff-jitter-integrazioni) to spread out retries after a temporary failure.

## Identify the delivery and the business operation

Shopify supplies `X-Shopify-Webhook-Id` to identify a delivery and `X-Shopify-Event-Id` to correlate notifications that came from the same merchant action. Separate subscriptions can generate distinct deliveries from that action. Choose a business key as well, such as the shop and external order ID if that pair identifies an order in your system.

Record the processing state with the incoming ID. For example, an accepted delivery can enter a durable queue and remain pending until a worker finishes. Setting it to completed before the next step is durable can prevent recovery after a crash. If the business operation updates a single database, a transaction can coordinate the state change and the local effect.

## Verify the request and enforce uniqueness in the database

For an HTTPS webhook, verify the HMAC against the original request bytes before a parser transforms the body. The signature verifies the origin. Delivery IDs, business keys and ordering rules handle different parts of the flow.

An application check that searches for an existing order leaves a race between the check and the write. Two workers can both find the order absent. A unique database index enforces the chosen key even when the requests overlap.

~~~sql
-- Adapt the names and business key to your database.
CREATE UNIQUE INDEX idx_external_orders_identity
  ON external_orders (shop_id, shopify_order_id);
~~~

Handle a collision explicitly. Retrieve the existing order if the delivery represents the same operation. Flag conflicting data when the payload indicates a different business intention. The index protects the invariant even when the conflict needs further investigation.

## Keep ERP delivery recoverable

A local transaction covers writes in its database. When posting to an ERP is part of the workflow, the integration needs a second protocol for the external effect. Use an idempotency key the ERP accepts, or persist enough state to reconcile the outcome and retry. A [transactional outbox](/blog/transactional-outbox-invio-erp) can record the outgoing work alongside the local order.

## Run three failure tests

First, deliver the same webhook twice. Then send two requests concurrently for the same order key. Finally, stop the process after saving the order and before sending it to the ERP, then restart it. Verify that you still have one business order and can tell whether the remote work is pending, applied or needs to be reconciled.

## Sources

- [Shopify webhook delivery verification](https://shopify.dev/docs/apps/build/webhooks/verify-deliveries)
- [Shopify webhook delivery structure](https://shopify.dev/docs/apps/build/webhooks/delivery-structure)
- [Rails Active Record validation methods](https://api.rubyonrails.org/classes/ActiveRecord/Validations/ClassMethods.html)
