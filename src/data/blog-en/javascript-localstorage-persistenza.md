`localStorage` keeps browser data across refreshes and ordinary browser restarts. It works well for a theme preference, an unfinished draft or a cart choice that belongs on the current device. Start by deciding which values need to outlive the current page. A transient dialog state can live in application memory.

## Save and read a value

The API stores strings. Write an object or array with `JSON.stringify` and read it with `JSON.parse`. Use a fallback for a missing key. A [JavaScript Map or Set](/blog/javascript-set-e-map) needs an explicit conversion if you want to round-trip its contents through JSON.

~~~javascript
localStorage.setItem("theme", "dark");
localStorage.setItem("user", JSON.stringify({ id: 1, name: "Ale" }));

const theme = localStorage.getItem("theme") ?? "light";
const user = JSON.parse(localStorage.getItem("user") || "null");

localStorage.removeItem("theme");
~~~

The value retrieved by `getItem` can be `null`, and existing data can have an older format. After parsing, validate the shape you expect. [Optional chaining and nullish coalescing](/blog/javascript-optional-chaining-nullish) can help with fields that are intentionally optional.

## Plan for failed reads and writes

Storage is scoped to the current origin and access is synchronous. Space is limited and availability depends on the browser and its settings. Try writing when storage is full or restricted, and handle malformed JSON without breaking the rest of the page. For larger structured data and asynchronous operations, consider IndexedDB.

A format change matters when a value can stay around for months. For a recoverable preference, reset unusable data to the default. For an important draft, decide how to migrate the previous format or make the old value recoverable before replacing it. Test a missing key, invalid JSON, an old value and a denied write separately.

## Keep credentials out of browser storage

Scripts running on the page can read these values. Use storage for information such as preferences and drafts that suit that access model. Keep passwords and sensitive session tokens out of it. An `HttpOnly` session cookie, set by the server, keeps the cookie value out of JavaScript.

## Source

- [MDN localStorage reference](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
