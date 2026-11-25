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

## A confirmation reappears when you press Back

After an address update, Rails displays a confirmation. Visit another page and press Back. If Turbo restores a copy of the previous page, you can see “Address saved” even though you never submitted a form on the way back. Clearing a timer in disconnect solves a different problem. The visible message was already present in the HTML Turbo copied.

For a wholly transient notice, add `data-turbo-temporary` to its container. Turbo removes it before caching the page. If the container needs to stay available for future messages, hide the text when the page is about to be copied. This controller listens for turbo:before-cache on the document so it can handle the notification before the snapshot is taken.

```html
<div data-controller="notice"
     data-action="turbo:before-cache@document->notice#dismiss">
  <p data-notice-target="message">Address saved</p>
</div>
```

```javascript
// app/javascript/controllers/notice_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["message"]

  dismiss() {
    this.messageTarget.hidden = true
  }
}
```

To verify the result, follow an internal link and use the browser’s Back button. A full reload would issue a fresh request and exercise a different path. Check that the confirmation is visible after saving, disappears on restoration, and that editing the address again can still produce a fresh message.

## Diagnose a click that calls the same method twice

Open the console and put a counter at the start of the method invoked by the button. If the first click already counts twice after a full reload, inspect the button and its ancestors. The same event can bubble up through the DOM and encounter two actions. Also check whether connect manually registers a click listener for an event that the markup already routes to the same method.

If the counter advances once on the first visit, twice on the second and three times on the third, inspect listeners added to window or document. Calling bind creates a new function object each time. Passing a second call to bind during removal leaves the original callback registered. When you need a manual listener, create the bound callback once in initialize, register it in connect and pass that same reference to removeEventListener in disconnect. Make three visits starting from a clean reload. Each click should now advance the counter by one.

## Choose where state belongs

For a catalogue filter, ask which URL a shopper should be able to share. If opening the link should restore the selected size, put the size in the request parameters and let Rails reconstruct the filter. If all you need is to remember which button opened a menu so you can return focus to it, an instance property is enough while the component is mounted. That choice gives you a concrete expectation to test when a navigation creates a fresh controller.

## Sources

- [Stimulus — lifecycle callbacks](https://stimulus.hotwired.dev/reference/lifecycle-callbacks)
- [Stimulus — actions](https://stimulus.hotwired.dev/reference/actions)
- [Turbo Handbook — Building Your Turbo Application](https://turbo.hotwired.dev/handbook/building)
