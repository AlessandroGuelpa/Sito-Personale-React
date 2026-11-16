PostgreSQL can search and rank text already stored in the application's database. It turns document text into a `tsvector` of normalised terms and the search expression into a `tsquery`. Dictionaries and language configuration affect which terms match. A Rails application can expose the operation as a scope.

```ruby
class Launch < ApplicationRecord
  include PgSearch::Model

  pg_search_scope :search,
    against: { name: "A", description: "B" },
    using: { tsearch: { prefix: true } }
end

Launch.search("falcon")
```

This example uses the `pg_search` gem and treats matches in the launch name as more important than matches in the description. Prefix matching can find a term such as “falcon” from “fal”. Use that behaviour intentionally since adding more matches can also make the top results less helpful.

## Test what people expect to find

Build a small set of launches with similar names and different descriptions, then run representative queries. Check whether the expected result appears first, whether empty or unfamiliar input is handled consistently and how words in each content language are normalised. Italian terms, for example, can benefit from a configuration that understands Italian word forms. Test that choice on words drawn from your own catalogue.

## Match the index to the query

A GIN index can speed up matches when it covers the vector used by the query. If the scope builds a weighted expression on the fly, inspect its SQL before creating an index. You can either index a matching expression or store a search vector and configure the scope to query it. Compare execution plans and timings on data volumes close to production.

The [Active Record queries guide](/blog/rails-activerecord-le-basi) covers how query construction affects the database. Use [request specs](/blog/rails-request-specs-testare-api) to protect the search endpoint's status and output, while examples with expected rankings protect the search behaviour.

## Sources

- [PostgreSQL documentation — Full-text search introduction](https://www.postgresql.org/docs/current/textsearch-intro.html)
