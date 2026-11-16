Hotwire lets a Rails application build many interactions around HTML rendered on the server. Turbo Drive handles navigation, Turbo Frames scope navigation to a portion of the page, and Turbo Streams describe changes to existing elements.

[Stimulus](/blog/rails-stimulus-js-leggero) gives JavaScript tied to those elements predictable setup and cleanup. Time-consuming work can move to a [background job](/blog/rails-background-job-active-job) so rendering an update does not have to wait on a slow external task.

## Scope a section with a frame

A frame can contain a list of launches. A navigation from inside it can load a response with a matching frame ID and replace the frame's contents while keeping the rest of the page.

```erb
<turbo-frame id="launches_frame">
  <div id="launches">
    <%= render @launches %>
  </div>
</turbo-frame>
```

A stream can target the list inside the frame and prepend one rendered item. The following controller action illustrates a successful Turbo Stream response to the submitting browser.

```ruby
def create
  @launch = Launch.create!(launch_params)
  render turbo_stream: turbo_stream.prepend("launches", @launch)
end
```

To update other browsers observing the same list, send a broadcast and give those pages the matching stream subscription. Ordinary form submissions can also have their own HTML response. For validation failures, return a response that shows which fields need attention.

## Test navigation and element lifecycle

Replacing a fragment can remove nodes that third-party scripts still reference. Bind a menu or form helper to the relevant element through a Stimulus controller and clean up listeners when it disconnects. Test a second visit to the page, a failed form submission and links that require full navigation. If a script assumes a single page load or modifies the DOM directly, verify how it behaves when the fragment is replaced. Server-rendered CRUD screens can handle a substantial amount of interaction with these patterns and a small amount of custom JavaScript.

## Sources

- [Turbo Handbook — Introduction](https://turbo.hotwired.dev/handbook/introduction)
