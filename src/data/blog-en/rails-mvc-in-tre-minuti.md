Rails organises a web request around the Model–View–Controller pattern. Models represent application data and domain rules, controllers coordinate the HTTP request, and views render the result. These responsibilities live in `app/models`, `app/controllers` and `app/views` in a conventional Rails project.

One route might display the next ten launches. The controller asks the model for the relevant records and exposes them to the view.

```ruby
class LaunchesController < ApplicationController
  def index
    @launches = Launch.upcoming.limit(10)
  end
end
```

This assumes the model defines an `upcoming` scope that filters and orders the records. Rails can then render the `index` template, which decides how to present the launches. An [API-only application](/blog/rails-api-only-mode) may serialise the same data to JSON, while the rules about which launches qualify can stay in the domain.

## Separate the HTTP request from the operation

An orders page makes the distinction concrete. The controller checks which records the current user may see and selects the response. The model or a query encapsulates the rules for finding those records. The view turns them into a readable page, with choices such as how to display an empty result.

If a request starts a process involving several models or external calls, a [service object with a testable interface](/blog/rails-service-objects) can give that process a clear home. Define what it receives, what it returns and how it reports a failure before deciding how the controller will call it.

## Test what each part owns

Use an HTTP test to assert the status, permissions and representation. Test domain rules independently if they also apply when a job or another controller runs the same operation. If changing a display format breaks a business-rule test, or changing a domain rule requires building an HTTP request, inspect where responsibilities have become intertwined.

## Sources

- [Rails Guides — Getting started](https://guides.rubyonrails.org/getting_started.html)
