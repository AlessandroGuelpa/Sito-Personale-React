JavaScript affects the first visit through download, parsing and execution. A compressed file can transfer quickly and still keep the main thread busy on a slower phone. Start by measuring which cost the visitor actually experiences.

## Measure the work on the first page

Use DevTools to see the scripts loaded on arrival and a bundle analyser to inspect what they contain. In a performance recording, look at scripting time and long work on the main thread around loading and interaction. Test under realistic network and device conditions. Large images or a slow server response can dominate the experience, so compare those timings before changing the bundle.

The transfer size describes what came over the network. The time spent parsing and executing scripts describes work done after arrival. Track both to see which part actually improves when a dependency is removed.

## Load optional code when it becomes useful

Use route-based code splitting or a [dynamic ES module import](/blog/javascript-moduli-es-import-export) for features the current page rarely needs, such as an editor used on a secondary route. Keep dependencies needed to render the first page on its normal path. Give a deferred feature a loading state and a way to recover if its chunk fails to load.

Measure a cold visit and the transition that first loads the deferred feature. The first route can become faster while the later interaction starts waiting for an extra request. Checking both paths tells you whether the change improves the experience people actually use.

## Check the first response and the interactive page

[React prerendering](/blog/react-prerender-html-metadati) can put useful content in the initial HTML. The browser still needs to process scripts for interactions. Compare rendering time, Largest Contentful Paint and Interaction to Next Paint alongside the amount of JavaScript transferred. The result is useful when it explains how long people wait for content or input to respond.

## Sources

- [web.dev on optimising JavaScript](https://web.dev/learn/performance/optimize-javascript)
- [web.dev guide to code splitting](https://web.dev/articles/reduce-javascript-payloads-with-code-splitting)
