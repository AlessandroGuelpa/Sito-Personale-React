A `BiquadFilterNode` shapes the frequency content of a Web Audio signal. A low-pass filter attenuates frequencies above its cutoff, a high-pass filter attenuates those below it, and a band-pass filter favours a range around its centre frequency. Sweeping a resonant low-pass cutoff over a bright oscillator is one way to get a moving acid bass sound.

The input [oscillator waveform](/blog/web-audio-oscillatore-forme-onda) determines which harmonics are available to shape. The [gain and envelope](/blog/web-audio-gainnode-volume-envelope) determine how loudly the filtered result reaches the output.

```javascript
const filter = ctx.createBiquadFilter();
filter.type = "lowpass";
filter.Q.value = 6;

osc.connect(filter);
filter.connect(gain);
gain.connect(ctx.destination);

const now = ctx.currentTime;
filter.frequency.setValueAtTime(800, now);
filter.frequency.linearRampToValueAtTime(3000, now + 1);
```

Here the cutoff moves from 800 Hz to 3 kHz over one second. The low-pass lets progressively more of the upper harmonics through. Set the output gain low when trying a resonant filter, since a high `Q` can create a peak near the cutoff. Filter types use their parameters differently. For instance, the `gain` parameter is relevant to shelving filters such as `lowshelf` and `highshelf`.

## Hear the difference in a controlled comparison

Play a harmonically rich source at a fixed pitch. Switch between low-pass and high-pass while keeping the source and output level controls fixed, then compare what changes as you move the cutoff. Schedule ramps for frequency changes to reduce artefacts that can accompany abrupt jumps.

When combining several filters, listen to the full chain as well as each filter on its own. An `AnalyserNode` can show which regions of the signal change while you automate the cutoff. Its display represents the digital signal at that point in the graph. The sound in the room also depends on your speakers, their settings and the room itself.

## Sources

- [MDN — BiquadFilterNode](https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode)
