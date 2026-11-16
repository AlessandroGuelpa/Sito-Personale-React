A Rails operation sometimes involves several models and a remote system. A service object is a plain Ruby class that can show the full operation and give callers a focused interface. It can be called from a [Rails MVC controller](/blog/rails-mvc-in-tre-minuti) or from a job, with the same rules about input and failure.

```ruby
class SyncLaunches
  def initialize(source: LaunchLibrary)
    @source = source
  end

  def call
    @source.upcoming.map do |data|
      Launch.upsert(data, unique_by: :external_id)
    end
  end
end
```

The example accepts a source dependency and expects launch attributes with an external ID. The database needs a unique index and an adapter that supports this form of `upsert`. The constructor makes it possible to use a fake source when testing. The production caller can use `SyncLaunches.new.call` with the default source.

## Give the caller an explicit result

Decide whether a sync returns a count, a list of updated records or a result that describes skipped records. Decide how the caller learns about a failure. A method called `call` can have any of those contracts, so make the useful result and failure path visible to the code that uses the service.

## Draw the transaction around effects you can control

A slow API call inside a database transaction can make it hold locks longer. Calling the service first can leave a remote effect that persists when the database write fails. Identify which system owns each effect and decide how to resume after the process stops partway through. The [transactional outbox](/blog/transactional-outbox-invio-erp) is an option when a recorded database change must eventually produce a corresponding remote event.

Test valid data, an upstream error and a persistence failure separately. If some records may be written before another fails, make the expected retry behaviour part of the test. Those decisions make the workflow clearer to callers and easier to change later.

## Sources

- [Rails Guides — Active Record callbacks](https://guides.rubyonrails.org/active_record_callbacks.html)
