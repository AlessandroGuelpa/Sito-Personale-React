Optional chaining and nullish coalescing both deal with missing values in JavaScript. Optional chaining stops an access when the value before `?.` is `null` or `undefined`. Nullish coalescing picks a default when its left-hand value is one of those two values.

~~~javascript
const user = { profile: { social: null } };

user?.profile?.social?.twitter;      // undefined
const visits = user.visits ?? 0;     // 0
const name = user.name ?? "Guest";
~~~

## Preserve values that carry meaning

In a form, zero can be a valid quantity and `false` can be an explicit preference. An empty string may also be valid, depending on the field. A default chosen with `||` uses the right-hand value for every falsy input. With `??`, the default applies only to absent values represented by `null` or `undefined`. For example, `0 ?? 5` evaluates to zero, while `0 || 5` evaluates to five.

That makes the fallback useful when absence and a deliberately empty value mean different things. [A default in destructuring](/blog/javascript-destructuring) follows its own rule, so check how that syntax treats `undefined` and `null` when moving the same default.

## Validate required data at the boundary

Optional chaining is useful for an optional nested field, such as the social account in the example. If the API contract requires a product ID, check that it exists and has the expected type. A chain that just returns `undefined` may otherwise hide data the application needs to operate correctly.

The [Fetch API](/blog/javascript-fetch-api) can deliver a response for parsing. The caller still needs to validate required fields before relying on them. Keep that validation explicit and use optional access for the fields the contract allows to be missing.

## Test the exact fallback you want

Try an undefined value, a null value, zero, false and an empty string. Check which result should use the default in each case. Then test one absent intermediate object and one response missing a required property. Those examples make the distinction between an optional display value and a failed contract visible.

## Source

- [MDN nullish coalescing reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
