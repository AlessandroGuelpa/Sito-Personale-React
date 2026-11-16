A React component may subscribe to an event, start a timer or open a connection. If those resources remain active after their owner is gone, the browser can do extra work and sometimes retain memory it could otherwise reclaim.

When an effect finishes, cancel a request that has become irrelevant or ensure its response is ignored. The guide to [AbortController and stale responses](/blog/fetch-abortcontroller-risposte-obsolete) covers the asynchronous side. Choosing where to keep [React state](/blog/entanglement-quantistico-e-i-disastri-del-global-state) helps explain why a reference may still be reachable after a screen has gone away.

## Look for work or references that survive unmounting

A late callback alone is insufficient evidence of a memory leak. Ask whether anything still holds on to objects that should have been released. A resize listener registered on `window` is one example. If the listener remains after navigating away, it can keep a closure reachable and continue handling every resize. Several visits to the same page can leave several callbacks active.

## Return cleanup from the effect

An effect that opens an external resource should return the matching cleanup function. Remove listeners, clear timers and close connections. If the effect starts a fetch, use an `AbortController` where appropriate and handle a response that has already arrived when the input changes.

In development, React Strict Mode can run an extra setup and cleanup cycle. Treat this as a test of whether an effect can restart cleanly. With matched setup and cleanup, the old subscription is removed before a new one starts.

## Reproduce it in the browser

Navigate back and forth several times and inspect the number of listeners or use the Memory panel to compare snapshots. Wait for pending work to settle before concluding that temporary growth is a leak. In the resize example, check that the old callback stops firing after unmount and that retaining paths to the old component's data disappear. Once you can reproduce the leak, verify the same steps after the fix.

## Sources

- [React — useEffect](https://react.dev/reference/react/useEffect)
- [MDN — Memory management](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Memory_management)
