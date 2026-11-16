Ruby's `case/in` can compare the structure of a value and bind parts of it to local variables. A [Hash](/blog/ruby-hash-metodi-utili) from an API can contain several result shapes, each with different fields. Describe the shapes your program understands and set an explicit path for anything else.

```ruby
response = { status: "ok", data: { name: "Falcon 9", provider: "SpaceX" } }

case response
in { status: "ok", data: { name:, provider: } }
  puts "#{name} by #{provider}"
in { status: "error", message: }
  puts "Error: #{message}"
else
  puts "Unsupported response format"
end
```

The first pattern looks for a successful status and a nested hash with two keys. It makes `name` and `provider` available inside the branch. Other patterns can match an array, check a class such as `Integer` or include a guard such as `in n if n > 0`.

## Check each required part of the contract

A matched key can still hold `nil` or the wrong type if the pattern only binds it. Extra keys can also survive a partial hash match. Add type checks where the rest of the operation depends on the value. For example, `name: String => name` both checks the type and binds the value in the successful branch. Try a valid hash, a missing status, a null status and a malformed nested field. If the data comes from parsed JSON, also account for string keys before using a symbol-keyed pattern.

## Keep the match separate from what follows

A matching branch can hand its bound values to a named function or to a transformation you reuse with [blocks and lambdas](/blog/ruby-blocchi-proc-lambda). That keeps it visible which shapes are accepted and what each branch does with them. Decide how an unsupported shape should be reported, especially if the caller needs to distinguish it from a legitimate error response supplied by the provider.

## Sources

- [Ruby Core — Pattern matching](https://docs.ruby-lang.org/en/master/syntax/pattern_matching_rdoc.html)
