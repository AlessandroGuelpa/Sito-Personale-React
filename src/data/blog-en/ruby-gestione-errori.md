Ruby raises exceptions as objects and handles them with `rescue`. Start by deciding which failures the current method can recover from. For an optional configuration file, absence can mean “use the defaults”. A present file with invalid JSON is a different problem and deserves a clear error.

```ruby
require "json"

def read_config(path)
  JSON.parse(File.read(path))
rescue Errno::ENOENT
  {}
rescue JSON::ParserError => error
  raise ArgumentError, "Invalid configuration: #{error.message}"
ensure
  warn "Configuration read attempted"
end
```

In this example the fallback is an empty configuration and the invalid document is reported. In a deployed application, keep sensitive contents out of error reports. Raise with context that helps the caller diagnose the problem while preserving the original exception as the cause.

## Catch what the method can handle

A bare `rescue` catches `StandardError` subclasses. That covers more than the specific error a recovery path was written for. A [Rails call to an external API](/blog/rails-consumare-api-esterne) could fail with a timeout, a denied request or invalid data. Returning an empty list for every failure leaves the caller unable to distinguish a service problem from a valid empty response.

Use a bounded retry for a transient failure when repeating the operation is safe. An invalid input or missing permission normally needs a change before retrying. Keep the number of attempts visible and let unexpected errors propagate.

## Release resources and test the paths

An `ensure` block runs when control exits the protected code, including when it raises. Use it to release something the method acquired, or prefer a block-based API that already manages the resource. Add [RSpec examples](/blog/ruby-rspec-testare) for success, the recoverable failure and at least one unexpected exception. Verify that cleanup happens and the cause remains available to the caller.

## Sources

- [Ruby Core — Exceptions](https://docs.ruby-lang.org/en/master/syntax/exceptions_rdoc.html)
