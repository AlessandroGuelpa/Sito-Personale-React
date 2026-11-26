A step sequencer reads a repeating pattern. Each step specifies whether it should trigger a sound. The [Web Audio drum machine](/blog/web-audio-drum-machine-browser) produces that sound, while a [lookahead scheduler](/blog/web-audio-metronomo-preciso) places it at the right time on the audio clock.

## Turn beats into seconds

At 100 BPM, a quarter note lasts 0.6 seconds. Four steps per beat makes each step 0.15 seconds. An eight-step pattern at those settings spans two beats. Store the tempo, subdivision and pattern separately so a tempo change can affect playback without moving the musical positions of the hits.

```javascript
const pattern = [true, false, false, true, false, false, true, false];
const bpm = 100;
const stepsPerBeat = 4;
const stepDuration = 60 / bpm / stepsPerBeat;
let step = 0;
let nextTime = ctx.currentTime + 0.05;
let timer;

function schedule() {
  const now = ctx.currentTime;

  while (nextTime < now + 0.1) {
    if (nextTime >= now && pattern[step]) kick(nextTime);
    step = (step + 1) % pattern.length;
    nextTime += stepDuration;
  }

  timer = setTimeout(schedule, 25);
}

schedule();
```

This assumes the audio context is already running and `kick` accepts a time from the audio clock. It advances the playhead past missed steps if the timer wakes late. Add more rows for snare and hi-hat while keeping one shared playhead.

## Define when edits take effect

If a user switches on a cell while its sound is already scheduled, decide whether the edit takes effect on the next unscheduled step or the next loop. Reflect that choice in the grid. A frame callback can paint the current playhead using the audio time. Audio events already placed in the future can stay in time even if a visual frame is missed.

## Rehearse pause and restart

Cancel the scheduling timer and handle notes already queued when stopping. Verify whether the transport resumes from the current step or restarts at the first one. Try slowing the browser and editing a step near the loop boundary. One iteration should still produce each enabled hit at most once.

## Calculate the boundary between events

At 120 BPM a beat lasts half a second and a sixteenth note lasts 0.125 seconds. If the bar starts at currentTime 5.000, schedule the second sixteenth at 5.125. A callback that wakes at 5.090 can still queue it on time. Triggering the note directly when the callback wakes makes that early start part of the rhythm.

To check the scheduler, record each step’s intended time and the time it is queued. In a working lookahead window the latter precedes the former. If events are queued after their intended times, trace the interruption on the thread and decide whether to skip expired steps. Queuing every overdue hit at the same instant can create a sudden cluster.

## Sources

- [MDN — Advanced techniques for Web Audio](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Advanced_techniques)
