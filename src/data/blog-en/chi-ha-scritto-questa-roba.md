A quick technical choice can make future changes expensive when its reasoning disappears. Before counting comments or renaming variables, identify which decisions a maintainer cannot recover from the implementation and which dependencies make a change hard to verify.

## Explain why a rule exists

A comment can explain why retries stop at a certain point, why a notification waits for a database commit or why a constraint also exists in the model. A function name can explain what the call does. A contract explains which inputs it accepts, what it returns and what effects the caller should expect.

For order synchronisation, that contract might define record identifiers, valid states, idempotency and failure handling. Those details matter because another system may interpret the same fields and retry its calls after a timeout.

## Review a real maintenance boundary

Imagine a controller importing an order from an API and then refreshing inventory. If normalisation, persistence and the remote call share one method, it is harder to see which steps can be repeated. List the behaviour that must carry on and capture it with characterisation tests before moving the part that causes trouble. See [safer legacy refactoring](/blog/principio-di-inerzia-e-la-sindrome-del-non-toccare) for that process.

If a [Rails service object](/blog/rails-service-objects) gives the operation a clearer boundary, document its inputs, result, recoverable errors and points of external effect. A maintainer should know what happens if the response is lost after the inventory update succeeds.

## Make documentation part of the change

Use small pull requests that make behavioural changes visible on their own. Confirm the result with a relevant test and follow a representative operation through its logs. Update the nearby contract when a decision changes, so the next maintainer can understand what the code depends on without reconstructing the previous discussion.

## Sources

- [Martin Fowler — Technical Debt Quadrant](https://martinfowler.com/bliki/TechnicalDebtQuadrant.html)
- [Google Engineering Practices — Code review](https://google.github.io/eng-practices/review/)
