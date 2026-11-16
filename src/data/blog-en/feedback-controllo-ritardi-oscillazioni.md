The room feels cold, so you turn the heat up. A minute later the room still feels cold and you turn it up again. When the heat finally reaches you, the temperature overshoots the target. Turning everything off can start the process in the other direction. The loop depends on the time between a change and the result you can observe.

[Little's Law](/blog/legge-little-code-tempi-attesa) connects time in a system with the work it holds. A [design margin](/blog/margine-progetto-budget-capacita) helps show the distance from a capacity or operating limit.

## Include the response time in the model

A closed-loop controller compares a measurement with a target and uses the difference to choose an action. The measurement, actuator and process all contribute to how long the effect takes to appear. Correcting a deviation that is already shrinking can send the system beyond the target. Exeter's temperature control example shows how an integral term can accumulate error and contribute to overshoot.

## Ask what a queue can do with more workers

When a job queue grows, starting more workers may help. If the database is the bottleneck, the extra processes may instead add contention. A queued task and a room temperature have different dynamics, but both give an operator a reason to understand the delay before intervening again. Identify which signal should respond first and how long that response could take.

## Change one input and observe it

In a controlled experiment I would record when the change was applied, which setting moved and which measurements I expect it to affect. Then I would watch for a period that matches the process. If concurrency, queries and memory limits all move together, the final result gives little evidence about which change mattered. A clear link between adjustment and observed response helps you decide whether to wait, reverse the change or try the next one.

## Sources

- [University of Exeter — Feedback and temperature control](https://newton.ex.ac.uk/teaching/CDHW/Feedback/PracticalMatters.html)

*From the July–November 2026 editorial archive.*
