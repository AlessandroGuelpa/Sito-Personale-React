An Active Record query can fetch a list efficiently and still leave the page doing unnecessary work. When each item loads its association on demand, the page can issue one query for the list and one more for every item. With 100 launches, that can mean 101 queries.

Start with how [Active Record relations are built and loaded](/blog/rails-activerecord-le-basi), then check the [Active Record associations](/blog/rails-associazioni-has-many-belongs-to) the view actually reads. Caching the endpoint introduces the separate question of when to [invalidate a Rails cache](/blog/rails-caching-basi).

~~~ruby
# One launch query, then potentially a provider query for each launch.
Launch.limit(100).each do |launch|
  puts launch.provider.name
end

# Load providers in advance for this simple relation.
Launch.includes(:provider).limit(100).each do |launch|
  puts launch.provider.name
end
~~~

For the simple second query, Rails can fetch the launches and their providers in two queries. A small development database can make the first version look fast. The same access pattern becomes more costly as the result grows. A tool such as Bullet can flag the pattern during development, and the SQL log can show which association caused it.

## Choose how to load associations

`includes` tells Rails which associations to load in advance. Depending on the query and its filters, Rails may run a separate query for each association or use a join. Use `preload` to request separate queries and `eager_load` when you want eager loading through a `LEFT OUTER JOIN`.

The number of statements depends on the associations and the shape of the relation. A join may return multiple copies of the parent row when it has several children. Inspect the SQL and the resulting objects, particularly when the query filters on associated records. Verify that those filters run where you expect them to run.

## Compare query count, time and memory

Consider a page of 100 orders that shows each customer and the order lines. The original implementation may issue one order query and more queries for customers and line items. Once you add eager loading, compare database round trips, elapsed time, transferred rows and allocated memory on a small and a realistic dataset.

Loading all associations can bring thousands of rows into memory. If the page only displays the customer name and the order total, it may need a projection or SQL aggregate instead of fully materialised line items. An association used on one particular screen can be loaded there, preserving a smaller default query for endpoints that only use the parent records.

## Protect the improvement

Add a representative measurement or test that catches query counts growing linearly with the number of rows displayed. Where it suits the relation, `strict_loading` can surface an unexpected lazy load. Confirm the result on the endpoint people use, since the shape and volume of its data determine the cost.

Cache invalidation and N+1 queries are separate concerns. If a slow response is cached, a cold request can still incur the repeated database work. For scans over large catalogues, [Rails batch processing](/blog/rails-find-each-batch-memoria) gives you another way to bound the memory needed while working through the data.

## Sources

- [Rails Guide to eager loading associations](https://guides.rubyonrails.org/active_record_querying.html)
- [Rails ActiveRecord::Relation API](https://api.rubyonrails.org/classes/ActiveRecord/Relation.html)
