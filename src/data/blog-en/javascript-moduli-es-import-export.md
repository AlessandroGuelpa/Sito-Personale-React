ES modules split JavaScript into files with an explicit public interface. A file exposes selected values or functions using `export`. Another module declares which of those exports it needs with `import`. This makes dependencies visible in the source. In the browser, load the entry point with `<script type="module">` and serve the files over HTTP rather than opening them directly with `file://`.

~~~javascript
// math.js
export const PI = Math.PI;
export function area(r) { return PI * r * r; }
export default function greet() { return "hi"; }

// app.js
import greet, { PI, area } from "./math.js";
console.log(greet()); // "hi"
console.log(PI);      // 3.14159...
console.log(area(2)); // 12.566...
~~~

## Choose named and default exports

A named export such as `PI` or `area` is imported by name. Use `as` if a module needs a different local name. A module can have one default export, which the importer can give a local name directly. Pick a consistent convention for each interface so that a reader can see which pieces of a module are public. In this example, `greet` is the default export, while `PI` and `area` are named exports. You can rename a named import with `import { area as circleArea } from "./math.js"`.

The static structure of ES modules helps bundlers determine what the application uses. Tree shaking can drop unused code when the tool can also account for its side effects. Use the generated output to verify the result in your own project.

## Check what happens when a module loads

Top-level code can run when a module is imported. Starting a connection, registering a listener or changing shared configuration in that code makes the application depend on initialisation order. Where that effect matters, give it an explicit function and call it at the point of use. Keep a clear direction between layers to reduce circular dependencies. [Closures](/blog/javascript-closure-spiegate-bene) are useful when a module needs to keep some state private.

## Move optional work behind a dynamic import

Use `import()` when a feature such as an editor needs to load only on demand. Give the visitor a loading state and a way to recover if the request fails. `import()` returns a Promise, so use `await` inside an async function or handle its rejection with `.catch()`; see [Promises and async/await](/blog/javascript-promise-async-await) for error handling patterns. After the change, inspect the [initial JavaScript bundle](/blog/equazione-del-razzo-e-il-problema-del-bundle-da-830kb), check whether shared dependencies are duplicated and open secondary routes directly to ensure their chunks still load.

## Run the example in a browser

Save math.js and app.js in the same directory and add `<script type="module" src="./app.js"></script>` to index.html. If Python is installed, run `python3 -m http.server 8000 --bind 127.0.0.1` from that directory and open http://127.0.0.1:8000/. The application file already logs the greeting, PI and the circle's area. Expect an area close to 12.57. The example uses native loading over HTTP, so you can see each resource request without a bundler.

## Modules beyond the main page

The same syntax also supports module-based Web Workers. A worker created with `new Worker(new URL("./worker.js", import.meta.url), { type: "module" })` can use `import` inside `worker.js`. Without `{ type: "module" }`, a classic worker cannot use static ES module imports. See [running computations in Web Workers](/blog/javascript-web-workers) for how the browser transfers results back to the main thread.

## Diagnose three import errors

Look for app.js and math.js in the Network panel. If math.js returns 404, check its path relative to app.js, including the extension and letter case. If the status is 200 but the response is HTML, see whether the server supplied a fallback page instead of the module. If both files arrive and the browser reports a missing export, compare the braces in the import with the declaration. A default import uses no braces, while a named import refers to the exported name. Finally, try removing type="module". The browser now parses import in a classic script context and reports a syntax error.

## Source

- [MDN JavaScript modules guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
