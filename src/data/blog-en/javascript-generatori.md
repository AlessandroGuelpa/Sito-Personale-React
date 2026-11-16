A JavaScript generator can pause and resume while it produces a sequence. Declaring a function with `function*` means calling it returns a generator object. The caller advances that object with `next()`, and the function runs until it yields another value or finishes.

```javascript
function* count() {
  let n = 1;
  while (true) {
    yield n++;
  }
}

const counter = count();
counter.next().value; // 1
counter.next().value; // 2

function* firstSquares(n) {
  for (let i = 0; i < n; i++) yield i * i;
}

[...firstSquares(4)]; // [0, 1, 4, 9]
```

The generator remembers its local state between calls. The infinite counter is safe to inspect one item at a time, while spreading it into an array would ask for every item and never finish. The squares example is finite, so spreading it produces a normal array you can process with [array methods](/blog/javascript-metodi-array-essenziali).

## Decide who controls the pace

A generator is useful when the consumer only needs part of a sequence or the full list would take too much memory. Each `next()` runs synchronous code for a synchronous generator. If a caller makes thousands of expensive calls in a tight loop, the browser can still become unresponsive. For CPU-heavy work, [Web Workers](/blog/javascript-web-workers) allow the computation to run off the main thread.

An async generator and `for await...of` can represent a source that delivers values asynchronously. That suits paginated or streamed input when the next portion is only available after waiting for it.

## Handle early exits

A consumer may stop after the first useful value. When an iterator owns a resource, put its cleanup in a `finally` block and test stopping early. Breaking out of a `for...of` loop closes a generator, while code that calls `next()` manually needs to close it explicitly when it abandons the sequence. Try both full consumption and early exit to see when cleanup happens.

## Sources

- [MDN — function*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)
