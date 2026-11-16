A browser drum machine can synthesise hits or play audio samples. A kick can start as a sine wave with a fast drop in pitch and amplitude. A hi-hat can use a short burst of high-pass filtered noise. These sounds can be generated without fetching an audio file.

The [step sequencer](/blog/web-audio-sequencer-step) chooses where each trigger lands. A [Web Audio metronome](/blog/web-audio-metronomo-preciso) shows how to schedule it against the audio clock, even if the interface is busy.

## Make a kick with two envelopes

```javascript
function kick(time) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain).connect(ctx.destination);

  osc.frequency.setValueAtTime(150, time);
  osc.frequency.exponentialRampToValueAtTime(50, time + 0.1);
  gain.gain.setValueAtTime(0.2, time);
  gain.gain.exponentialRampToValueAtTime(0.001, time + 0.15);

  osc.start(time);
  osc.stop(time + 0.15);
}
```

The pitch falls from 150 Hz to 50 Hz in a tenth of a second. As the amplitude also drops, the ear hears a short thump. Try changing the pitch drop or fade on its own to hear which part shapes the attack and which part shapes the tail.

## Reuse buffers when playing recorded hits

Load and decode a sample once, and keep the resulting `AudioBuffer`. Create a new `AudioBufferSourceNode` using that buffer for each hit. A source node can start only once, so reusing it for the next step would fail. Keep the pattern itself separate from the scheduled sound events so you can decide when a step edit takes effect.

## Test stop and check the mix

Confirm that samples are ready before starting a pattern and that stop handles sounds already scheduled as well as the timer. Play the kick, snare and hi-hat together and watch the level at the final output. Several individually quiet sounds can add up to a stronger peak. Make the final balance with the whole pattern playing.

## Sources

- [MDN — AudioBufferSourceNode](https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode)
