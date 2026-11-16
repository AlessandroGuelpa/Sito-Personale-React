RSpec groups examples around the behaviour they exercise. `describe` names the subject or method, `it` states one expectation, and `expect` checks the result. A good example still describes the system after a refactor that leaves its public behaviour intact.

```ruby
RSpec.describe Launch do
  describe "#successful?" do
    it "returns true for a successful launch" do
      launch = Launch.new(status: "success")
      expect(launch.successful?).to be true
    end

    it "returns false for a failed launch" do
      launch = Launch.new(status: "failure")
      expect(launch.successful?).to be false
    end
  end
end
```

## Test what the caller can observe

An expectation that a private helper receives a call can fail when the helper is renamed or removed. An example that checks the result of `successful?` can keep protecting the rule. If an unset launch status is valid, add an example that gives that state its own expected result. This matters when a library becomes [a distributed Ruby gem](/blog/ruby-creare-una-gem) and other code depends on its public API. Use ordinary cases, boundaries and the failures the API exposes. For a method with [exception handling](/blog/ruby-gestione-errori), assert the behaviour of the recovery path and of an error that should still propagate.

## Control what changes between runs

When time affects the result, inject a clock or use test support to freeze it at a stated instant. A fake for a remote API can test how your code reacts to a known response. A separate integration check can give evidence that the real provider still delivers the expected contract. Choose the scope of each example according to the uncertainty it addresses.

Run the relevant examples before and after the change. If a case is hard to set up, check whether the method exposes a clear input and output or implicitly depends on state that the example cannot control. The test can make that design issue visible while you can still change it.

## Sources

- [RSpec — Documentation](https://rspec.info/documentation/)
