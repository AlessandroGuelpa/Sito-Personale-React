A JavaScript `Proxy` wraps a target object and lets a handler intercept operations such as reading, writing or deleting a property. Each handler method is called a trap. A trap can record an access or enforce a rule before handing the operation back to JavaScript.

```javascript
const target = { name: "Ale", age: 30 };

const person = new Proxy(target, {
  get(object, key, receiver) {
    console.log("Read:", key);
    return Reflect.get(object, key, receiver);
  },
  set(object, key, value, receiver) {
    if (key === "age" && value < 0) {
      throw new Error("Age must be non-negative");
    }
    return Reflect.set(object, key, value, receiver);
  },
});

person.name;     // Logs "Read: name" and returns "Ale"
person.age = -5; // Throws an Error
```

`Reflect.get` and `Reflect.set` let the trap delegate the standard operation and pass along the intended receiver. That matters when an accessor reads `this`. Returning the result of `Reflect.set` also preserves the operation's success flag. The target can still use a [prototype chain](/blog/javascript-prototipi-ereditarieta), and properties found along it still follow JavaScript's rules. Code holding the original target can still read or write it directly, so keep track of which reference callers receive.

## Respect the target's guarantees

Try defining a property that is both non-configurable and non-writable. A `get` trap must return that property's actual value. If it reports another value for the same property, the engine can throw a `TypeError`. Test a handler that delegates through `Reflect.get` and compare it with one that tries to replace the result. This exposes the boundary of what an interceptor can promise.

## Use the wrapper where interception earns its place

Reactive frameworks can use proxies to register dependencies during reads and notify observers after writes. The interception makes the observation apply to existing property syntax. For ordinary application rules, an explicit method can be easier to trace. If the task is to reshape a collection, [array methods](/blog/javascript-metodi-array-essenziali) usually put the transformation where the reader can see it. Choose the wrapper when callers need normal object operations and the interception is part of the contract.

## Sources

- [MDN — Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
