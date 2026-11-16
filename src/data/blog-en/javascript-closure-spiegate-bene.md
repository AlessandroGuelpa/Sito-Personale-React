A closure is a function together with access to the lexical environment where it was created. The function can still use the variables from that environment after the outer function has returned.

~~~javascript
function counter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}

const next = counter();
next(); // 1
next(); // 2
~~~

## Give each instance its own state

The function returned by `counter` reads and updates the `count` from that particular call. Each call to the factory creates a new environment. Create two counters and advance only the first one. Calling the second for the first time still returns one. This behaviour is useful for keeping internal state private inside functions and modules.

A captured variable is a binding the function can access. Its value can change after the callback is created. If two callbacks refer to the same object, they can observe changes to that object. This is useful when the callbacks are meant to share an owner, and worth testing when the state should be independent.

## Distinguish scope from the way a function is called

Lexical scope depends on where code is written. [The value of this in a JavaScript function](/blog/javascript-this-binding) can depend on how the function was called. [Prototypes and inheritance](/blog/javascript-prototipi-ereditarieta) describe how property lookup works on objects. These concepts answer different questions when you are following where a value came from.

## Consider how long a callback stays reachable

Closures are common in event handlers and callbacks that work with state. If a callback is registered on a long-lived object, it can keep references to data that it captured. When the owner of a callback goes away, remove its subscription when appropriate so the captured objects can be collected if nothing else needs them. Test both independent instances and the cleanup path when using the pattern in a component that mounts and unmounts.

## Source

- [MDN guide to JavaScript closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures)
