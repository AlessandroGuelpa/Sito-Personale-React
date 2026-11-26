A Promise represents the eventual result of an operation, such as an HTTP response. It starts pending and either fulfils with a value or rejects with a reason. An async function always returns a Promise. Inside it, `await` lets you continue with the fulfilment value or handle a rejection as an exception. This syntax is also available at the top level of a JavaScript module.

The [Fetch API guide](/blog/javascript-fetch-api) explains why a response with an HTTP error can still fulfil. [AbortController](/blog/fetch-abortcontroller-risposte-obsolete) helps stop requests that have become irrelevant, for example when a search query changes.

## Handle errors where recovery is possible

```javascript
async function loadUser(id) {
  const response = await fetch("/api/users/" + encodeURIComponent(id));
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}
```

The caller can catch the rejection to display a retry control or propagate it to a higher layer that owns error handling. Returning `undefined` after logging every failure makes it harder for that caller to distinguish a missing record from a network error. Decide which errors your function can recover from and let the others propagate.

## Choose sequence or concurrency

A product and an independent list of categories can be requested together. Invoke both loaders and pass their Promises to `Promise.all`. If the category request needs an ID from the product response, wait for the product first and pass the ID explicitly. Two consecutive awaits are appropriate when the work really is dependent.

`Promise.all` rejects as soon as one of its inputs rejects, while other work may continue. If the page can display a product without its category list, `Promise.allSettled` gives the caller each outcome. Simulate a network failure and a slow response to check what the interface does during the wait and when only part of the data is available.

When the log order surprises you, the [JavaScript event loop guide](/blog/javascript-event-loop-come-funziona) follows tasks and microtasks separately.

## Sources

- [MDN — Async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
