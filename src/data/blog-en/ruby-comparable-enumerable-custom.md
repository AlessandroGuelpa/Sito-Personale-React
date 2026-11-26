Include Ruby's `Comparable` module and define `<=>` to describe how two instances should be ordered. The comparison returns a negative number, zero or a positive number depending on the order. It can return `nil` when the objects cannot be compared.

```ruby
class Launch
  include Comparable
  attr_reader :net

  def initialize(net)
    @net = net
  end

  def <=>(other)
    return nil unless other.respond_to?(:net)

    net <=> other.net
  end
end

launches = [Launch.new(3), Launch.new(1), Launch.new(2)]
launches.sort.map(&:net)     # [1, 2, 3]
launches.min.net            # 1
Launch.new(1) < Launch.new(2) # true
```

Here the scheduled times are represented by sortable numbers. `Comparable` uses the result to support operators such as `<` and `>=`, along with methods such as `between?` and `clamp`. Ruby's [Enumerable operations](/blog/ruby-enumerable-map-select-reduce), including sorting collections, can use the same ordering. A custom collection can include Enumerable by providing an appropriate `each`.

## Define the comparable values

The example expects objects whose `net` values make sense to compare together. This is part of a [duck typing contract](/blog/ruby-duck-typing). When sorting products by price, decide how to handle an unknown price. Treating it as zero puts it ahead of positively priced products and may misrepresent the data. If two records have the same price but the interface needs a stable tie-breaker, specify the additional key explicitly. Test equal values, three successive values and a missing or incompatible value.

## Keep the order consistent

Check that if A is before B and B is before C, A stays before C. Make sure comparisons in both directions are consistent. An incompatible value can be excluded or ordered according to a rule defined for a particular view. If the domain has several valid orders depending on context, use an explicit sort key for that context. Reserve the general comparison for an order callers can reasonably rely on across the application.

## Check when two separate records compare as equal

Two launches can share a time. In the example, comparing two instances created with Launch.new(1) using == returns true because Comparable receives zero from <=>. If you do this on models with their own identifiers, check whether callers expect equality to mean a shared timestamp. A list view can specify a sort key and keep the model’s existing equality semantics.

Try sorting three elements by [time, id], for example [3, 9], [1, 8] and [1, 2]. The expected order starts with ID 2 and ends with ID 9. The second key only matters when the scheduled times match. In a single Ruby view, use sort_by with an array of keys. Check unscheduled launches separately and decide whether to exclude them or display them last.

## Sources

- [Ruby Core — Comparable](https://docs.ruby-lang.org/en/master/Comparable.html)
