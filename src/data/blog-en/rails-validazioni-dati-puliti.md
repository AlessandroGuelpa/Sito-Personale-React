An Active Record validation checks an application rule before saving a model. It gives the caller feedback about missing values, invalid states or a value that already exists. A database constraint can enforce rules that must hold across concurrent requests and different code paths.

~~~ruby
class Launch < ApplicationRecord
  validates :name, presence: true
  validates :name, uniqueness: true
  validates :provider, presence: true
  validates :status, inclusion: { in: %w[scheduled success failure] }
end

launch = Launch.new
launch.save                  # false when validation fails
launch.errors.full_messages  # e.g. ["Name can't be blank", ...]
launch.save!                 # raises if validation fails
~~~

Use the model’s errors to explain the invalid input to the caller. When a rule is important to the database, decide which additional constraint represents it. Presence, uniqueness and the allowed values for a status can require different checks.

## Enforce uniqueness across concurrent writes

Two processes can look up the same identifier at the same time. Both can pass the application validation before either insert is visible. A [unique database index for concurrent writes](/blog/rails-unicita-database-concorrenza) makes the constraint hold while the requests overlap. Keep the validation for useful feedback and handle the database error for a race that the validation could not observe.

For optional values, check the database’s treatment of nulls and whether the key is scoped to another field such as a shop. The constraint should express the domain rule you actually want.

## Check existing data and test the failure path

Before applying a unique index to a populated table, look for historical duplicates and decide how to resolve them. Plan the schema change through [Rails migrations](/blog/rails-migrazioni-versionare-il-database) with the data already in production in mind.

Test missing and blank values, then exercise the duplicate write with two simultaneous requests. Check both the rows that persist and the error the caller receives. If an operation also writes other data in a transaction, verify that a failed write leaves the transaction in the expected state.

## Source

- [Rails Guide to Active Record Validations](https://guides.rubyonrails.org/active_record_validations.html)
