When a function calls `fetch`, it receives a Promise for a future response. While the network request is in progress, the browser can run other code. A long synchronous calculation on the main thread can still block input and rendering.

## Await the response and then read its body

Inside an async function, `await` pauses that function until the Promise settles and lets other work proceed. Start independent requests together when their results are needed at the same time. If the second request needs a value from the first, express that dependency as a sequence.

```javascript
async function loadArticle(id) {
  const response = await fetch(`/api/articles/${encodeURIComponent(id)}`);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}
```

The example assumes that a successful endpoint response contains valid JSON. A `204 No Content` response needs a separate path before calling `json()`. The Promise returned by `fetch` can fulfil even with a `404` or `500`. Checking `ok` before reading the body prevents the code from treating an HTTP error page as article data.

## Give each UI state a path

While the result is pending, the view should show a loading state. On success, render the article. Handle HTTP, network and parsing errors where the UI can explain the failure and offer an appropriate recovery. Tests with fake responses can exercise each path without waiting for a real connection to misbehave.

## Keep the result tied to the request

When the user changes the query or navigates away, an earlier response may no longer be relevant. Cancel the old request or keep track of which request owns the current view. A slower response must not overwrite newer results just because it arrives last. Try a test in which the first request takes longer than the second and confirm that the latest input still controls what is displayed.

For more examples, see [Promise and async/await](/blog/javascript-promise-async-await) and [cancelling stale requests with AbortController](/blog/fetch-abortcontroller-risposte-obsolete).

## Sources

- [MDN — Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [MDN — Async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
