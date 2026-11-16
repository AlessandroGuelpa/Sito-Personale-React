Active Record is the object-relational mapper used by Rails. An application model represents rows in a database table and gives Ruby code a way to build queries and write data. It is useful to follow the SQL that those operations produce.

~~~ruby
class Launch < ApplicationRecord
end

Launch.create(name: "Falcon 9", provider: "SpaceX")
Launch.where(provider: "SpaceX").order(:date)
Launch.find(1)

launch = Launch.first
launch.update(status: "success")
~~~

## Know when a relation fetches its records

Methods such as `where`, `order` and `limit` return relations you can chain. A relation can remain unevaluated while you add conditions, then load records when the application needs them. Calls such as `find` can execute a query immediately. Check the SQL log when it matters whether an operation runs in the database or on an already loaded Ruby array.

For a paginated list, start by checking the actual conditions, ordering and limit in the query. If a filter happens after the rows have been materialised, the application may be processing more data than the screen needs. A query can also lead to multiple later accesses when the view follows [belongs_to and has_many associations](/blog/rails-associazioni-has-many-belongs-to) for each row.

## Choose indexes from the query you actually run

If a list is slow, inspect its SQL and use `explain` or the database’s query plan tools. A useful index depends on the conditions and sort order, as well as the size and distribution of the data. Try a representative request before deciding whether an index helps. When an index or another schema change is necessary, plan it using [Rails migrations](/blog/rails-migrazioni-versionare-il-database).

Comparing a single-record lookup with a paginated list makes the difference in query timing and volume concrete. Record the SQL and the number of rows read for each case before optimising the Ruby code.

## Source

- [Rails Guide to Active Record Querying](https://guides.rubyonrails.org/active_record_querying.html)
