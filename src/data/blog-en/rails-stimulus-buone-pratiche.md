A clock in a page header can look right while it leaks resources. After a Turbo visit the new header displays the correct time, yet the previous timer keeps updating an element nobody sees. To catch the problem, watch what happens after leaving the page. For the initial wiring between HTML and JavaScript, start with the [Rails Stimulus tutorial](/blog/rails-stimulus-js-leggero).

## Give each timer the lifetime of its element

Generate the controller with `bin/rails generate stimulus clock` in a Rails project already configured with Stimulus. Put `<span data-controller="clock"></span>` in the view. The first update should happen as soon as the element appears, even though the next interval will only fire a second later.

```javascript
// app/javascript/controllers/clock_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.render()
    this.timer = window.setInterval(() => this.render(), 1000)
  }

  disconnect() {
    window.clearInterval(this.timer)
  }

  render() {
    this.element.textContent = new Date().toLocaleTimeString()
  }
}
```

Keep the interval handle on the instance. When two clocks share a page, each controller can stop its own timer. A module-level variable would be overwritten by the second clock, so removing the first one could stop the clock that is still visible.

## Let Stimulus manage events declared in the markup

To close a panel with Escape, add `data-action="keydown.esc@window->panel#close"` to the element of a panel controller that implements close. Stimulus manages the binding as the element enters and leaves the document. The choice of window matters. With two panels open, both receive Escape. If only the panel containing focus should close, use a local action and check the behaviour while navigating with the keyboard.

## Reproduce the problem across a Turbo visit

Temporarily put `console.count("clock render")` inside render. Open a page with a single clock, wait a few seconds and follow a Turbo link to a view without clocks. The counter should stop. Go back and verify that it resumes at one update per second. Repeat with two clocks and remove one using the browser’s developer tools. The remaining clock should keep ticking.

Finally, distinguish two cases. If you reinsert the same DOM node after Stimulus has observed its removal, the same controller instance can reconnect. When a server delivers fresh HTML for a [Turbo Frame](/blog/rails-hotwire-turbo), the new node can carry the same id and receive a different instance. Keep only state you can reconstruct when the new element appears in controller properties.

## Sources

- [Stimulus — lifecycle callbacks](https://stimulus.hotwired.dev/reference/lifecycle-callbacks)
- [Stimulus — actions](https://stimulus.hotwired.dev/reference/actions)
