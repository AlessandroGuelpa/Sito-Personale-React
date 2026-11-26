Ruby's `Enumerable` gives collections operations for transforming, selecting and aggregating their elements. Start by deciding what result you want back. `map` produces one transformed value per element. `select` keeps matching elements, and `reduce` combines elements into an accumulator.

[Blocks and lambdas](/blog/ruby-blocchi-proc-lambda) describe how to supply the rule each method executes. The [Hash guide](/blog/ruby-hash-metodi-utili) covers useful operations when the aggregation returns key-value pairs.

```ruby
numbers = [1, 2, 3, 4, 5, 6]

numbers.map { |n| n * 2 }               # [2, 4, 6, 8, 10, 12]
numbers.select { |n| n.even? }          # [2, 4, 6]
numbers.reduce(0) { |total, n| total + n } # 21
numbers.sum                            # 21
```

The chain `numbers.select(&:even?).map { |n| n ** 2 }` keeps even numbers and squares them. The shorthand calls `even?` on each item.

## Trace the result and any intermediate arrays

Given a list of amounts, `map` can convert every amount to its representation in cents, `select` can keep the positive amounts, and `reduce` can add them. Eager chains can allocate intermediate collections. For a large sequence, consider a lazy enumerator or a single aggregation if only the final total matters. If the input is an Active Record relation, check whether the database can filter and aggregate the relevant records without loading them all.

## Include edge cases in the contract

Test an empty list, negative values and decimals. Pick an initial value for `reduce` that gives a meaningful result when there are no elements. For amounts of money, define how precision and rounding are handled before applying the transformation. For example, check whether the application rounds each line before totalling or rounds only the total, since the two rules can give different results. An API may legitimately return an empty collection. Decide how that result differs from a failure to obtain the records.

## Stop a sequence once you have enough results

Suppose you need only the first three even numbers in a long sequence. With select on an array, Ruby builds the full result before taking the first three elements. A lazy pipeline can stop when it finds them.

~~~ruby
matches = (1..1_000_000).lazy.select(&:even?).take(3).force
# [2, 4, 6]
~~~

Temporarily print each examined value inside select and repeat with a range from 1 to 20. The lazy version stops testing at 6. A finite range still terminates if the filter finds fewer than three results. With an endless generator, set an explicit limit on how many inputs you are willing to examine.

To sort instances that define their own comparison, see [how Comparable works in Ruby](/blog/ruby-comparable-enumerable-custom).

## Sources

- [Ruby Core — Enumerable](https://docs.ruby-lang.org/en/master/Enumerable.html)
