A queue contains a growing number of jobs. Before adding workers, I would check how fast work arrives, how fast it finishes and how long each job spends in the system. Little's Law relates three averages for a stable system with consistently defined boundaries. The average work in the system is the average throughput multiplied by the average time a job spends there.

**L = λW**

[Latency percentiles](/blog/latenza-percentili-media-p99) show how individual requests can differ from the average. A [capacity budget](/blog/margine-progetto-budget-capacita) helps determine how much room the system has before it reaches a limit.

## Check the units on a simple example

Suppose a stable process completes an average of 12 jobs per minute, and the average job spends five minutes in the system, including its wait. Multiplying 12 jobs per minute by five minutes gives 60 jobs in the system on average. A single snapshot may show many more or many fewer.

## Use the same boundary for each quantity

When the job count includes both queued and running jobs, the measured time should include both waiting and service. For a count that covers only the line in front of the workers, use the time spent in that line. Read the rate and time on consistent populations and periods. A system whose queue keeps growing because arrivals exceed capacity needs a different analysis from a stable system with a representative long-run average.

## Follow the extra time before changing capacity

If jobs spend longer in the system, separate waiting time, execution time and time spent on shared dependencies. More workers can help if the jobs sit waiting and the shared database or API can handle the extra work. They can make the bottleneck more apparent when it is already at capacity. Start with the measured boundary and averages, then inspect where the work actually accumulates.

## Sources

- [MIT — Queueing models and Little's Law](https://ocw.mit.edu/courses/15-763j-manufacturing-system-and-supply-chain-design-spring-2005/568c857501f6785e7b328a3cf3990705_reviw_of_que_mol.pdf)

*From the July–November 2026 editorial archive.*
