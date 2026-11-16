You type “Rome” in a search box, then immediately change it to “Romania”. The second query finishes first. You see the right results briefly, then the slower response replaces them. The frontend applied the last response to arrive even though it belonged to an older input.

`AbortController` lets the browser stop work on a fetch it no longer needs. An identity check also lets you ignore results from a previous search. [Debounce and throttle](/blog/javascript-debounce-throttle) can reduce the number of requests. The UI still has to decide which response it can apply.

## Cancel the previous fetch and track the current one

The following example returns data only while the request is current. The caller handles real errors and treats an `undefined` result as an obsolete request.

~~~javascript
let controller;
let latest = 0;

async function search(query) {
  const request = ++latest;
  controller?.abort();
  const current = new AbortController();
  controller = current;

  try {
    const response = await fetch(
      '/api/search?q=' + encodeURIComponent(query),
      { signal: current.signal }
    );
    if (!response.ok) throw new Error('HTTP ' + response.status);
    const data = await response.json();
    if (request === latest) return data;
  } catch (error) {
    if (request === latest && !current.signal.aborted) throw error;
  }
}
~~~

An aborted request may already have reached the server. For a search, cancellation helps manage work and keep the output relevant. For operations such as payments or writes, use guarantees defined by the application and the server. The loading state also needs to follow the current request. An old `finally` callback can otherwise hide the spinner while a newer request is still running.

## Use effect cleanup in React

This example assumes the component already defines `query`, `setResults`, `setLoading` and `setError`. Cleanup both signals cancellation and marks this effect inactive. The guard covers callbacks that may still run after cancellation or after another asynchronous transformation starts.

~~~tsx
useEffect(() => {
  const controller = new AbortController();
  let active = true;

  setLoading(true);
  setError(null);

  fetch("/api/search?q=" + encodeURIComponent(query), {
    signal: controller.signal,
  })
    .then(async (response) => {
      if (!response.ok) throw new Error("HTTP " + response.status);
      return response.json();
    })
    .then((data) => {
      if (active) setResults(data);
    })
    .catch((error) => {
      if (active && error.name !== "AbortError") {
        setError(error.message);
      }
    })
    .finally(() => {
      if (active) setLoading(false);
    });

  return () => {
    active = false;
    controller.abort();
  };
}, [query]);
~~~

React Strict Mode can run an additional setup and cleanup in development. It gives you an opportunity to find effects that leave work running after they are torn down.

## Test responses that arrive out of order

Give the first of two requests a longer delay and confirm the UI still shows the result for the second query after both finish. Repeat with an error from the first request. The newer search should keep its results and loading state, and only errors relevant to it should appear. Then navigate away while a fetch is in progress and verify the cleanup.

The [Fetch API guide](/blog/javascript-fetch-api) covers handling HTTP errors and aborted requests. For an input people can change quickly, check the result, loading indicator and error message together.

## Sources

- [MDN on AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
- [React useEffect reference](https://react.dev/reference/react/useEffect)
