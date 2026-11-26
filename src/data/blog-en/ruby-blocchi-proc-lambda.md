A Ruby method can accept a block written in braces or with `do...end`. A method can call the block with `yield`. When a piece of behaviour needs to be stored, passed around or called later, a `Proc` object gives it a value of its own. A lambda is a kind of Proc with method-like rules for its arguments and return.

```ruby
[1, 2, 3].each { |number| puts number }

square = ->(number) { number * number }
square.call(5) # 25

add = Proc.new { |a, b| a + b }
add.call(2, 3) # 5
```

## Compare argument counts and early returns

Call a lambda declared with two required positional arguments with only one and Ruby raises an `ArgumentError`. A non-lambda Proc with simple positional parameters can receive `nil` for a missing argument. Its body may then fail if it tries to use that value. Test the argument binding separately from the calculation to see which behaviour comes from the callable.

A `return` in a lambda exits that lambda. In a non-lambda Proc it attempts to return from the enclosing method where the Proc was defined. If that method has already finished, the attempted return can raise `LocalJumpError`. Pay attention to the difference when saving a callback to run later.

## Choose how to pass the operation

An inline block can express a rule used in one place. For a transformation you will reuse with [Enumerable](/blog/ruby-enumerable-map-select-reduce), capture it in a Proc or lambda and make its expected input explicit. Ruby's [ampersand and symbol shorthand](/blog/ruby-ampersand-symbol-shorthand) is convenient when the whole operation is a simple method call on each item. Test a required and optional block separately when publishing an API that accepts them. For an optional block, `block_given?` lets a method check before invoking `yield`.

When you start combining transformations, the [Ruby functional programming examples](/blog/ruby-programmazione-funzionale) show where to keep external effects.

## Sources

- [Ruby Core — Proc](https://docs.ruby-lang.org/en/master/Proc.html)
