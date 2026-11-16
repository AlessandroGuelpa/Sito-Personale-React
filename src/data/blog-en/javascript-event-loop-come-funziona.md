On the browser's main thread, JavaScript runs one piece of code at a time. The event loop lets work such as clicks, timers and asynchronous request callbacks take turns. [Promises and async/await](/blog/javascript-promise-async-await) help coordinate that work. [Web Workers](/blog/javascript-web-workers) can run a CPU-heavy calculation in a separate execution context.

## Predict which log runs next

```javascript
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");
// Output: 1, 4, 3, 2
```

The current synchronous code prints 1 and 4. The callback passed to `then` is a microtask, so it prints 3 after the current stack clears. The timer callback runs in a later task and prints 2. A zero delay makes the timer eligible to run later, when the event loop can take that task. Its execution time still depends on other work and timer rules.

## Look for work that delays rendering

When a search processes thousands of results on the main thread, the user can see typing lag even if the request itself was fast. A long synchronous loop holds the current turn until it returns. A chain of microtasks can also delay rendering if it keeps adding microtasks while the queue is being drained.

Check DevTools for long tasks while reproducing the slow interaction. Try processing a smaller amount of data per task so the browser has more chances to render and handle input. If most of the work is a computation that can run with an independent copy or transfer of the input, move it to a worker and return the result to the main thread. Test while typing or scrolling, since a computation can finish quickly in isolation and still make the page feel slow.

## Sources

- [MDN — JavaScript execution model](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model)
