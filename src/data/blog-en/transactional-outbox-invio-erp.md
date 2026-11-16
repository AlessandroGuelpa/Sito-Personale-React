Imagine saving an order to the database and then sending a message to an ERP. A process that stops between those operations leaves an order the ERP knows nothing about. Sending the message first risks telling the ERP about an order that never commits. Each system commits its part independently.

A transactional outbox saves a durable record of what needs to be sent. A [retry policy with backoff](/blog/retry-backoff-jitter-integrazioni) determines when to try delivery again. The receiving side still needs to recognise [duplicate order events](/blog/webhook-idempotenza-ordini).

## Commit the order and the outgoing event together

In the transactional outbox pattern, a single database transaction saves the business change and an event describing it. A separate worker reads pending events and delivers them. The transaction is atomic when both models share the same database connection. A failed commit rolls back both writes. Once the commit succeeds, a restarted worker can find the event even if the original process stopped immediately afterwards.

Here is an illustrative Rails example with two models in the same database:

~~~ruby
Order.transaction do
  order = Order.create!(order_attributes)
  OutboxEvent.create!(
    event_type: 'order.created',
    aggregate_id: order.id,
    payload: { order_id: order.id }
  )
end
~~~

An outbox table can also store a stable event identifier, creation time, attempt count, next retry time and delivery state. For example, a worker can use an immutable ID rather than tying retries to the order identifier alone. One order may generate several distinct events over its lifetime.

~~~ruby
# Illustrative only. Define the models, tables and constraints in your app.
Order.transaction do
  order.save!
  OutboxEvent.create!(
    event_id: SecureRandom.uuid,
    aggregate_id: order.id,
    kind: "order.changed",
    payload: { order_id: order.id }
  )
end
~~~

The snippets show the transaction boundary. Delivery, serialisation, locking and retry scheduling belong to the process that consumes the outbox.

## Plan for a lost response

Suppose the ERP applies an event, then the worker stops before recording the acknowledgement. The outbox row is still pending at restart and can be delivered again. This is at-least-once delivery. Pass the same event ID on a retry so the ERP can deduplicate it or apply an idempotent rule based on the operation’s business key.

A local lock can prevent two workers from processing the same row simultaneously. The ERP may still have applied an event whose acknowledgement never reached the database. Define how to claim rows, sequence events where ordering matters, and clean up completed rows. The right ordering rule depends on which business events can safely be applied in either order.

## Make a stuck delivery visible

Measure the number of pending events, the age of the oldest one, failed attempts and terminal failures. Distinguish a temporary timeout from a payload the ERP will repeatedly reject. A queue with ageing rows needs attention even when the initial order writes are successful.

When the ERP provides a business identifier or a queryable status, a [scheduled reconciliation job](/blog/webhook-riconciliazione-sincronizzazione) can verify the expected state. A delivery acknowledgement describes the message. Reconciliation helps explain whether the underlying records agree and what work is still needed after either side comes back online.

## Sources

- [AWS transactional outbox pattern](https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/transactional-outbox.html)
- [Rails Active Record transactions](https://api.rubyonrails.org/classes/ActiveRecord/Transactions/ClassMethods.html)
