Active Record is the object-relational mapper used by Rails. An application model represents rows in a database table and gives Ruby code a way to build queries and write data. It is useful to follow the SQL that those operations produce.

For a runnable example in an existing Rails application, generate the model and its migration, then start the Rails console:

```bash
bin/rails generate model Launch name:string provider:string status:string
bin/rails db:migrate
bin/rails console
```

The generated table includes `created_at` and `updated_at`. The examples below assume the new table has been migrated and contains the three string columns above. For schema changes in an existing application, see [Rails database migrations](/blog/rails-migrazioni-versionare-il-database).

~~~ruby
class Launch < ApplicationRecord
end

launch = Launch.create!(name: "Falcon 9", provider: "SpaceX", status: "scheduled")
Launch.where(provider: "SpaceX").order(created_at: :desc)
Launch.find(launch.id)
launch.update!(status: "success")
~~~

## Know when a relation fetches its records

Methods such as `where`, `order` and `limit` return relations you can chain. A relation can remain unevaluated while you add conditions, then load records when the application needs them. In contrast, `create!` writes immediately and raises on validation or database errors; the non-bang `create` returns a model even when validation prevents persistence. For validation rules versus database guarantees, see [Active Record validations and constraints](/blog/rails-validazioni-dati-puliti). Calls such as `find` can execute a query immediately. Check the SQL log when it matters whether an operation runs in the database or on an already loaded Ruby array.

For a paginated list, start by checking the actual conditions, ordering and limit in the query. If a filter happens after the rows have been materialised, the application may be processing more data than the screen needs. A query can also lead to multiple later accesses when the view follows [belongs_to and has_many associations](/blog/rails-associazioni-has-many-belongs-to) for each row.

## Choose indexes from the query you actually run

If a list is slow, inspect its SQL and use `explain` or the database’s query plan tools. A useful index depends on the conditions and sort order, as well as the size and distribution of the data. Try a representative request before deciding whether an index helps. When an index or another schema change is necessary, plan it using [Rails migrations](/blog/rails-migrazioni-versionare-il-database).

Comparing a single-record lookup with a paginated list makes the difference in query timing and volume concrete. Record the SQL and the number of rows read for each case before optimising the Ruby code.

## Query the same model for two different screens

A detail page knows the launch ID. It can use find and let Rails handle RecordNotFound as a 404 when the record is missing. An optional lookup can use `find_by` and handle `nil` by showing an empty state. For example, `Launch.find_by(name: "Unknown")` returns `nil` when no record matches, while `Launch.find_by!(name: "Unknown")` raises `ActiveRecord::RecordNotFound`. A summary page might need only the names of the ten most recent launches. Build the selection as a relation and use pluck when the output needs only values.

~~~ruby
recent = Launch.where(provider: "SpaceX").order(created_at: :desc, id: :desc).limit(10)
puts recent.to_sql
names = recent.pluck(:name)
~~~

Using the ID as a tiebreaker gives predictable ordering when several launches share the same date. to_sql shows the SQL for the relation. Inspect the log of the pluck call to see the actual columns selected. If the view needs model methods or associations, keep the relation and load records when they are needed.

## Count the queries produced by the page

Open a list with ten launches and count the database calls that look up the provider, assuming it is an association in your model. If doubling the list doubles those calls, measure the [N+1 pattern](/blog/rails-problema-n-piu-1). Targeted eager loading can help. Repeat the check using the screen’s real filters and sort order. Compare both query count and rows returned, since a single join that produces many duplicate rows can still be expensive.

## Next steps for larger tables

When the result set no longer fits comfortably in memory, compare normal relation loading with [batch processing through `find_each`](/blog/rails-find-each-batch-memoria). A batch iterator is useful for background jobs, not a substitute for paginating a user-facing list.

## Source

- [Rails Guide to Active Record Querying](https://guides.rubyonrails.org/active_record_querying.html)
