A service can have an acceptable average response time while some people wait much longer. The mean summarises the observations in one number. Percentiles help show where the slow tail starts and which part of the traffic is affected.

A high p99 can reveal serious delays for a small share of requests. Then [logs, metrics and traces](/blog/osservabilita-log-metriche-tracce) can help locate the slow stage. [Little’s law](/blog/legge-little-code-tempi-attesa) gives another way to relate throughput, queued work and waiting time when its assumptions apply.

## Read the threshold and the number of requests

The median, or p50, splits the lower half of the observations from the upper half. The p95 is a threshold below which roughly 95% of observations fall, depending on the estimation method. In a sample of 100,000 requests, about 5,000 are in the upper five percent. The p95 identifies the threshold. You still need the distribution or the observations above it to learn how slow that group was.

## Decide which traffic the percentile describes

A p99 based on very few requests can move sharply from one sample to the next. Combining fast and slow endpoints, successes and errors, or different traffic periods can also obscure which group changed. Read the request count and error rate with the latency numbers.

To combine results across servers, use the original observations or compatible distributions. Each server’s p95 summarises its own set of requests, so the arithmetic average of those thresholds generally cannot give you the percentiles of the combined set.

## Use the tail to ask a concrete question

Separate key routes and look at the requests that reach the tail. Check for large inputs, cold caches or slow calls to a dependency. Fast error responses can even lower the average while the experience for successful requests gets worse. Choose a percentile that reflects the service outcome you want to protect and the traffic you can investigate.

## Sources

- [Google SRE on service-level objectives](https://sre.google/sre-book/service-level-objectives/)
- [Google SRE Workbook on monitoring](https://sre.google/workbook/monitoring/)
