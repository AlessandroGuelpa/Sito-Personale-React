A Rails backend can read an external API, turn its response into a shape the application understands and serve the result from its own database. A launch tracker can use Launch Library 2 as its source and expose the fields it needs for the schedule. Treat the network call as a separate failure point from the controller that serves the schedule.

Use [Rails request specs](/blog/rails-request-specs-testare-api) to check what the controller returns to a client, and [Active Job](/blog/rails-background-job-active-job) to run a refresh away from the request path.

## Fetch a page and normalise the fields

```ruby
require "faraday"
require "json"

class LaunchLibrary
  BASE = "https://ll.thespacedevs.com/2.2.0"

  def self.upcoming
    response = Faraday.get("#{BASE}/launch/upcoming/", { limit: 20 }) do |request|
      request.options.open_timeout = 3
      request.options.timeout = 8
    end
    raise "Launch Library HTTP #{response.status}" unless response.success?

    JSON.parse(response.body).fetch("results").map do |launch|
      {
        external_id: launch.fetch("id"),
        name: launch.fetch("name"),
        provider: launch.dig("launch_service_provider", "name"),
        net: launch["net"]
      }
    end
  end
end
```

The example requests a single page. It selects a stable external identifier along with the launch name, provider and scheduled time. The provider may be absent, so `dig` allows that field to be empty. Check the response structure before publishing it and account for pagination if the job needs a larger dataset.

## Keep the previous successful refresh available

A background job can validate the result and persist it before the site serves it. Record when a refresh succeeds so the application can report stale data if the upstream service is unavailable. Decide how to handle optional fields and guard against overwriting valid values with missing values from a partial response.

Exercise a valid list, a valid empty list and a `429` response as distinct cases. A timeout or malformed payload should leave the previous schedule intact. Retry transient failures with a bounded delay and respect rate limits. Configuration errors or an invalid response contract usually need investigation before another attempt will help.

## Sources

- [Rails Guides — Active Job basics](https://guides.rubyonrails.org/active_job_basics.html)
