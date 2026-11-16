A calculation that takes a long time on the browser's main thread can delay input or rendering. A dedicated Web Worker runs JavaScript in a separate thread. It can process data and make requests while the main thread handles the interface. Bring the result back with a message and update the DOM on the main thread.

```javascript
// main.js
const worker = new Worker(new URL("./worker.js", import.meta.url));
worker.onmessage = (event) => console.log("Sum:", event.data);
worker.postMessage({ numbers: largeArray });

// worker.js
self.onmessage = (event) => {
  const sum = event.data.numbers.reduce((a, b) => a + b, 0);
  self.postMessage(sum);
};
```

The sum illustrates the message flow. Real candidates include large file parsing or image processing. Give the worker the smallest useful input, expose a way to handle errors and terminate it when the page no longer needs its results.

## Account for the data crossing the boundary

Messages normally use the structured clone algorithm. See [structuredClone and deep copies](/blog/javascript-immutabilita-structuredclone) for the types involved. A large message can take time to clone. A transferable `ArrayBuffer` can move ownership without copying its bytes. Once transferred, the original buffer is detached in the sender, so arrange the call around who needs the data next.

Creating a worker also has a startup cost. If a calculation is small or the page starts a new worker on each interaction, the overhead can outweigh the benefit. Reuse one when several related tasks need it and decide how to ignore a response after its input changes.

## Measure the interaction under load

Try typing or animating the interface during the calculation. Compare the time until the result with the delay the user actually feels. [Debounce and throttle](/blog/javascript-debounce-throttle) can reduce how often you enqueue work, while moving computation to a worker changes where it runs. Test leaving the page mid-task as well, so an obsolete worker can be stopped cleanly.

## Sources

- [MDN — Using Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
