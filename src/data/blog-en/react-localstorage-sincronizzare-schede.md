Open the same dashboard in two tabs. Turn on compact view in the first tab and reload it. The dashboard remembers your choice. In the second tab, which was already open, the rows still have their original spacing. The write to localStorage succeeded. The second interface needs to read the value again.

## One value, two notifications

For a preference shared across tabs on the same origin, localStorage can hold the current value. When a write actually changes the contents, the native `storage` event reaches the other documents that share the storage area. The tab that made the write needs its own notification. The guide to [how localStorage persists data and where its limits are](/blog/javascript-localstorage-persistenza) explains which kinds of data belong there.

In React, `useSyncExternalStore` separates subscription from reading. The subscription tells React that something may have changed. The snapshot reader returns the current value. For table density, the snapshot can be a string that stays stable while the setting is unchanged. Parsing a JSON object on every read would create a new reference even when the underlying data was identical. In that case, cache an immutable snapshot.

## Compact view in two tabs

Suppose the `dashboard:density` key accepts two values, `comfortable` and `compact`. The reader returns `compact` only when it finds that exact value. A missing key or an unrecognised value falls back to `comfortable`. Both buttons call the same write function, which saves the string and then emits a dedicated event in the current tab. If the write fails, show a message next to the control and keep displaying the last readable preference.

The subscription listens for both that local event and the native `storage` event. For the native event, check that the storage area is localStorage and that the key is either the density key or `null`, as it is after `clear()`. When a notification arrives, read the current snapshot. Another tab may have written a newer value between the change that triggered the notification and the moment you handle it. Return a cleanup function that removes both listeners.

## Three checks before reusing the pattern

Open two tabs on the same origin and change the density in the first. Confirm that both tabs update, then remove the key in the second and check that both return to the default. In a test environment, repeat the check by clearing the entire storage area. That last step catches a filter that accepts only the exact key name.

If the dashboard renders HTML on the server, use the same initial snapshot on the server and during hydration, such as `comfortable`. React can then read the browser value. Reload with `compact` already saved and see whether the change in spacing after hydration is noticeable.

Displaying the last saved value works for a binary preference. Before using the same pattern for drafts or data editable in multiple tabs, decide how to preserve concurrent edits to the same content. The notification updates the interface. Resolving conflicting edits needs its own rule.

## Sources

- [React — useSyncExternalStore](https://react.dev/reference/react/useSyncExternalStore)
- [WHATWG HTML Standard — Web storage](https://html.spec.whatwg.org/multipage/webstorage.html)
