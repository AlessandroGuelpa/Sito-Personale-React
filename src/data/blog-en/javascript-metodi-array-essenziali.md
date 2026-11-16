JavaScript array methods make the expected result visible at the call site. Use `map` to transform each element, `filter` to keep matching elements and `reduce` to accumulate a result. When you need only the first match or a yes-or-no answer, choose a method that returns exactly that.

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.map((n) => n * 2);                 // [2, 4, 6, 8, 10]
numbers.filter((n) => n % 2 === 0);       // [2, 4]
numbers.reduce((total, n) => total + n, 0); // 15
numbers.find((n) => n > 3);                // 4
numbers.some((n) => n > 4);                // true
numbers.every((n) => n > 0);               // true
```

## Pick the result first

`find` stops at the first match and yields `undefined` if none qualify. `some` answers whether any element qualifies, and `every` checks whether all of them qualify. For an empty array, `some` returns false and `every` returns true. Give `reduce` an initial value if its input can be empty, and choose one with the type the accumulator should have.

A short chain such as `users.filter(isActive).map(getName)` can make an intention clear. If the next step reads several fields of the transformed records, [destructuring](/blog/javascript-destructuring) can help express which fields matter. For deduplication or a reusable index, consider [Set and Map](/blog/javascript-set-e-map).

## Check for mutation and shared objects

`map` and `filter` return new arrays, but the objects inside can still be shared with the original. A callback that edits an existing object can affect other parts of the application. This matters when an array is part of React state. `sort` and `reverse` mutate the array itself. Use `toSorted` or `toReversed` when you need a copied array and your runtime supports them.

Test empty input, duplicate values and a collection of shared objects. Include a case where several items match to see whether the function should keep all of them or stop at the first. If the input comes from an API, check that it has the array shape your code expects before calling these methods.

## Sources

- [MDN — Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
