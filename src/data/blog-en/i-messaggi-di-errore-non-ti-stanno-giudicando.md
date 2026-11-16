A blank React screen can follow an exception, a failed network request or a rendering problem. Start with the actual message and the conditions in which it appears. A useful example is `TypeError: Cannot read properties of undefined (reading 'map')`. JavaScript tried to find `map` on an undefined value. That identifies where a data assumption failed.

## Trace the value to its source

Check where the value is assigned. A required prop might be absent, an endpoint might return a different shape, or a render might run before a request has finished. Representing pending, error and success states explicitly can make those cases easier to handle. What to display depends on the component's data contract. The guide to [React state](/blog/entanglement-quantistico-e-i-disastri-del-global-state) discusses where that data belongs.

## Find the first useful application frame

Follow the stack trace to a line you own and use the surrounding library frames to see what called it. For minified production builds, source maps can connect the generated stack to your original files. Decide which maps can be made available and check what source they expose. Use a known input and inspect values before the failing line with a breakpoint or a watch expression. The Network tab can show whether the response agrees with your assumptions.

## Keep the failure reproducible

If the component needs an array, decide what it should do when data is missing. An empty state, a visible error or an invalid-input rejection can each fit a different contract. Use a fallback like `?? []` when absence is an expected case, since it can otherwise hide an API change. Add a test for the input that used to fail and repeat the direct navigation if that was the entry point. The [reproducible debugging guide](/blog/effetto-osservatore-fisica-quantistica-e-l-arte-del-debugging) shows how to isolate one hypothesis at a time.

## Sources

- [MDN — JavaScript error reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors)
- [Chrome DevTools — Debug JavaScript](https://developer.chrome.com/docs/devtools/javascript/)
