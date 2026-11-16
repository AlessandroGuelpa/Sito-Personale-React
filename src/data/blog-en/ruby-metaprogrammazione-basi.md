Ruby can define methods when a class is loaded or while the program runs. Libraries use that ability to express recurring patterns with less repetition. It can also make a method difficult to find in a text search, so the rule that generates it needs to be clear.

```ruby
class Configuration
  [:host, :port, :user].each do |field|
    define_method(field) { instance_variable_get("@#{field}") }
    define_method("#{field}=") { |value| instance_variable_set("@#{field}", value) }
  end
end

config = Configuration.new
config.host = "localhost"
config.host # "localhost"
```

This loop installs a reader and writer for each name. Ordinary accessors can express this particular example more succinctly. `define_method` earns its place when the generated methods need behaviour that follows one stable rule. For instance, if every reader must perform the same conversion, test that conversion across the generated names and add a case for a missing value.

## Keep unknown methods visible

`method_missing` can handle a subset of otherwise unresolved method calls. Delegate to `super` for unsupported names so mistakes are reported in the usual way. If an object handles a method dynamically, implement `respond_to_missing?` consistently so callers can discover what it supports. Test `respond_to?` for supported and unsupported names, inspect the public methods your class exposes, and verify the error from a misspelled call.

## Compare with an explicit object or module

A configuration table or a direct method can make a changing list of names easier to inspect. [Ruby modules](/blog/ruby-moduli-mixin) can share a fixed set of behaviour across classes. [Duck typing](/blog/ruby-duck-typing) clarifies the protocol callers need regardless of how the methods are installed. Choose dynamic definition when it makes that protocol easier to maintain. Keep the source of method names controlled, document the callable surface and include examples for the behaviour a reader cannot find by searching for a declaration.

## Sources

- [Ruby Core — Module](https://docs.ruby-lang.org/en/master/Module.html)
