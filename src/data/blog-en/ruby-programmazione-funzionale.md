Ruby provides ways to compose transformations without introducing a named variable after each step. `then`, also available as `yield_self`, passes the receiver to a block and returns the block's answer. `curry` lets a callable collect arguments over several calls until it has enough to evaluate.

```ruby
local_part = "  ale@Example.COM "
  .then(&:strip)
  .then(&:downcase)
  .then { |text| text.split("@").first }
# "ale"

add = ->(a, b, c) { a + b + c }.curry
add[1][2][3] # 6
add_ten = add[10]
add_ten[5][5] # 20
```

The string pipeline shows a value going from raw text to a local part. Each step receives the previous result. The extraction assumes the input has the expected email-like shape, so check that shape separately when an empty or malformed value is possible. In the second example, `add_ten` remembers the first argument and still needs two more before returning a number. You can reuse it with another pair of arguments and keep the initial value fixed.

## Give each step a clear result

A short chain works when each operation has a predictable output. If an intermediate method mutates other state or raises an exception the next step cannot handle, make that visible. A named intermediate value can help when someone needs to inspect it or when the change in meaning warrants a name. The [Enumerable guide](/blog/ruby-enumerable-map-select-reduce) shows a related approach for a sequence of values.

## Validate before composing more operations

For a pipeline using API data, decide which function checks its shape and which owns the error. Try empty input, an unexpected type and an intermediate failure. Check that callers can tell those cases apart. If performance matters, use [Ruby Benchmark](/blog/ruby-benchmark-misurare) with the input the application sees. Use composition when it clarifies what flows between operations and leaves enough context to understand a failure.

## Sources

- [Ruby Core — Method](https://docs.ruby-lang.org/en/master/Method.html)
