For an ordinary JavaScript function, `this` depends on how it is called. A method call such as `user.greet()` supplies `user` as the receiver. Extracting the function into a local variable changes the shape of the call, even though the function body is the same.

[Closures](/blog/javascript-closure-spiegate-bene) capture bindings from their lexical scope. The [prototype chain](/blog/javascript-prototipi-ereditarieta) explains where JavaScript finds a method. To predict `this`, also look at the expression used to invoke the function.

```javascript
"use strict";

const user = {
  name: "Ale",
  greet() { return "Hello " + this.name; },
};

user.greet();                    // "Hello Ale"
const greet = user.greet;
// greet() would throw because this is undefined in strict mode.
greet.call(user);                // "Hello Ale"
const bound = user.greet.bind(user);
bound();                        // "Hello Ale"
```

`call` and `apply` invoke a function with a receiver you supply. `bind` returns a new function that remembers that receiver for future calls. In sloppy mode, a plain function call can use the global object as `this`. JavaScript modules run in strict mode, so detached methods that read from `this` often fail immediately.

## Passing a method as a callback

Suppose a counter exposes an `increment` method that updates `this.value`. Passing only `counter.increment` to another module lets the caller choose how it invokes that function. To keep the original receiver, pass `counter.increment.bind(counter)` or the wrapper `() => counter.increment()`. If the callback is an event listener you will remove later, retain the same function reference for cleanup.

## Where arrow functions get their receiver

An arrow function uses `this` from the scope in which it is created. Inside a method, an arrow callback can keep access to that method's receiver. An arrow stored directly as an object property still uses the surrounding scope. Try calling the same ordinary method directly, as a detached reference and through a wrapper. The three calls show where the receiver is supplied or lost.

## Sources

- [MDN — this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
