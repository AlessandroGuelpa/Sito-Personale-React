Switching an oscillator on or off at a nonzero point in the waveform can introduce an audible click. A `GainNode` multiplies the signal by a value you can automate over time. An amplitude envelope uses that control to shape how the note begins, holds and ends.

It works with any of the [oscillator waveforms](/blog/web-audio-oscillatore-forme-onda). A [biquad filter](/blog/web-audio-biquadfilter) can separately alter the balance of harmonics you hear.

## Give the note a short fade in and out

This example assumes an existing context and a fresh oscillator. It ramps up over 20 milliseconds and fades to silence before stopping the source.

```javascript
const gain = ctx.createGain();
osc.connect(gain);
gain.connect(ctx.destination);

const now = ctx.currentTime;
gain.gain.setValueAtTime(0, now);
gain.gain.linearRampToValueAtTime(0.15, now + 0.02);
gain.gain.linearRampToValueAtTime(0, now + 0.5);
osc.start(now);
osc.stop(now + 0.5);
```

The example contains an attack and a fade. A full ADSR envelope also includes decay to a sustain level, a held period at that level, and release after the note ends. Schedule those points on the gain's `AudioParam` using the audio clock. Methods such as `setTargetAtTime` also let you choose a more gradual curve for a transition.

## Listen for overlap and check the mix

Play two notes and change only the release time. A short release gives clear separation, while a longer release can let the tail of one note overlap the next. A kick and a pad typically need different envelope times. Check how the release behaves with the actual rhythm you intend to play.

Gain is a linear amplitude multiplier. Perceived loudness and decibels follow different scales. When several moderate voices play at once, their amplitudes add and the mix can clip. Leave headroom at the output and compare both single notes and overlapping notes before choosing the final level.

## Sources

- [MDN — GainNode](https://developer.mozilla.org/en-US/docs/Web/API/GainNode)
