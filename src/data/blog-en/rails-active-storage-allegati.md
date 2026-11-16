Active Storage links uploaded files to Rails records. Use `has_one_attached` for a single logo or avatar and `has_many_attached` for a collection. The database stores blob metadata and associations. The storage service holds the contents, whether the application uses local disk in development or an object store in production.

```ruby
class Provider < ApplicationRecord
  has_one_attached :logo
end

# Attach an upload after validation and authorisation.
provider.logo.attach(uploaded_logo)
```

```erb
<% if provider.logo.attached? %>
  <%= image_tag provider.logo.variant(resize_to_limit: [200, 200]) %>
<% end %>
```

This example assumes the attachment is an image and your application has an image processor configured. A variant can be generated on demand and reused when requested again. More expensive processing may fit an [Active Job](/blog/rails-background-job-active-job). When changing attachment relationships or metadata, plan [database migrations](/blog/rails-migrazioni-versionare-il-database) around the files already in use.

## Check the upload before serving it

A filename or extension can disagree with the actual file contents. Decide which types and sizes the application accepts, and verify that an uploaded file fits those rules. Put limits on expensive operations such as image resizing. Whether untrusted files need scanning depends on how they are processed and who can receive them.

For private documents, verify the policy that controls who may reach the original file and any generated previews. Check permissions for attaching, downloading and removing files. Use trusted record associations or storage identifiers to find the attachment.

## Test valid files, failures and removal

Exercise a valid upload, a file beyond the allowed size and a download by someone outside the permitted scope. Check how the app behaves if a variant cannot be generated. Decide when to purge blobs that are no longer attached and give incomplete uploads time to finish before treating them as orphaned. When a record disappears, verify the outcome for both the database association and the stored object.

## Sources

- [Rails Guides — Active Storage overview](https://guides.rubyonrails.org/active_storage_overview.html)
