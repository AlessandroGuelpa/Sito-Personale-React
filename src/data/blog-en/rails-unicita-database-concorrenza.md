Two workers look for the same external order identifier. Neither can see an existing order, so both attempt to create one. Their reads can both be accurate at the moment they run. The problem appears in the gap between the read and the write.

An application validation gives the caller a useful error. A [database uniqueness constraint](/blog/rails-validazioni-dati-puliti) protects the business key when the requests overlap. That distinction matters in a [Rails batch import](/blog/rails-find-each-batch-memoria), where two workers may encounter the same external identifier.

## Put the business key in a unique index

In Rails, I would keep the model validation and add an index that matches the identity in the domain. An imported order may be unique within a shop, for example, so shops can reuse the same external order ID.

~~~ruby
# In the ImportedOrder model
validates :external_id, presence: true,
  uniqueness: { scope: :shop_id }

# In the migration
add_index :imported_orders,
  [:shop_id, :external_id],
  unique: true
~~~

Before building the index on a populated table, look for duplicate keys and resolve them. Decide separately where `NOT NULL` constraints are required. For a text identifier, also define case sensitivity. If `ABC` and `abc` are the same identifier in the business system, configure comparison and normalisation to match that rule.

The same principle applies when the table already has its own name and you want an explicit index name:

~~~ruby
# Migration example for an existing table with a composite identity.
add_index :external_orders,
  [:shop_id, :external_id],
  unique: true,
  name: "idx_external_orders_on_shop_and_external_id"
~~~

Make sure the chosen columns exist and have the right types, and that existing data already satisfies the invariant before deploying the migration.

## Handle the collision according to the operation

A concurrent insert can be rejected by the database and surface as `ActiveRecord::RecordNotUnique`. For an idempotent import, read the existing row and verify that it represents the intended record. If the payloads differ, expose the discrepancy so it can be investigated. For an interactive form, the useful response may be asking the caller to choose another value.

`create_or_find_by` can be appropriate when the corresponding unique constraint exists. The operation can still fail for other reasons. Handle recovery in a way that respects the transaction and adapter, especially if earlier writes are part of the same business operation.

## Test with two connections

A sequential test with two creates verifies an ordinary duplicate. To exercise the race, use two connections that attempt the insert before either can observe the outcome of the other. Check that one row exists for the business key, that the losing request gets the expected response and that the ERP or another downstream system sees one business effect.

Batching can bound the memory used by an import. Keep the database invariant in place even when the importer changes how it schedules or partitions work.

## Sources

- [Rails Guide to Active Record Validations](https://guides.rubyonrails.org/active_record_validations.html)
- [Rails Guide to Active Record Querying](https://guides.rubyonrails.org/active_record_querying.html)
- [Rails validation methods and concurrency](https://api.rubyonrails.org/classes/ActiveRecord/Validations/ClassMethods.html)
