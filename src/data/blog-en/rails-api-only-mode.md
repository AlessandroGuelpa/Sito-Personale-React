A Rails application can focus on HTTP endpoints when a separate React frontend or mobile app owns the interface. API-only mode starts with a smaller set of middleware and controller features suitable for that setup.

~~~bash
rails new launch-tracker-api --api
~~~

An illustrative controller returns launch data as JSON:

~~~ruby
class LaunchesController < ApplicationController
  def index
    launches = Launch.upcoming.limit(20)
    render json: launches
  end

  def show
    render json: Launch.find(params[:id])
  end
end
~~~

The frontend can call these endpoints and render the result. This is the kind of boundary used in Launch Tracker, where Rails serves the data and the frontend presents it.

## Specify what the client can depend on

Select the public fields deliberately rather than exposing every column when the model is serialised. Establish the input shape, error format and HTTP status codes for a successful create, a validation failure and a missing resource. Specify which endpoints require authentication and which permissions they enforce. If the service needs cookies or sessions, configure the relevant middleware for that need.

For paginated responses, choose a cursor or page number, a stable order and a limit. Explain how the client knows whether more records are available. If a [call to an external service](/blog/rails-consumare-api-esterne) can time out, define which response the API gives and which errors the client can safely retry.

## Check the contract through Rails

Use [RSpec request specs](/blog/rails-request-specs-testare-api) to exercise routing, parameters and JSON in one place. Test a permitted request, a request without permission and a request with an unexpected parameter. For writes, also check the saved data and any expected effect.

Keep the response shape documented where the client can refer to it. Before changing a field or status, check how the frontend uses it and how existing clients will behave when they see the new response.

## Source

- [Rails Guide to API-only applications](https://guides.rubyonrails.org/api_app.html)
