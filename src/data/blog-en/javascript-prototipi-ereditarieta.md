When a property is missing from a JavaScript object, the engine looks for it on that object's prototype, then on the prototype's prototype. The lookup continues until it finds a property or the chain ends at `null`. This is how an array can use `map`, which lives on `Array.prototype`.

A successful lookup tells you where the method is defined. The guide to [this binding](/blog/javascript-this-binding) explains how the call determines the receiver. [Proxy and Reflect](/blog/javascript-proxy-reflect) can intercept operations related to that lookup and have their own invariants.

## Give an object an explicit prototype

```javascript
const animal = {
  speak() { return "..."; },
};

const dog = Object.create(animal);
dog.speak();                     // "..."
Object.hasOwn(dog, "speak");      // false

dog.speak = function () { return "Woof"; };
dog.speak();                     // "Woof"
Object.hasOwn(dog, "speak");      // true
Object.getPrototypeOf(dog) === animal; // true
```

Defining `speak` on the dog shadows the inherited method. The prototype still has the original implementation, and any other object linked to it can still use that version. Remove the dog's own method and the inherited one becomes visible again. The `in` operator answers whether the property exists anywhere along the chain, so it can return true in both cases.

## Follow the same lookup with classes

Instance methods defined in a class live on its prototype. When a subclass extends a base class, an instance can use methods from the subclass's prototype and continue the lookup to the base class's prototype. Compare `Object.getPrototypeOf` on two instances and use `Object.hasOwn` to distinguish instance properties from inherited methods. Keep in mind that static class methods are accessed through the constructor, so inspect instance methods and static methods separately.

Global modifications to built-in prototypes can affect unrelated code and conflict with dependencies. Keep behaviour on a prototype you own or compose it from functions when objects do not need an inheritance relationship.

## Sources

- [MDN — Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
