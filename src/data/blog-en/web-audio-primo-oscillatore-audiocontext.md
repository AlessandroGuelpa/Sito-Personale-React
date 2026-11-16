The Web Audio API can generate sound without a library or audio file. Start with an `AudioContext`, which owns the audio graph and provides the clock used to schedule changes. An `OscillatorNode` generates a tone, a `GainNode` controls its level, and the context's destination sends it to the selected output.

Once you can hear a note, try the other [oscillator waveforms](/blog/web-audio-oscillatore-forme-onda) or add a [GainNode envelope](/blog/web-audio-gainnode-volume-envelope) to shape the attack and release.

## Play a tone from a user gesture

Create the context on your first button click and reuse it on later clicks. Call this function from the button's click handler. It starts a sine wave at A4 and schedules it to stop after one second.

```javascript
let ctx;

async function playTone() {
  ctx ??= new AudioContext();
  if (ctx.state === "suspended") await ctx.resume();

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "sine";
  osc.frequency.value = 440;
  gain.gain.value = 0.08;
  osc.connect(gain).connect(ctx.destination);

  const start = ctx.currentTime;
  osc.start(start);
  osc.stop(start + 1);
  osc.onended = () => {
    osc.disconnect();
    gain.disconnect();
  };
}
```

Browsers can keep audio suspended until the user interacts with the page, so attach playback to a deliberate action. Start with a low gain when testing an unfamiliar output device. The oscillator can only start once. Create a fresh source node for the next note and connect it to the existing context.

## Trace the signal if you hear nothing

Check `ctx.state` before changing the oscillator frequency. If the context is running, trace the connections in order from oscillator to gain to destination. Check the scheduled start and stop against `currentTime`, which uses seconds. Play a second note and confirm that it still works after the first oscillator has ended. If rapid clicks make the output louder, several sources may overlap before their scheduled stop times. Reuse the context across the page's playback controls and close it when the audio tool is finished.

## Sources

- [MDN — AudioContext](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext)
