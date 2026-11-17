A polyphonic synthesiser can play several notes at once. Each voice can use its own oscillator and [GainNode envelope](/blog/web-audio-gainnode-volume-envelope). [Web Audio filters](/blog/web-audio-biquadfilter) can shape individual voices or the mix. Keep track of which source belongs to each held note so a release affects the intended one.

## Give each note a start and a release

This example assumes one keyboard channel, a running audio context and support for `cancelAndHoldAtTime`. It keeps at most eight voices active, including voices that are fading out.

```javascript
const held = new Map();
let activeVoices = 0;

function noteOn(midi) {
  if (held.has(midi) || activeVoices >= 8) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.frequency.value = 440 * 2 ** ((midi - 69) / 12);
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(0.08, now + 0.02);
  osc.connect(gain).connect(ctx.destination);
  osc.onended = () => {
    activeVoices--;
    osc.disconnect();
    gain.disconnect();
  };

  activeVoices++;
  held.set(midi, { osc, gain });
  osc.start(now);
}

function noteOff(midi) {
  const voice = held.get(midi);
  if (!voice) return;

  const now = ctx.currentTime;
  voice.gain.gain.cancelAndHoldAtTime(now);
  voice.gain.gain.linearRampToValueAtTime(0, now + 0.1);
  voice.osc.stop(now + 0.1);
  held.delete(midi);
}
```

MIDI note 69 maps to A4 at 440 Hz. A press creates a voice and a short attack. Release holds the gain at its current level, then fades it out before stopping the oscillator. Removing the note from the held map lets a second press start a new voice while the earlier tail is fading.

## Choose what happens when the instrument fills up

The example skips a new press at the limit. Another design might release the oldest or quietest voice to make room. Count tails when checking the actual load and mix level. Several quiet voices can still add up to a large peak. If several devices participate, track notes by an identifier that includes the source and channel as well as pitch.

## Test the releases and disconnection path

Try quick repeated presses, a release during attack and a held note when the MIDI controller disconnects. Give the application a way to release outstanding notes after a disconnect or preset change. If you implement a sustain pedal, decide which released keys remain audible and what happens when the pedal goes up. Listen to the full chord and confirm that voices are removed after their tails end.

## Sources

- [MDN — Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
