A gem packages Ruby code and metadata so another project can install it. Bundler can generate a starting structure with a gemspec and library files. Before sharing the package, decide what its callers may rely on. [RSpec](/blog/ruby-rspec-testare) can protect that public behaviour, and the [Ruby exception handling guide](/blog/ruby-gestione-errori) helps define the failures callers are expected to handle.

```bash
bundle gem saluti
```

Put the public library in `lib/`. A small entry point can expose one operation.

```ruby
# lib/saluti.rb
module Saluti
  def self.hello(name)
    "Hello, #{name}!"
  end
end
```

## Review the package before publishing

Set the version, license, supported Ruby versions and dependencies in the generated files. Describe the public entry points in the README. Build the package and inspect which files it actually contains. Include what an installer needs and exclude local configuration, secrets and build artefacts.

```bash
gem build saluti.gemspec
```

Install that built gem into a separate test project and require the public entry point there. This can catch missing files or undeclared dependencies even if the tests pass inside the original working directory. Exercise a normal call and an error that the consumer's code should be able to handle.

## Give the release a clear contract

Use a consistent versioning policy and describe compatibility changes in the changelog. If another application already depends on a public method, a breaking change can matter even when all of the gem's current tests pass. Check that the gem name and version are appropriate for the registry you intend to use, then publish the inspected package with `gem push` when it is ready. A focused utility shared by two projects can be enough to justify a first gem.

## Install the package in a clean environment

Run gem build on the gemspec and copy the resulting file out of the repository. Install it in a disposable Ruby environment and try require from an empty directory. If tests pass from the repository root but require fails after installation, check the file name under lib and the list of files included in the package.

Then run the smallest public call shown in the README. This also catches dependencies present in development but missing from runtime metadata. If the library provides a command, launch it outside the checkout with the same arguments you show users.

## Sources

- [RubyGems Guides — Make your own gem](https://guides.rubygems.org/make-your-own-gem/)
