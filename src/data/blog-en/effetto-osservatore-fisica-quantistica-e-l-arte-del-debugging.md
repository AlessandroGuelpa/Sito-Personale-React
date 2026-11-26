A breakpoint can make a race condition disappear by changing when operations run. Even logging can affect timing. Treat each debugging tool as another input and choose observations that help explain the failure you already see.

[Rails uniqueness under concurrency](/blog/rails-unicita-database-concorrenza) gives a concrete example of a fault that needs more than one request. [Technical debt](/blog/entropia-del-codice) can make faults like these recur when the affected behaviour has no regression test.

## Reduce the case until it still fails

Record the input, environment, application version and expected result. Reduce the steps to the smallest sequence that exposes the problem. If it happens only after deployment, compare permissions, dependencies and representative data with the local setup while keeping sensitive values out of the evidence.

## Test one hypothesis about timing

For an intermittent failure, record request IDs, timestamps and the order of relevant events. Logs and traces can show which component observed the fault and which work came before it. The component that reports an error can be downstream from the one that caused it.

Build a test that starts two requests and controls which completes first. If the second operation is supposed to own the final state, verify what happens when its result arrives before the first. Change the variable your hypothesis identifies. Changing retries, timeouts and saved state together can obscure which part matters.

## Keep the reproduction after the repair

Save the failing case as a regression test and exercise neighbouring cases. Repeat the test with representative load or network timing if the issue appeared there. A useful fix has evidence both that the old version fails under the chosen conditions and that the corrected version produces the expected result under the same conditions.

If the problem occurs in only one environment, compare [the differences behind a typical works-on-my-machine bug](/blog/la-sindrome-del-funzionava-sulla-mia-macchina).

## Sources

- [Chrome DevTools — Debug JavaScript](https://developer.chrome.com/docs/devtools/javascript/)
- [OpenTelemetry — Traces](https://opentelemetry.io/docs/concepts/signals/traces/)
