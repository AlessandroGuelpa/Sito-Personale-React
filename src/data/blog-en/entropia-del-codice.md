As software evolves, dependencies grow, libraries change and earlier decisions become harder to reconstruct. A shortcut may add a second source of truth or a special case. Later changes have to preserve each of those paths. Technical debt describes the cost of that extra work and risk.

[Coupling between legacy modules](/blog/legge-di-gravitazione-universale-e-i-legacy-code) can spread a small change across the application. An accurate [software estimate](/blog/non-puoi-negoziare-con-la-gravita-space-force-e-le-scadenze-assurde) makes room for verification and for fixing the dependencies that slow it down.

## Find the debt that affects current work

A small function used by many services can be expensive to change if its contract is unclear. Look at how often a component changes, who owns it, how many other parts depend on it and where regressions keep occurring. Time spent resolving bugs, reviewing changes and confirming that a release works can all make the problem visible. Line count provides little context by itself.

## Give a refactor a specific aim

If a component repeatedly fails, capture the behaviour you need in a test before rearranging it. Then decide which dependency, duplication or unexpected write makes the behaviour difficult to change. A focused refactor might consolidate repeated rules or reduce the number of places where an order's state changes. Keep the external result consistent unless the task also changes the business rule.

## Check whether the next change becomes easier

Define a result you can demonstrate, such as a regression reliably caught by a test or a common rule now updated in one place. Document an important decision near the code if maintainers will need its context. Compare the new verification process with the old one. The structure is easier to maintain when the team can explain what changes touch and prove what they still do.

## Sources

- [Martin Fowler — Technical Debt Quadrant](https://martinfowler.com/bliki/TechnicalDebtQuadrant.html)
- [Google Engineering Practices — Code review](https://google.github.io/eng-practices/review/)
