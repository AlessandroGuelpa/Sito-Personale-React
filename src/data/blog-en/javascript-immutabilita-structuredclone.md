Assigning an object to a second variable gives both variables a reference to the same object. Copying with object spread creates a new outer object, while nested objects and arrays can still be shared. This distinction matters when you update state and expect other parts of a React application to keep seeing the previous value.

```javascript
const original = { user: { name: "Ale" }, tags: ["a", "b"] };

const shallow = { ...original };
const deep = structuredClone(original);

shallow.user.name = "Bob";
console.log(original.user.name); // "Bob"

deep.user.name = "Sam";
console.log(original.user.name); // "Bob"
console.log(deep.user.name);     // "Sam"
```

Create both copies before the first mutation to make the comparison clear. The shallow copy shares `user` with the original. The deep copy has its own clone of `user`, so changes inside it are independent.

## Know what the clone preserves

`structuredClone` supports nested arrays and objects as well as types such as [Map and Set](/blog/javascript-set-e-map). It can handle circular references. Functions cannot be cloned by this algorithm, and custom class prototypes are generally not carried over as class behaviour. Check what happens with the actual values you store before replacing a domain object with a clone. The clone itself remains mutable.

The same family of cloning rules matters when you send data to [Web Workers](/blog/javascript-web-workers). When sending a large buffer, compare the cost of cloning with transferring ownership if the main thread no longer needs the original bytes.

## Update only the part that changed

For an immutable state update, rebuild the changed branch and preserve references to the untouched branches. Changing a user's name can be as simple as spreading the state and then spreading the nested user with the new name. Cloning the whole data tree on each keystroke can add work and change references that other components use to skip rendering. Test by editing one nested value and inspecting which objects actually changed.

## Sources

- [MDN — structuredClone](https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone)
