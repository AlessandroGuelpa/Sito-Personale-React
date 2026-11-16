Values such as integers, strings, symbols and `nil` are objects in Ruby. Each responds to a set of methods. Even `3.times` sends a message to the integer `3`, and `nil` has methods of its own. A call without an explicit receiver can still be a method call on the current `self`.

```ruby
42.class                 # Integer
42.even?                 # true
(-5).abs                 # 5
"hello".upcase           # "HELLO"
nil.to_a                 # []
3.times { print "yo " }  # yo yo yo
```

Methods such as `class` and `methods` let you inspect a value and discover what it can do. Classes describe behaviour for the objects they create. A small set of objects with clear responsibilities can often be composed without a deep inheritance hierarchy.

## Compare value and identity

Two strings can contain identical text while being distinct objects. `==` can compare their values, whereas `equal?` asks whether both references point to the same object. Try creating two strings using `String.new("hello")`. Then make a third variable refer to the first string. After modifying the first string in place, compare all three again. The other reference to that string observes the change, while the separate string keeps its own content.

The distinction matters when methods share objects. An operation may return a new value or modify the object it received, and its callers need to know which. Test the observable behaviour of those calls instead of relying on how the interpreter internally represents an object.

## Pass behaviour to an object

The block after `3.times` supplies behaviour for each repetition. Ruby's [blocks, procs and lambdas](/blog/ruby-blocchi-proc-lambda) describe different ways of passing it. The [Enumerable guide](/blog/ruby-enumerable-map-select-reduce) applies the same pattern to transforming or filtering values in a collection.

## Sources

- [Ruby — Language documentation](https://www.ruby-lang.org/en/documentation/)
