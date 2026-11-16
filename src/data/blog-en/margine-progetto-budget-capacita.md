A service has a memory limit of 1 GB and uses 990 MB during a test. It stays under the limit in that case, with ten megabytes left in the simplified example. Whether that is enough depends on what the test covered. A design margin records the distance between the expected or measured use and the available resource under stated conditions.

A [tolerance stack](/blog/tolleranze-catena-dimensionale) gives a physical example of comparing a range with an allowed limit. [Feedback and delay](/blog/feedback-controllo-ritardi-oscillazioni) show how the operating conditions can shift as a system responds.

## State what the percentage uses as its base

The example leaves 10 MB, or 1% of the 1,000 MB limit. Someone expressing the same difference as a share of current consumption would get a different percentage. Record the units and denominator so both teams can reproduce the figure. NASA's Systems Engineering Handbook describes margins as reserves for uncertainties and risks in budgets such as mass, power and memory.

## Record the workload alongside the result

For a software process, I would check startup, steady operation and a representative peak. A large upload, concurrent requests or a warming cache can all raise memory use temporarily. Record the scenario, resource limit, measurement and remaining margin. Decide what to do when that margin shrinks, such as reducing concurrency or revisiting a resource requirement.

## Size the reserve for the consequences

The right margin depends on how variable the workload is, what happens when the limit is crossed and how quickly the system can recover. A job that can resume from a checkpoint may need different decisions from a process that loses work on restart. Use the scenarios the system must sustain and ask how well the measurements represent them before deciding how much headroom is available.

## Sources

- [NASA — Systems Engineering Handbook glossary](https://www.nasa.gov/reference/system-engineering-handbook-appendix/)

*From the July–November 2026 editorial archive.*
