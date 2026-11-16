A project may contain a queue, an intermediate format or a dependency whose original purpose is no longer obvious. The code shows that it exists. The reason it stayed may have been a constraint you cannot reconstruct from the implementation alone. An Architecture Decision Record, or ADR, gives a future maintainer that context.

An ADR might document which failures a [redundancy design](/blog/ridondanza-guasti-correlati) assumes are independent. [Verification and validation](/blog/verifica-validazione-requisiti) can then turn that assumption and the requirement into things you can check.

## Record the trade-off while it is visible

Write one short record for a significant decision. Include the problem, the options you considered, the choice and its consequences. In a hypothetical choice between a synchronous call and a background job, I would capture how long the user can reasonably wait and what is known about the external service. If the team selects a job, the record can explain that the UI now needs a pending state and that operators need a way to inspect retries and recover a failure.

## Make the reasoning specific enough to revisit

“We chose a queue because it scales” is hard to assess later. “The service can exceed the request's response time budget, and the user can continue while the task is pending” identifies an observed or testable condition. Record which properties were measured and which were assumed. A future maintainer can then see whether a new latency target or a different provider changes the choice.

## Preserve the decision trail

When a new decision replaces an older one, mark the old record as superseded and link to its successor. That keeps the previous context accessible and makes the active decision clear. I would use this approach when removing an apparently unnecessary step could reintroduce a failure the previous team already addressed. A short record next to the relevant code gives the next review a place to start.

## Sources

- [AWS — Architecture decision records](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/)
- [AWS — ADR best practices](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/best-practices.html)

*From the July–November 2026 editorial archive.*
