An input, scroll or resize event can fire many times per second. If every event starts a calculation or network request, the application can repeat work before the person using it has finished the gesture. Debounce and throttle control when that work runs.

## Debounce when you want to wait for a pause

A trailing debounce resets the timer whenever the event fires again. The function runs after the event stream has been quiet for the chosen delay. In the example, the search handler gets the last event in a burst once there has been a 300 ms pause.

~~~javascript
function debounce(fn, ms) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}

input.addEventListener("input", debounce(search, 300));
~~~

Choose the delay by trying the control at realistic typing speeds. A very short delay can still start a request between keystrokes. A long delay can make feedback feel slow even on a fast connection.

## Throttle when you want periodic updates

A throttle limits the handler to at most one execution in a time interval. That can suit a scroll listener that needs to update while the gesture is still happening. For visual work tied to the next paint, consider `requestAnimationFrame`. Where the question is whether an element has entered the viewport, `IntersectionObserver` can avoid doing that check on every scroll event. A [Web Worker](/blog/javascript-web-workers) can take suitable expensive computation off the main thread.

## Test ordering as well as request volume

Imagine a person pauses after typing “rea”, then types “react”. Both queries can still go out. If the first request is slower, it can finish after the second. Use [cancellation or a request identity check](/blog/fetch-abortcontroller-risposte-obsolete) to keep the result attached to the current query.

Use DevTools to inspect how many requests run, then repeat with simulated network delay. Verify that the search shows the latest result and that the scroll-driven control updates at an appropriate rate while you move.

## Source

- [MDN requestAnimationFrame reference](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame)
