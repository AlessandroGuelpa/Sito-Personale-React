On a product page, a shopper should be able to reveal shipping times with a button. Rails has already sent the delivery estimate in the HTML. Stimulus handles the interaction and keeps the button’s expanded state available to screen readers.

## 1. Generate a controller in Rails

Start with a working ERB page in a Rails app that already has stimulus-rails configured. From the project root, run `bin/rails generate stimulus disclosure`. Open the generated file and replace its contents with this controller.

```javascript
// app/javascript/controllers/disclosure_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["panel"]

  toggle(event) {
    const panel = this.panelTarget
    panel.hidden = !panel.hidden
    event.currentTarget.setAttribute("aria-expanded", String(!panel.hidden))
  }
}
```

## 2. Connect the button to the panel

Paste this markup into your view, open the page in a browser and press the button twice. The first click reveals the delivery estimate. The second hides it again. You can also Tab to the button and activate it with Enter or Space.

```html
<section data-controller="disclosure">
  <button type="button" aria-expanded="false"
          data-action="click->disclosure#toggle">Shipping details</button>
  <p hidden data-disclosure-target="panel">Delivery in two days.</p>
</section>
```

## 3. Trace a click through the controller

The data-controller attribute attaches disclosure to the section. The action on the button names the event to listen for and the method to call. Inside that method, `this.panelTarget` finds the paragraph marked as panel. The browser updates its visibility and the button exposes the new state through aria-expanded.

Duplicate the entire section and open the second panel. The first should stay closed because each section gets its own controller instance. This is a quick check before using the component in a list of products.

## If the button does nothing

Temporarily add `connect() { console.debug("disclosure connected") }` to the class and reload. If the message is missing, check that the JavaScript loaded and that the filename matches the identifier in the HTML. If the message appears but clicking produces a missing target error, inspect the rendered paragraph. It should sit inside the section and carry the same target name as the controller declaration.

When a [Turbo Frame](/blog/rails-hotwire-turbo) replaces the panel, its lifecycle matters again. The [Stimulus best practices guide](/blog/rails-stimulus-buone-pratiche) shows how to check what happens to timers and listeners across visits.

## Sources

- [Stimulus — installing](https://stimulus.hotwired.dev/handbook/installing)
- [Stimulus — targets](https://stimulus.hotwired.dev/reference/targets)
- [Stimulus — actions](https://stimulus.hotwired.dev/reference/actions)
