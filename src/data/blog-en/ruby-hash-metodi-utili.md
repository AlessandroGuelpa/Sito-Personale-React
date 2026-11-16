Ruby's `Hash` associates keys with values and preserves insertion order. Access with `[]` returns the stored value or the hash's default. Use `fetch` when a missing key has a particular meaning. It returns the existing value, including an explicit `nil`, and can use a supplied default or raise for an absent key.

[Symbols and strings](/blog/ruby-symbol-vs-string) are distinct keys in a regular hash. [Ruby pattern matching](/blog/ruby-pattern-matching) can help when several fields must match a particular shape together.

```ruby
config = { host: "localhost", port: 3000 }

config.fetch(:port)        # 3000
config.fetch(:timeout, 30) # 30
config.dig(:db, :name)     # nil

prices = { bread: 2, milk: 1 }
prices.transform_values { |price| price * 1.1 }
prices.sum { |_, price| price } # 3
```

## Choose what missing should mean

`dig` follows nested keys and can return `nil` when part of the path is absent. Check the shape if an intermediate value could be a type that cannot be traversed. Use `fetch` or an explicit check when missing data should stop the operation. For example, a missing optional timeout can have a default, while a missing service address may be a configuration error.

## Give each group its own collection

`Hash.new([])` gives missing keys the same default array. Appending to that array can affect another lookup without storing either key. Use a block such as `Hash.new { |groups, key| groups[key] = [] }` when each new key needs a separate array. Test at least two missing keys and check that adding to one group leaves the other independent.

Review how `merge` handles a repeated key and how `transform_values` returns an updated hash. For configuration, try merging two hashes that both specify a timeout and confirm which value the application is meant to use. The best choice is the one that makes the expected behaviour of the data explicit.

## Sources

- [Ruby Core — Hash](https://docs.ruby-lang.org/en/master/Hash.html)
