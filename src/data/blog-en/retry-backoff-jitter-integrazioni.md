A service slows down. A hundred clients time out and immediately try again. Each client is trying to recover, and together they send another wave of traffic to a service that was already struggling.

A retry is another request with a cost. A [transactional outbox](/blog/transactional-outbox-invio-erp) can save work that still needs to be sent. [Idempotency for order events](/blog/webhook-idempotenza-ordini) can prevent a repeated attempt from creating another order.

## Decide which failures are worth retrying

A transient error may clear on its own. A request with an invalid payload needs to be corrected. Start with the error types documented by the API and honour a `Retry-After` header when it applies.

For an operation with an external effect, ask what the server may have done before the client timed out. It might have completed the operation and lost only the response. Use a stable idempotency key when the API supports one, or reconcile the outcome before submitting the operation again.

## Spread attempts over time

Exponential backoff increases the delay between attempts. Jitter adds randomness so clients spread out their retries instead of starting at the same moment. AWS describes these techniques for containing temporary failures.

Here is an example of calculating and applying a delay within a bounded retry policy:

~~~javascript
const capMs = Math.min(30_000, 500 * 2 ** attempt);
const delayMs = Math.random() * capMs;
await new Promise(resolve => setTimeout(resolve, delayMs));
~~~

In the example, `attempt` is a non-negative integer. The calling policy decides which errors to retry and enforces the total deadline. The operation itself still needs an idempotency strategy when it changes external state.

## Set an end to the recovery

I would define the timeout for one request, a maximum attempt count and a deadline for the complete operation. Choose which layer owns retries. If several layers retry independently, the number of requests reaching the dependency can multiply.

When the retry budget runs out, save enough state to resume safely and make the failure visible. That gives an operator something to investigate and lets the dependency recover without another cycle of immediate retries.

## Source

- [AWS Builders’ Library on timeouts, retries, backoff and jitter](https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/)
