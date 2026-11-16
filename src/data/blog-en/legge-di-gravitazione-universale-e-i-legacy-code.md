A small change can become expensive when it requires edits across several unrelated modules. Follow a request from the entry point to its effects on data. List imports, database writes, service calls and other side effects. Those dependencies show where a change might have consequences that are hard to predict.

The [technical debt article](/blog/entropia-del-codice) looks at how to prioritise that risk. A [Rails service object](/blog/rails-service-objects) is one possible boundary when an operation coordinates several collaborators and needs an explicit result.

## Decide which boundary earns its place

An adapter can keep the details of a remote API in one place. An integration test can verify the contract between the caller and that adapter. Adding an interface makes sense when it lets one side change with a predictable impact on the other side. Count the responsibilities and effects that cross it rather than using the number of imports as the only measure.

## Work through an order example

Suppose a function stores an order and immediately tells a remote system about it. If the remote call fails, the caller may be unsure which step completed. Define which fields the remote call receives, which errors can come back and which part is safe to retry. Isolating the network call can make those cases easier to exercise while leaving the database operation under its own controls.

## Preserve behaviour one step at a time

Start by capturing the current behaviour in a test. Move the remote call behind the adapter and compare observable results before making a further change. If the overall responsibilities can stay clear in one application, a structured monolith can keep the interfaces easier to operate. Moving the same coupling across network boundaries brings additional contracts and possible partial failures.

## Sources

- [Martin Fowler — Refactoring](https://martinfowler.com/books/refactoring.html)
- [GitHub Docs — Reviewing changes in pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests)
