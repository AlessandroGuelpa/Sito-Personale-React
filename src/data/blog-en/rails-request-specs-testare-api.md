An RSpec request spec exercises the contract a client sees. It sends a request through Rails routing, the controller and the application layers behind it, then checks the HTTP response. That makes it useful for verifying status codes, JSON and the effects an endpoint promises.

Start with the behaviour you define in a [Rails API](/blog/rails-api-only-mode). In this example, a GET returns a list of launches and a POST rejects an empty name.

~~~ruby
RSpec.describe "Launches API", type: :request do
  describe "GET /launches" do
    before { create_list(:launch, 3) }

    it "returns 200 and the list as JSON" do
      get "/launches"

      expect(response).to have_http_status(:ok)
      json = JSON.parse(response.body)
      expect(json.size).to eq(3)
      expect(json.first).to include("name", "provider")
    end
  end

  describe "POST /launches" do
    it "rejects invalid input with 422" do
      post "/launches", params: { launch: { name: "" } }
      expect(response).to have_http_status(:unprocessable_entity)
    end
  end
end
~~~

## Assert the response and what happened behind it

An HTTP 201 response is only part of the success contract for a create request. Check the shape of its JSON and verify that the expected rows were persisted. When the endpoint promises an event or another observable side effect, write an assertion for it. For an invalid request, inspect the errors returned to the client and verify that it did not leave partial data behind.

Include missing resources and relevant permission boundaries. For a restricted endpoint, compare an authorised request, an anonymous request and a request from an authenticated user who lacks the permission. This protects behaviour a client relies on even if you refactor the controller or change the way a record is serialised.

## Exercise external failures deliberately

Use stubs for cases such as a timeout or an error from a [service called by Rails](/blog/rails-consumare-api-esterne). That lets the request spec verify the local API response under known conditions. If compatibility with the remote service is critical, run a separate integration check against its contract with controlled data. This keeps routine request specs repeatable while still giving you evidence that the external integration works.

## Source

- [RSpec documentation](https://rspec.info/documentation/)
