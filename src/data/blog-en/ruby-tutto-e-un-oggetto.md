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

## Observe a mutation through two references

Assign the same mutable string to two variables. Append a character through the first using << and inspect the second. Then start over and use + to build a new string, assigning it only to the first variable. In the first case both references see the changed text. In the second the variable retaining the old reference still sees the original text.

This matters when a function receives a name from shared configuration. Using strip! can change what other callers read later. Decide whether the function owns the value and may mutate it, then write a test that checks the argument after the call as well as the returned result.

## Sources

- [Ruby — Language documentation](https://www.ruby-lang.org/en/documentation/)
