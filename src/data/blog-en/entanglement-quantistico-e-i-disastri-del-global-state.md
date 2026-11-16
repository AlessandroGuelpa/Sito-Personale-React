When many React components share one value, a change can reach parts of the interface that were never meant to coordinate. Start by naming the owner of the data and the components that need to read or change it. That gives the state a boundary you can reason about.

## Keep temporary state near the interaction

Opening a dialog or making a temporary selection often belongs in the component that owns that interaction. When two components need to agree on a value, lift it to a common parent. Context can make the value available deeper in the tree. The owner still decides how to update it and how long it should live.

A cart makes this concrete. Its line items and quantities are the input data. The [cart total can be derived in React](/blog/react-stato-derivato-carrello) from those inputs. Keeping a second copy of the total in a global store creates another value that every update has to maintain, including after a failed or delayed request.

## Give API data its own lifecycle

Data returned by a server can become stale, fail to load or arrive out of order. Decide when to refresh or invalidate it and what the interface should do while it revalidates. If the application also subscribes to external events, [clean up those effects](/blog/conservazione-della-massa-e-memory-leaks-in-react) when their owner goes away.

## Decide where each value belongs

Write down who reads the value, who changes it and how long it should survive. For state that receives concurrent updates, define the transitions you expect. Start with that model before adding a new library, since the library still needs to represent the same ownership and update rules.

For the cart, test a change in quantity and a row removal. Verify the total is recalculated from the resulting lines without a separate synchronisation step. Add a failed-request case if the cart uses server data. It should be clear which value is still authoritative and how the interface gets back to a consistent state.

## Sources

- [React on choosing the state structure](https://react.dev/learn/choosing-the-state-structure)
- [React on sharing state between components](https://react.dev/learn/sharing-state-between-components)
