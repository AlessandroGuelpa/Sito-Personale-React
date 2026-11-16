Ractors let CRuby run separate Ruby code in parallel while limiting how mutable objects can be shared. That can help with a CPU-heavy calculation that can be divided into independent units. The message and object rules are part of the design. Data may need to be shareable, copied or moved according to those rules.

The [Ruby Benchmark guide](/blog/ruby-benchmark-misurare) provides a baseline for a sequential version. [Duck typing](/blog/ruby-duck-typing) helps define what workers and callers expect from each other, while the Ractor boundary still controls which objects can cross it.

## Collect independent results

```ruby
# Ruby 4
workers = 4.times.map do |index|
  Ractor.new(index) do |factor|
    (1..1_000_000).sum { |value| value * factor }
  end
end

results = workers.map(&:value)
```

Each worker receives a number, does its calculation and returns the result. On Ruby 3.4 this example collects results with `workers.map(&:take)`. Ruby 4 uses `Ractor#value` for the final result and adds `Ractor::Port` for communication. Check the runtime and library versions before choosing which interface to use.

## Account for transfer and startup costs

Start the comparison with the same input and output in both implementations. Measure startup, data preparation, communication, execution and result collection. Small tasks can spend more time at these boundaries than doing useful work. A deeply nested mutable object can also be harder to share safely than a simple number or an explicitly shareable value.

Repeat the comparison with representative input sizes, record memory as well as elapsed time, and check how worker failures reach the caller. Isolation helps control access to in-process state, while concurrent operations on an external service or database still need their own coordination. If the workload spends most of its time waiting on the network, identify where that wait occurs before introducing CPU parallelism.

## Sources

- [Ruby Core — Ractor](https://docs.ruby-lang.org/en/master/Ractor.html)
- [Ruby 4.0 release notes](https://www.ruby-lang.org/en/news/2025/12/25/ruby-4-0-0-released/)
