An interface can feel slow when the server takes only a few hundred milliseconds to answer. An optimistic update shows the expected outcome while the network request is still pending. For example, a favourites button can toggle immediately and roll back if the save fails.

If the action affects a basket, keep the [React-derived total](/blog/react-stato-derivato-carrello) consistent with the visible items, including during rollback. The article on [stale asynchronous responses](/blog/fetch-abortcontroller-risposte-obsolete) covers another risk when several requests are in flight.

## Track what is still pending

A newly selected favourite is provisional until the server acknowledges it. Keep enough information to restore the confirmed state if the request fails. If a recovery takes several seconds, explain the failure near the relevant control so the user understands why a visible change disappeared. Keep focus and context intact when reverting the update.

Use explicit confirmation for consequential or irreversible actions. When someone pays for an order or permanently deletes a record, show the operation's progress and wait for a successful server response before announcing completion. Instant feedback can still tell the user that the request has started.

## Reconcile concurrent changes

Imagine clicking the same favourite toggle twice. The response to the second request can arrive before the response to the first. Applying every response as it arrives can undo the newer action. Associate each response with the operation that produced it and decide what version or confirmed state should win. Rolling back a failed request also needs that context, because a later successful change may affect the same record.

## Test the cases a fast connection hides

Try slow responses, HTTP errors, rapid consecutive actions and navigation away from the page while a request is pending. Check keyboard and screen reader behaviour when the control updates, especially if you announce loading or rollback. With a failed action, the person should still know which item they changed, what the server accepted and how to retry.

## Sources

- [React — useOptimistic](https://react.dev/reference/react/useOptimistic)
- [MDN — Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
