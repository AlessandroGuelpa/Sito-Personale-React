A browser timer may run late when the main thread is busy. For a steady metronome, schedule each click ahead of time on the `AudioContext` clock. A JavaScript timer periodically looks at that clock and queues upcoming beats. The same approach supports a [Web Audio drum machine](/blog/web-audio-drum-machine-browser) or a [step sequencer](/blog/web-audio-sequencer-step).

## Schedule a short window of future beats

Assume `ctx` is running after a user gesture and `output` is a low-level gain connected to its destination.

```javascript
const beatLength = 0.5; // 120 BPM
let nextBeat = ctx.currentTime + 0.05;
let timer;

function schedule() {
  const now = ctx.currentTime;
  if (nextBeat < now) {
    nextBeat += Math.ceil((now - nextBeat) / beatLength) * beatLength;
  }

  while (nextBeat < now + 0.1) {
    const osc = ctx.createOscillator();
    osc.frequency.value = 1000;
    osc.connect(output);
    osc.start(nextBeat);
    osc.stop(nextBeat + 0.03);
    nextBeat += beatLength;
  }

  timer = setTimeout(schedule, 25);
}

schedule();
```

The timer wakes the scheduler about every 25 ms. The sound engine plays the events at the scheduled times from the 100 ms lookahead window. If the tab is paused long enough for that window to empty, the example skips past beats on the existing grid. It avoids playing all the missed clicks at once during recovery.

## Test changes while the metronome runs

Slow the interface down in DevTools and compare the visual indicator with the sound. The animation can lose a frame while already scheduled beats remain in time. Try an inactive tab as well, since browser throttling can leave no events queued if the timer is delayed beyond the lookahead. A longer window tolerates more delay, while a shorter one lets tempo changes reach playback sooner.

Decide which beat should take on a new tempo, especially if the next beat has already been scheduled. To stop, cancel the timer and account for the clicks already queued, for example by silencing the output or stopping retained sources. Start the next run from an explicit position on the audio clock. Verify that stopping and restarting never creates a second scheduler.

## Sources

- [MDN — BaseAudioContext.currentTime](https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/currentTime)
