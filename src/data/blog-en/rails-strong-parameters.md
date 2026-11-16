A form submission reaches Rails as request data. Strong Parameters makes the controller specify which attributes may be passed to a model for mass assignment. In this example, the create action accepts a launch name, provider and scheduled time.

```ruby
class LaunchesController < ApplicationController
  def create
    @launch = Launch.create!(launch_params)
    redirect_to @launch
  end

  private

  def launch_params
    params.require(:launch).permit(:name, :provider, :net)
  end
end
```

`require(:launch)` expects the launch payload and `permit` limits which attributes the model receives. Keep the allowed fields specific to each operation. If an attribute controls ownership or access, set it from trusted application state and give changes to that attribute a separate authorisation check.

For example, a launch may inherit its account from the current workspace. Set that association on the server when creating the record so the form does not need to submit an account ID.

## Decide which record the caller may change

A profile form might allow someone to update their address and phone number. The controller still needs to select a profile they are allowed to edit. [RESTful routing](/blog/rails-routing-restful) maps the URL to an action. Authorisation decides whether that action is allowed on the requested record, and Strong Parameters defines which fields it accepts. [Active Record validations and database constraints](/blog/rails-validazioni-dati-puliti) protect the stored values.

## Verify the full input contract

Use request tests that confirm accepted fields are written, sensitive fields remain protected and a caller outside the allowed scope cannot change the record. If the form contains nested input, permit the expected structure explicitly and test how the controller handles missing or unexpected keys. Verify how a missing top-level `launch` key is reported so clients can distinguish a malformed request from a model validation failure. Together these cases exercise the actual endpoint, including the relationship between input filtering, authorisation and persistence.

## Sources

- [Rails Guides — Action Controller overview](https://guides.rubyonrails.org/action_controller_overview.html)
