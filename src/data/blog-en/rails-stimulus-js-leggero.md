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

## Reuse the panel in a product list

Suppose a catalogue shows two products with different delivery estimates. If toggle looks up the paragraph with document.querySelector, clicking the second button can open the first panel on the page. Keep the lookup inside the controller with this.panelTarget and pass the product into the Rails partial. This example assumes a persisted product record whose shipping_estimate returns display text.

```erb
<% panel_id = dom_id(product, :shipping) %>
<section data-controller="disclosure">
  <button type="button" aria-expanded="false"
          aria-controls="<%= panel_id %>"
          data-action="click->disclosure#toggle">Shipping details</button>
  <p id="<%= panel_id %>" hidden data-disclosure-target="panel">
    <%= product.shipping_estimate %>
  </p>
</section>
```

There are two connections here. Stimulus finds the paragraph through its target. The button uses aria-controls to identify the same paragraph by its id. If you copy a fixed id into every card, clicking can still work while the accessibility reference becomes ambiguous. dom_id gives each record a distinct identifier. If the same product appears twice on the page, include a prefix that distinguishes those placements too.

## Turn the second click into a system test

Save this test in test/system/shipping_details_test.rb. It assumes products_path renders at least two cards using the partial above. Provide two products in your test data and use a JavaScript-capable driver in ApplicationSystemTestCase. Run the individual file with `bin/rails test test/system/shipping_details_test.rb`.

```ruby
require "application_system_test_case"

class ShippingDetailsTest < ApplicationSystemTestCase
  test "opening the second card leaves the first one closed" do
    visit products_path
    first_card, second_card = all('[data-controller="disclosure"]', minimum: 2).first(2)

    within(second_card) do
      click_button "Shipping details"
      assert_selector 'button[aria-expanded="true"]'
      assert_selector '[data-disclosure-target="panel"]', visible: true
    end

    within(first_card) do
      assert_selector 'button[aria-expanded="false"]'
      assert_no_selector '[data-disclosure-target="panel"]', visible: true
    end
  end
end
```

Why press the second button? A broken global selector could still pass a test that clicks the first card. This test observes both the selected product and its neighbour. It also checks the button’s exposed state separately from the visibility of the paragraph. If you forget to update aria-expanded, a check that only looks for visible text will still pass.

## Decide what happens before JavaScript loads

The exercise starts with hidden content. If the bundle is slow to load, a shopper can press a button that does nothing yet. When the estimate matters to a purchasing decision, consider a native details element with a summary for a simple disclosure. If the project needs this controller, another option is to render the estimate visible and only reveal the button when Stimulus connects. Disable JavaScript and reload the page. A shopper should still be able to find out when the product will arrive.

## Sources

- [Stimulus — installing](https://stimulus.hotwired.dev/handbook/installing)
- [Stimulus — targets](https://stimulus.hotwired.dev/reference/targets)
- [Stimulus — actions](https://stimulus.hotwired.dev/reference/actions)
- [Rails Guides — System Testing](https://guides.rubyonrails.org/testing.html#system-testing)
