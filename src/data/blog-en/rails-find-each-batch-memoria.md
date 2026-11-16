A loop that works for a hundred products may become a problem when the catalogue grows. Materialising an entire Active Record relation creates model instances for every result before much useful work can happen. The job’s memory use can grow with the size of the catalogue.

Active Record provides batch methods to limit how much data the job holds at once. If batches perform writes, use [database constraints that preserve uniqueness under concurrency](/blog/rails-unicita-database-concorrenza). The [Active Record querying overview](/blog/rails-activerecord-le-basi) explains how the relation becomes SQL.

## Process a batch at a time

`find_each` fetches groups of rows and yields individual records. `find_in_batches` passes an array of records to the block for each batch. Both methods query the database for each group, so look at query cost as well as object allocation.

~~~ruby
Product.where(active: true).find_each(batch_size: 500) do |product|
  CatalogExporter.call(product)
end
~~~

`Product` and `CatalogExporter` are example application classes. Choose the batch size by measuring record size, memory use, query overhead and processing time. The example uses 500 records as a starting value. An exporter that keeps every object in an array can still grow without bounds, even with a smaller batch.

## Choose a cursor and define the boundary of the scan

Batching uses cursor-based ordering. Check what your Rails version does when you pass a relation with an existing `order`. A batch scan may use a different ordering from ordinary iteration.

Concurrent changes also affect which records a job sees. Define what the export should represent. A stable cursor and an upper bound based on time or ID can make the work easier to reason about. Updating the field used as the cursor during the scan can cause a row to move into an interval that has already been visited or that the job will visit again.

If several workers should help with the import, split the scan into disjoint ranges or use a queue with explicit record IDs. Two workers running the same query may pick up the same records. Decide separately how data is discovered and which writes must be atomic for the business operation.

## Resume after a partially completed batch

A job that stops after exporting half of a batch may see those rows again on the next run. Save a checkpoint after the result is durable and protect repeat operations. In some import flows, an idempotent upsert keyed by the external ID is sufficient. An export to another service also needs to account for repeated delivery or an acknowledgement that arrives late.

An exporter used in a batch should therefore tolerate repeats where the job can restart:

~~~ruby
Product.where(active: true).find_each(batch_size: 500) do |product|
  # Illustrative processing. Make the operation safe to repeat.
  ProductExporter.call(product)
end
~~~

Track records completed, elapsed time and memory per batch, failed records and work still pending. Keep sensitive values out of logs that only need a job ID or record count. A larger batch may reduce round trips and use more memory. Benchmark with realistic records so the value reflects the exporter as well as the query.

If multiple batches can encounter the same external identifier, enforce [uniqueness for concurrent Rails writes](/blog/rails-unicita-database-concorrenza) alongside whatever batching strategy you choose.

## Sources

- [Rails Active Record batch methods](https://api.rubyonrails.org/classes/ActiveRecord/Batches.html)
- [Rails Guide to Active Record Querying](https://guides.rubyonrails.org/active_record_querying.html)
