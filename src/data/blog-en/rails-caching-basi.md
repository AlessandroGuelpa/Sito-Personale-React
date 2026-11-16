Caching can save a Rails application from repeating the same expensive query or computation. Statistics, leaderboards and results from an external API can be good candidates when the result is costly to produce and changes less often than it is read.

~~~ruby
def launch_statistics
  Rails.cache.fetch("stats/launches", expires_in: 1.hour) do
    {
      total: Launch.count,
      by_year: Launch.group_by_year(:net).count,
      successes: Launch.success.count,
    }
  end
end
~~~

The example assumes the grouping helper and model scope are available. On a miss the cache executes the block and stores its result. Later reads can reuse that value until it expires or is invalidated. A cold request can still run the underlying queries, so investigate [N+1 queries in Rails](/blog/rails-problema-n-piu-1) separately.

## Choose a key and an invalidation rule together

Imagine a product card that shows price and availability. A key that only changes with edits to the product text can return an old price after an inventory synchronisation. List the inputs that determine the result, then decide which changes invalidate it or move reads to a new key. Include a version where it helps to track those changes.

If the value differs by user or account, check whether the cache key and access rules preserve that separation. A shared store should only contain information appropriate to its sharing policy. The [Shopify GraphQL query budget](/blog/shopify-graphql-budget-query) is another example where measuring repeated work helps you decide when to reuse a result.

## Test a hit and a change in the source data

Read the same value twice and verify the second call uses the cached result. Then change a source value and verify that the refreshed result reaches the caller at the expected time. Monitor the hit ratio, store size, latency and invalidation cost. A useful cache removes measured work and keeps staleness within the requirements of the page.

## Source

- [Rails Guide to caching](https://guides.rubyonrails.org/caching_with_rails.html)
