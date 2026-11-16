An order is taking too long to reach the ERP. The dashboard shows that latency has gone up. The logs contain sensible messages from several services, but it is hard to connect them to the slow order.

A trace can show where that order spent its time. To see how many orders were affected, look at [latency distributions and percentiles](/blog/latenza-percentili-media-p99). [Correlated failures](/blog/ridondanza-guasti-correlati) also show how an aggregate availability metric can hide a shared point of failure.

## A metric shows what changed

Counters and distributions help track volumes, errors and durations over time. In this example, the distribution of ERP delivery times shows when deliveries slowed and whether the change affected most orders or a small tail.

Use dimensions that are useful at that scale, such as the stage or type of operation. Giving every order its own metric label creates high cardinality, which can make the data expensive to store and query. The details of one order belong in signals that can be examined per operation.

## A log records an event

A structured log can capture the phase, outcome and a correlation ID. With stable fields, you can find events from the same operation and compare them without trying to parse a different message format for each service.

Choose fields that help the diagnosis. Consider who can read them and how long they are kept. For this incident, an operation ID and a description of the failed phase may be enough. Copying the commercial payload into every log adds data that might never be needed.

## A trace connects the steps

A distributed trace represents the operation with spans and their timing relationships. It can help separate time spent waiting in a queue, processing in the application and calling the ERP. To see the whole path, propagate the trace context across the relevant service and queue boundaries.

OpenTelemetry defines these signals and tools for collecting and exporting them. For the slow order, I would start with the aggregate change, find a representative trace and use the correlation ID to locate the corresponding events. That makes it possible to answer which stage slowed down and what it was doing.

## Sources

- [OpenTelemetry signals](https://opentelemetry.io/docs/concepts/signals/)
- [OpenTelemetry metrics](https://opentelemetry.io/docs/concepts/signals/metrics/)
