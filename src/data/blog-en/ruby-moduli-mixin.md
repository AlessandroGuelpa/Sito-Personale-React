A Ruby class has one superclass. A module can share behaviour across classes with different parent classes, which makes it useful for a small responsibility such as logging. When included, the module's instance methods become available to instances of the class through method lookup.

```ruby
module Traceable
  def log(event)
    puts "[#{Time.now}] #{self.class}: #{event}"
  end
end

class Launch
  include Traceable
end

class Payload
  include Traceable
end

Launch.new.log("created")
Payload.new.log("received")
```

## Follow the lookup order

`include` puts the module after the class in its ancestor chain, so a method defined on the class can take precedence. `prepend` puts the module before the class. A prepended method can wrap the class implementation by calling `super`. `extend` adds the module's methods to the receiving object's lookup chain. When the receiver is a class, callers see them as class methods.

If two modules define the same method, inspect `ancestors` and check what `super` reaches. Build a small example with one included module and one prepended module, then log the order their methods run. Changing where you add a module can change that order even if the module bodies stay the same. For example, a prepended logger can record an operation before and after `super`, provided it returns the value that the original method's callers expect. Test the return value as well as the messages.

## Keep the shared behaviour focused

Use a small public surface so maintainers can see what the mixin contributes. [Duck typing](/blog/ruby-duck-typing) describes the behaviour callers rely on, independent of whether a module supplies it. [RSpec examples](/blog/ruby-rspec-testare) can verify that including or prepending a mixin preserves that contract. When a method wraps another implementation, test both the method's result and the order of significant effects.

## Check which implementation answers a method call

If two modules define label for the same object, inspect ancestors and use object.method(:label).owner to see which implementation answers. Temporarily swap the two include statements and repeat the call. If the output changes, composition depends on a detail a reader of the class needs to find easily.

A different case is a wrapper that adds a prefix and delegates with super. Try it with a class whose label returns a known value. The expected result includes both the prefix and the class’s value. If the module only transforms a value and needs no instance state, an explicit function call avoids putting a second label into the same lookup chain.

If a module must define methods from configuration, the [Ruby metaprogramming examples](/blog/ruby-metaprogrammazione-basi) help assess the effect on debugging.

## Sources

- [Ruby Core — Module](https://docs.ruby-lang.org/en/master/Module.html)
