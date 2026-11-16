Ruby code can often work with several kinds of object as long as they support the operations the caller needs. Duck typing makes that expectation about behaviour. A function that visits a collection can call `each` on an array, a hash or a range.

```ruby
def print_items(collection)
  collection.each { |item| p item }
end

print_items([1, 2, 3])
print_items({ a: 1 })
print_items(1..3)
```

Each object can be iterated. The values it yields still depend on the collection. A hash entry, for example, can give the block a key and a value where an array supplies one element. If a caller needs a particular record shape or an order, include that in the contract rather than relying on `each` to imply it.

## Define what callers can rely on

Two objects may both provide `calculate`. A caller that expects a number will have trouble if one object returns a hash. Specify the input, output and recoverable errors in addition to the method name. `respond_to?(:each)` can be useful as a capability check, while a test can show whether the behaviour meets the caller's needs.

## Share a contract across implementations

Use [RSpec](/blog/ruby-rspec-testare) or another test framework to apply the same examples to each object expected to be interchangeable. Include ordinary input, a boundary case and an error the caller is supposed to handle. Exercise the actual result and effects the caller cares about.

[Ruby mixins](/blog/ruby-moduli-mixin) give classes a way to share implementation. Duck typing also works when their code has no common superclass or mixin. This makes it easy to introduce a new collection or a test double when it obeys the same documented protocol. Keep the protocol as small as the operation allows.

## Sources

- [Ruby — Language documentation](https://www.ruby-lang.org/en/documentation/)
