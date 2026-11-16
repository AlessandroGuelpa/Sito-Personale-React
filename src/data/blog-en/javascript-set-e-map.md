JavaScript provides two collections that make common intentions explicit. A `Set` holds unique values and gives you a direct membership test. A `Map` associates keys with values, including when a key is an object. Both collections can be iterated in insertion order.

~~~javascript
const tags = new Set(["react", "js", "react", "css"]);
tags.size;                   // 3
[...new Set([1, 1, 2, 3])];   // [1, 2, 3]

const cache = new Map();
cache.set("user", { id: 1 });
cache.set(domElement, "data");
cache.get("user");            // { id: 1 }
cache.has("user");            // true
~~~

Use `Set.has()` when you repeatedly need to test whether a value is in a set. Use `Map` when you want to retrieve a value by a key or iterate through entries in the order they were added. An ordinary object is still a convenient representation for named properties that need to travel as JSON.

## Understand equality before deduplicating objects

Two separate objects with the same fields can both appear in a set. For objects, the collection compares identity. Adding another reference to the same object does produce a duplicate. [Copying an object with structuredClone](/blog/javascript-immutabilita-structuredclone) is a way to illustrate that boundary between identity and contents.

Suppose an API sends several records that represent the same product. If the record ID is the business key, build a map indexed by that ID. Decide which record to keep when two entries have the same key. If you process entries in order and call `set` each time, a later value replaces the earlier one for that key. [Array methods](/blog/javascript-metodi-array-essenziali) can help prepare those entries.

## Check the boundary with JSON

Use a test that adds two references to the same object and two different objects with equal field values. Also check what happens when a map needs to be persisted. Convert its entries to an explicit structure first and choose a representation for object keys if they need to survive a round trip.

## Source

- [MDN Map reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
