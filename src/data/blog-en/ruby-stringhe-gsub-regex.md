Ruby's `String#gsub` replaces all matching occurrences and can use a block to calculate each replacement. `scan` collects matches. `match` gives a match object with captures when the pattern succeeds. Choose the operation based on whether you need to edit the source text or extract information from it.

```ruby
text = "Contact ale@example.com or info@example.org"
text.scan(/[\w.]+@[\w.]+/)
# ["ale@example.com", "info@example.org"]

"price: 100 euros".gsub(/\d+/) { |number| (number.to_i * 1.1).round.to_s }
# "price: 110 euros"

"My First Post!".downcase.gsub(/[^a-z0-9]+/, "-").delete_prefix("-").delete_suffix("-")
# "my-first-post"
```

The first pattern pulls out the email-like tokens shown in the example. It omits valid address characters such as a plus sign and may preserve trailing punctuation, so use it only to illustrate `scan`. The last pattern deliberately keeps only ASCII letters and digits. For a site that uses accented titles, decide how to handle Unicode before choosing how to turn a title into a URL.

## Treat supplied text according to the contract

If a person supplies text to find, pass it as a literal string when appropriate. Use `Regexp.escape` if that literal needs to appear inside a larger regular expression. Otherwise punctuation can acquire a special meaning. A date-like pattern such as `/(\d+)-(\d+)-(\d+)/` can separate groups, while validating a real calendar date requires more than accepting those digits. [Ruby pattern matching](/blog/ruby-pattern-matching) addresses the different question of matching structured values such as hashes or arrays.

## Exercise real inputs

Test an empty string, no match, multiple occurrences, multiline text and accented characters. When the input is long or untrusted, assess how the pattern behaves on repetitive data, including a case that fails near the end. Use [Ruby Benchmark](/blog/ruby-benchmark-misurare) with representative input if replacing or simplifying a pattern is intended to improve performance.

## Sources

- [Ruby Core — String](https://docs.ruby-lang.org/en/master/String.html)
