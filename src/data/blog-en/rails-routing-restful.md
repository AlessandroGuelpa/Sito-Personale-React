Rails can generate the conventional routes for a resource from a single declaration. Each route pairs an HTTP method and a path with a controller action. For a launch schedule, one declaration gives you routes for listing, viewing, creating, editing and deleting launches.

```ruby
# config/routes.rb
resources :launches
```

```text
GET         /launches          index
GET         /launches/new      new
POST        /launches          create
GET         /launches/:id      show
GET         /launches/:id/edit edit
PATCH/PUT   /launches/:id      update
DELETE      /launches/:id      destroy
```

The listing and creation actions share a path and use different methods. The same holds for viewing, updating and deleting a single launch. Inspect the generated map with `bin/rails routes` to see the names and controller actions as well as the paths.

## Expose the actions the application uses

For a public, read-only schedule, `resources :launches, only: [:index, :show]` expresses the contract without creating write routes. Nested resources can show a genuine relationship, such as launches belonging to a provider. Keep nesting shallow enough that each path clearly identifies the record required by the action.

Use a member route for an operation tied to one record and a collection route for a group operation that needs no individual ID. Check the order when adding custom paths near a general `:id` route, especially if a fixed word could also look like a record identifier.

## Test routing and what happens after it

A route chooses how to reach a controller. Access rules still determine who may use that action, and [Strong Parameters](/blog/rails-strong-parameters) controls which input fields the controller assigns. [Rails request specs](/blog/rails-request-specs-testare-api) can distinguish the wrong method, a recognised route with a missing record, and a caller without permission. Include a successful example so the expected status and representation remain clear.

## Sources

- [Rails Guides — Routing](https://guides.rubyonrails.org/routing.html)
