A Ruby symbol such as `:name` is an immutable identifier. A string such as `"name"` is a sequence of characters that can be modified unless it is frozen. The choice should express what a value represents. A field name controlled by the program can be a symbol, while the text someone entered can remain a string.

```ruby
String.new("hello").equal?(String.new("hello")) # false
:hello.equal?(:hello)                          # true

user = { "name" => "Ada", name: "Grace" }
user["name"] # "Ada"
user[:name]  # "Grace"
```

These are different keys in a regular Ruby [Hash](/blog/ruby-hash-metodi-utili). A lookup using the wrong type can return `nil` and look like a missing value. Use `key?` when you need to distinguish a missing entry from one that explicitly stores `nil`. A configuration hash can use symbols such as `:timeout` and `:host` consistently. External data often arrives in a different form.

## Normalise at the boundary

Parsed JSON commonly supplies string keys. Decide what type your application accepts at that boundary and convert deliberately if the rest of the program expects a different convention. Check that required keys still exist after conversion and decide how to handle collisions when data from several sources is combined. Validate external values before using them to choose internal operations.

## Consider the other uses of symbols

A symbol can name a method, which Ruby uses in the [`&:method` shorthand](/blog/ruby-ampersand-symbol-shorthand) to create a callback. That usage is about invoking known behaviour. A string is a natural choice for content you need to edit, build or display. For a real data flow, test both spellings of a representative key and document which one each API supplies and expects. Choose based on semantics instead of assuming that a wholesale conversion will make the process faster.

When a value represents text you need to match or transform, use the [String and Regexp replacement examples](/blog/ruby-stringhe-gsub-regex).

## Sources

- [Ruby Core — Symbol](https://docs.ruby-lang.org/en/master/Symbol.html)
