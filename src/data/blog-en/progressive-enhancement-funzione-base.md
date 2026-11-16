A page can have its layout in place and still be unusable. A button might wait for the JavaScript bundle, a menu might stay closed or a destination might exist only inside a click handler. On a slow connection the visitor can be left waiting even though the page looks ready.

Progressive enhancement starts with a basic behaviour. It adds richer interaction as the required capabilities become available. [React prerendering](/blog/react-prerender-html-metadati) can help by delivering readable HTML in the first response. [Accessible form design](/blog/forza-di-attrito-e-la-ux-dei-form) addresses what the person can do with that HTML.

## Start with an interaction the browser understands

A link to a document can be a normal anchor with a real `href`. JavaScript can add a preview, analytics or a transition when it runs. The browser already knows how to follow the link with a keyboard, copy the address or open it in another tab.

Choose the essentials for the kind of page you are building. A reference article needs readable content and meaningful links. A search form can work through a server endpoint before adding autocomplete, provided that endpoint actually accepts and responds to submissions. The HTML form is one part of the fallback, and the endpoint completes it.

## Try the visitor’s task with a dependency missing

Slow down the bundle and block a nonessential integration during a test. Open a deep link and check what actions are possible. Look for an explanation when a richer feature needs more time or a service that is unavailable. A social widget may have a plain profile link that still meets the need. If the only form submission handler never loads, the user needs a working way to submit or a clear path to recover.

Deciding which tasks have a basic path also makes the JavaScript easier to evaluate. Test those tasks first, then repeat with the enhanced interface available.

## Source

- [MDN on progressive enhancement](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement)
