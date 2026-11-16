`map(&:upcase)` is a common Ruby shorthand. The ampersand supplies a block from the value that follows it. For a symbol, Ruby uses `Symbol#to_proc` to obtain code that sends the named method to the object passed as the receiver.

```ruby
%w[hello world].map(&:upcase)
# ["HELLO", "WORLD"]

%w[hello world].map { |word| word.upcase }
# ["HELLO", "WORLD"]
```

The two examples call `upcase` on each word. The same syntax is useful for a predicate such as `numbers.select(&:even?)`. The [Enumerable guide](/blog/ruby-enumerable-map-select-reduce) shows where those operations return a transformed list or select a subset. [Symbols](/blog/ruby-symbol-vs-string) also work as identifiers and hash keys, which is separate from using one to name a method.

## Write the block when there is behaviour to explain

`users.map(&:name)` is short and clear if every element responds to `name`. A lookup can still fail if the collection contains `nil` or an object that does not implement the method. Use an explicit block when the operation needs a specific argument, a condition or a choice about absent values. That makes the rule clear to someone reading the pipeline later.

A method can also accept a block as a named parameter using `&block` and pass it on to another method. This is useful when the same transformation needs to be applied in more than one place. Check what happens if the caller supplies no block before attempting to invoke it.

## Choose the form that shows the intent

Try the short and expanded versions on a normal input and an unexpected one. When reviewing the code, ask whether the shorter expression tells you what each element must support. Keep the explicit form when it lets readers see an important branch of the operation.

## Sources

- [Ruby Core — Symbol](https://docs.ruby-lang.org/en/master/Symbol.html)
