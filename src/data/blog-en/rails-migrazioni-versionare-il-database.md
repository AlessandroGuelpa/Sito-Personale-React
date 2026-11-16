A Rails migration is a versioned Ruby file that describes a change to the database schema. It gives the team a shared history of how the schema [queried by Active Record](/blog/rails-activerecord-le-basi) evolved. When a migration adds a foreign key or a new constraint, check whether the database change matches the [Rails association](/blog/rails-associazioni-has-many-belongs-to) that relies on it.

```ruby
class CreateLaunches < ActiveRecord::Migration[7.1]
  def change
    create_table :launches do |t|
      t.string :name, null: false
      t.string :provider
      t.datetime :net       # No Earlier Than
      t.timestamps
    end
    add_index :launches, :provider
  end
end
```

Run `bin/rails db:migrate` to create the table. Rails can infer the inverse of these operations when you run `bin/rails db:rollback`, which will drop the table and its data. Some migrations require an explicit reversal and some destructive changes cannot recover old data. Once a migration has run in production, add a new migration for further changes so the recorded history remains accurate.

## Keep old and new application versions compatible

Renaming a column can break the version still serving traffic while a deploy rolls out. One gradual approach is to add the replacement field first, update the code to write it and backfill existing records. Switch reads once the data is ready. Remove the original field after all versions that depend on it have been retired. Plan the order of application and database changes together.

## Test against a representative table

An index or a new constraint can take time on a large table and may restrict concurrent access. Check the behaviour for your database and data volume. Run the migration in a representative environment, verify both application versions can work during the transition, and rehearse the recovery path. An application rollback leaves database changes in place until you explicitly reverse them or deploy a compatible fix.

## Sources

- [Rails Guides — Active Record migrations](https://guides.rubyonrails.org/active_record_migrations.html)
