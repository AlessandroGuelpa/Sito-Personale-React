A browser console can be useful during development. In production, the volume of messages can make it harder to find the event that matters. Decide what question a log entry should answer. For a failed order synchronisation, an operation ID, the stage reached and the failure category can be enough to investigate without storing the whole order.

[Debugging from a reproducible hypothesis](/blog/effetto-osservatore-fisica-quantistica-e-l-arte-del-debugging) helps identify which events to record. [Latency metrics](/blog/latenza-percentili-media-p99) can show whether the event is part of a wider change.

## Give events a level and a shape

Use debug entries for investigation, info for significant progress, warn for unusual events that can be recovered and error for failures that need attention. The exact levels should match what the team can act on. A periodic job that emits the same message thousands of times can obscure a change in its outcome.

For entries sent to a collector, use structured fields for the operation, system and result. Keep the fields stable enough that someone can query them without parsing a sentence or an entire serialised object.

## Correlate the work across components

Carry a request or correlation ID through the browser, backend and subsequent job when they are part of the same operation. Use a value intended for correlation and exclude tokens, cookies, credentials and unnecessary personal data. If a service call fails, include its error category and associated operation so a later retry can be linked to the original event.

## Check the logs together with metrics

A counter can show when retries or failures have risen. A log can explain which step failed in a particular case. Run one successful operation and one failure, then try following both through the records. Decide how long that information needs to be kept and check that the event volume and retained fields are appropriate for that purpose.

## Sources

- [OpenTelemetry — Logs and correlation](https://opentelemetry.io/docs/concepts/signals/logs/)
- [OWASP — Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)
