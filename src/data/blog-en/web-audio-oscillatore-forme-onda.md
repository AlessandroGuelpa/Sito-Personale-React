An `OscillatorNode` offers four built-in waveforms. Each produces a different set of harmonics, which changes how a note sounds even when its pitch stays constant. [Start an oscillator with AudioContext](/blog/web-audio-primo-oscillatore-audiocontext), then use a [GainNode envelope](/blog/web-audio-gainnode-volume-envelope) to give each note the same attack and release.

```javascript
osc.type = "sine";     // Smooth and pure
osc.type = "square";   // Hollow sound associated with chiptune
osc.type = "sawtooth"; // Bright and rich in harmonics
osc.type = "triangle"; // Softer tone with some upper harmonics
```

## Hear what the harmonics do

An ideal sine wave contains a single frequency. A square wave contains odd harmonics and a sawtooth contains both even and odd harmonics. A triangle wave also has odd harmonics, with their amplitudes falling more quickly than in a square wave. The wider range of harmonics in a sawtooth gives a filter more material to shape. Try it through a low-pass filter for an acid bass sound, or choose a square wave to start exploring chiptune.

## Change one parameter at a time

Make four buttons that start the same pitch with the same short envelope. Give each button a different oscillator type. Start at a low level and listen at similar perceived loudness, since harmonic content can make two waves sound different in level even when the numeric gain matches. Add a low-pass filter and move its cutoff while listening for the higher harmonics fading out.

## Give each note a clear end

An oscillator generates a continuous signal between its scheduled start and stop. Use a `GainNode` to ramp the amplitude up and down so the notes have recognisable beginnings and endings. Schedule the source to stop after its release. If repeated clicks make your demo steadily louder, check whether previous oscillators are still active. A fair comparison needs each test note to play by itself.

To use the same oscillator design in an instrument that plays multiple notes, see [how to manage voices in a polyphonic synth](/blog/web-audio-synth-polifonico).

## Sources

- [MDN — OscillatorNode](https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode)
