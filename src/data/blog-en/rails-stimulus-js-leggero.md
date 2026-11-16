Stimulus connects JavaScript to existing HTML through data attributes. It suits local interactions such as an expandable menu, a text counter or copying a value to the clipboard. The HTML declares the controller, its targets and the actions to invoke. The JavaScript implements the behaviour.

```html
<div data-controller="clipboard">
  <label>
    Text to copy
    <input data-clipboard-target="source" value="Hello">
  </label>
  <button type="button" data-action="click->clipboard#copy">Copy</button>
</div>
```

```javascript
// clipboard_controller.js
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["source"];

  copy() {
    return navigator.clipboard.writeText(this.sourceTarget.value);
  }
}
```

The `clipboard` controller receives the click and reads its `source` target. The example assumes the page has clipboard access in a secure context. In an actual form, use the outcome of the Promise to tell the user whether copying succeeded. A second instance of the same controller can work with a different target on the same page.

## Account for changes to the page

Stimulus controllers can connect to markup added later by [Hotwire and Turbo](/blog/rails-hotwire-turbo). Use `connect` to initialise resources tied to an element and `disconnect` to release timers, global listeners or other subscriptions the controller created. A controller instance can connect again, so keep setup and cleanup safe to repeat. Try visiting a Turbo page, leaving it and coming back several times. If one click then causes several responses, inspect resources added on earlier visits.

## Keep business rules in the backend

A Stimulus controller can count characters or show errors near a field. The server should still enforce the rule when handling the submitted data. This keeps the behaviour consistent for users who submit the same operation through another client. If the controller also loads remote data, [Rails caching](/blog/rails-caching-basi) addresses the freshness of that content, while the Stimulus lifecycle controls what happens to the requests and DOM when the element disappears.

## Sources

- [Stimulus Handbook — Introduction](https://stimulus.hotwired.dev/handbook/introduction)
