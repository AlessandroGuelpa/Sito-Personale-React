`fetch` is the browser’s built-in way to make HTTP requests. Its promise resolves to a `Response` once the response is available. You then decide whether its status is acceptable and how to read its body.

~~~javascript
const response = await fetch("/api/launches");
if (!response.ok) throw new Error("HTTP " + response.status);
const launches = await response.json();

const created = await fetch("/api/launches", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Starship" }),
});
if (!created.ok) throw new Error("HTTP " + created.status);
~~~

## Treat the HTTP status and parsing as separate checks

A server response such as 404 or 500 can resolve the fetch promise. Check `response.ok` or the expected status when you receive it. Reading the body with `response.json()` is another asynchronous operation and can fail separately. [Promises and async/await](/blog/javascript-promise-async-await) are the basis for organising those steps and their errors.

A successful response can be empty. For example, a 204 needs no JSON parsing. A proxy or server error might also produce HTML where your client expected JSON. Follow the endpoint’s contract and check the content type when that contract distinguishes response formats. A parsed JSON result still needs whatever shape validation the application requires.

## Handle cancellation separately from failure

A network error can reject `fetch`, and an `AbortController` lets you cancel work when a request is no longer needed. For a timeout, choose a deadline and arrange to abort the request after it expires. Decide how the interface should present actual timeouts versus cancellations triggered by a newer action.

For live search, a response may belong to an older input. Combine [AbortController with a request identity check](/blog/fetch-abortcontroller-risposte-obsolete) so only the active search updates the screen.

## Verify the responses your client can receive

Test a 200 with JSON, a 204 with an empty body, a 404 and a timed-out or cancelled request. Check that each path produces the right application state and that an older request cannot replace a newer result.

## Source

- [MDN guide to the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
