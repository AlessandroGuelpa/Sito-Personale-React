An Active Record association describes how two models relate. Rails then gives you methods for moving between the records and for creating a child through its parent. The model declarations should agree with the database columns and constraints. If `where`, `find` and model persistence are unfamiliar, start with the [Active Record models and queries tutorial](/blog/rails-activerecord-le-basi) before defining relationships.

~~~ruby
class Provider < ApplicationRecord
  has_many :launches, dependent: :destroy
end

class Launch < ApplicationRecord
  belongs_to :provider
end

spacex = Provider.find_by(name: "SpaceX")
spacex.launches.count
launch.provider.name
spacex.launches.create(name: "Starship")
~~~

`belongs_to :provider` uses the `provider_id` on the launch records. A migration can add the reference with `t.references :provider`. Use [Rails migrations](/blog/rails-migrazioni-versionare-il-database) to decide on the foreign key and nullability based on the data you already have and the relationship the application requires.

## Choose what happens to child records

Consider an order with several line items. The `has_many` association provides access to those rows. The product still needs a rule for what happens when an order is removed. Some systems preserve orders and their lines for recordkeeping. In the example, `dependent: :destroy` tells Rails to destroy a provider’s launches when that provider is destroyed. Use it when that outcome matches the lifetime of those records.

The inverse association and its validation describe expectations in the application. Database null constraints and foreign keys enforce the relationships the database should accept. Check older rows as well when tightening those rules.

## Inspect a list and a deletion separately

An association lookup inside a list can create an [N+1 query pattern](/blog/rails-problema-n-piu-1). Try loading the needed associations up front and measure both the SQL and the number of records materialised. For deletion, create an order with two lines, attempt the operation and check which rows remain. The result should match both the application’s policy and the database constraint, regardless of which code path called it.

## Source

- [Rails Guide to Active Record Associations](https://guides.rubyonrails.org/association_basics.html)
