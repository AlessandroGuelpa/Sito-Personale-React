Sending email, refreshing data from a remote API or processing a file during a request makes the person wait for that work. Rails Active Job provides a common interface for enqueuing tasks. The controller can hand off a launch schedule refresh and return a response while a configured worker processes it later.

The [transactional outbox pattern](/blog/transactional-outbox-invio-erp) covers how to persist the intent to send an event. [Retry backoff and jitter](/blog/retry-backoff-jitter-integrazioni) cover how to space attempts when failures are temporary.

## Enqueue work with perform_later

```ruby
class SyncLaunchesJob < ApplicationJob
  queue_as :default

  def perform
    LaunchLibrary.upcoming.each do |data|
      Launch.upsert(data, unique_by: :external_id)
    end
  end
end

SyncLaunchesJob.perform_later
```

Here `upcoming` returns attributes that include a stable external ID, and the table has a corresponding unique index. The example uses an adapter that allows the `unique_by` option. Enqueuing time, durability and retry behaviour depend on your queue adapter and configuration. Check that a worker is running before treating a successful enqueue as evidence that the schedule has been updated.

## Make retrying the job safe

A job that sends an event to an ERP may stop after the remote call succeeds and before the local record is marked sent. The next attempt can issue the same call again. Use a stable idempotency key or a deduplication mechanism that recognises the same event. For database writes, use the relevant unique constraints to protect against concurrent processing.

Log the resource identifier, attempt and outcome so you can follow the same work across retries. Treat a transient connection problem differently from data a worker cannot process without a correction. Exercise a duplicate execution and a failure midway through the job in tests. Then verify that repeating it reaches a consistent result and that exhausted retries leave enough information to investigate.

## Sources

- [Rails Guides — Active Job basics](https://guides.rubyonrails.org/active_job_basics.html)
