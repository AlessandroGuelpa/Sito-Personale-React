Ruby's `Benchmark` module lets you compare two blocks of code under the same conditions. Define the question before measuring. Are you trying to reduce CPU time, allocation or the time an application spends waiting for an answer? A faster small operation matters when it affects the path you actually care about.

The [Enumerable guide](/blog/ruby-enumerable-map-select-reduce) gives examples of collections and allocations to compare. The [Ractor article](/blog/ruby-ractor-concorrenza) covers a case where time spent setting up workers and moving data can affect the result.

```ruby
require "benchmark"

values = (1..100_000).to_a

Benchmark.bm(10) do |trial|
  trial.report("each+push") do
    output = []
    values.each { |number| output << number * 2 }
  end

  trial.report("map") do
    values.map { |number| number * 2 }
  end
end
```

Both blocks transform the same values. The report includes elapsed and CPU timings. This small example measures each block once, so use repeated trials and suitable warm-up to learn whether the difference persists. A tool such as `benchmark-ips` can report iterations per second for repeatable operations.

## Control what can change between trials

Use the same input size and shape. Record the Ruby version and machine conditions. Separate cold starts from warmed-up work if they answer different questions. Garbage collection, caches, interpreter warm-up and other processes can all change observations. Compare a range of results instead of deciding from one run. Report which aspects of memory or I/O you measured separately if they are relevant.

## Verify inside the application

A method can save a few microseconds while the request still spends most of its time on a database query. Confirm the gain through the full operation with realistic data. Check that both implementations still produce the same output for that input. If the application measurement is effectively unchanged, the benchmark still helps explain where further work is likely to pay off.

## Repeat the comparison and alternate the order

Turn the two example blocks into callables that accept the same array. First check that they agree on an empty array and a representative input. Then run a few unmeasured calls if the question is about steady-state performance. Measure the first call separately if startup is the path you care about.

Run, for example, nine rounds with the same number of calls per block. Measure elapsed time with Benchmark.realtime and alternate which block runs first. Save the median and range for each block. If the medians are close and the ranges overlap widely, collect more data or treat the comparison as inconclusive. Record the input size and Ruby version so a colleague can repeat the experiment.

## Separate preparation from measured work

To compare only the transformation, prepare the array before starting the clock. To measure a full request that always builds the array, include that phase too. When one implementation modifies its input, recreate it for both trials using a consistent procedure. Otherwise the second block may receive already transformed data, undermining the comparison.

## Sources

- [Ruby Core — Benchmark](https://docs.ruby-lang.org/en/master/Benchmark.html)
