Two application instances can look more resilient than one. They may still share the same database, availability zone and faulty configuration. Duplicating the process protects against distinct failures of that process. To judge what it does for the service, list the dependencies each instance needs to serve a request.

An [architecture decision record](/blog/adr-decisioni-architetturali) can capture the assumed independence between copies. [Logs, metrics and traces](/blog/osservabilita-log-metriche-tracce) can help test that assumption when you exercise failover.

## Check what the probability depends on

Suppose each of two components has a 1% chance of failing in the same time interval. If the failures are independent, the probability that both fail is 1% multiplied by 1%, or 0.01%. That calculation depends on the independence assumption. A shared power interruption, database outage or bad release can stop both components at once and change the result.

## Draw the fault domains

Cloud architecture guidance distinguishes scopes such as resources, zones and regions. Put copies in domains that match the failures you actually need to tolerate. Also trace dependencies that do not sit directly on the diagram, including DNS, identity, secrets and deployment tooling. A second host elsewhere can still receive the same broken configuration.

Balance that design with your service requirements and recovery costs. A service carrying important data may have an acceptable interruption time and a separate limit on how much recent data it can lose. Those targets guide which dependencies need recovery paths.

## Exercise the handover

In a controlled test environment, interrupt one instance and see whether requests reach the other. Measure the time until service recovers and observe what happens to work already in progress. Then exercise the shared dependency whose failure still has the largest impact. These checks give you a basis for judging whether another copy buys usable resilience or simply carries the same dependencies into another instance.

## Sources

- [Google Cloud — Redundancy and availability](https://docs.cloud.google.com/architecture/framework/reliability/build-highly-available-systems?hl=en)
- [Google Cloud — Fault domains](https://docs.cloud.google.com/architecture/infra-reliability-guide/building-blocks)

*From the July–November 2026 editorial archive.*
