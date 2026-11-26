Destructuring binds selected values from an object or array to local names. The pattern shows which fields a function needs without repeating a property access for each one. You can also rename a field, capture remaining items with rest syntax or supply a default.

```javascript
const user = { name: "Ale", role: "dev", city: "Turin" };
const { name, role } = user;
const { name: displayName } = user;
const { theme = "light" } = {};

const [first, second, ...rest] = [10, 20, 30, 40];
// first = 10, second = 20, rest = [30, 40]

function greet({ name }) {
  return "Hello " + name;
}
```

## Know when defaults apply

A default applies when a binding receives `undefined`, including when a property is missing. If the server sends `{ theme: null }`, the bound value remains `null`. Try the same pattern with `{}`, `{ theme: undefined }`, `{ theme: null }` and `{ theme: "dark" }`. The first two use the default, and the others keep the supplied value.

If both `null` and `undefined` should fall back, [nullish coalescing and optional chaining](/blog/javascript-optional-chaining-nullish) provide a different rule. Choose it based on what an explicit null means in the contract. It may mean that a preference was cleared and should stay empty.

## Check the incoming shape

Destructuring a property from a null or undefined object throws. In a parameter pattern, a default object can handle a missing argument, while an explicit null still needs attention if the caller is allowed to pass it. Check input from an API before extracting a required field, especially if the next step assumes a particular type.

Use aliases when two objects provide a property with the same name, such as a member's and an organisation's `name`. When you extract a collection, [array methods](/blog/javascript-metodi-array-essenziali) can then transform or filter it. Check the input shape before relying on those methods, since a destructuring pattern alone does not validate the collection.

## Extract a preference without losing zero

An API might return an object with saved preferences or omit the entire section. This example treats a missing or null value as absent and preserves a volume set to zero. If the input comes from outside the application, validate the root value’s expected shape before extracting its fields.

~~~javascript
function readVolume(settings) {
  const { audio } = settings ?? {}
  const { volume } = audio ?? {}
  return volume ?? 0.5
}
~~~

Call readVolume with null, an empty object, an explicit null audio field and a volume of zero. The first three return 0.5 and the last returns zero. Change the fallback to a logical OR and zero also triggers it. If the function only accepts numbers from zero to one, validate the extracted value before using it.

## Sources

- [MDN — Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring)
