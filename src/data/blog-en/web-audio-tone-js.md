Tone.js builds musical abstractions on Web Audio. A synth can schedule a note in musical units, and the transport lets instruments and sequences share a tempo. Compare that with a [step sequencer written directly with Web Audio](/blog/web-audio-sequencer-step) or a [generative browser audio pattern](/blog/web-audio-generative-browser), where the application chooses more of the scheduling details itself.

## Start a sequence from a user action

```javascript
import * as Tone from "tone";

async function playSequence() {
  await Tone.start();
  const transport = Tone.getTransport();
  const synth = new Tone.PolySynth(Tone.Synth).toDestination();
  synth.volume.value = -18;

  const sequence = new Tone.Sequence((time, note) => {
    synth.triggerAttackRelease(note, "8n", time);
  }, ["C4", "E4", "G4", "B4"], "4n");

  transport.bpm.value = 120;
  sequence.start(0);
  transport.start();

  return () => {
    sequence.dispose();
    synth.dispose();
    transport.stop();
  };
}
```

Call this from the play button and keep the returned function for stopping the standalone demo. Wait for `Tone.start()` to complete before starting the sequence. The entries are separated by quarter notes, and each note sounds for an eighth note. Pass the callback's supplied time to the synth so it plays on the scheduled audio clock.

## Manage the transport and the instruments separately

Several parts can follow the same transport. One part can dispose of its sequence and instrument while other parts continue playing, so stop the shared transport only when the entire performance should stop. Keep one owner for starting, stopping and changing the tempo. Try two patterns with different subdivisions on the same transport and check their alignment after a tempo change.

## Test the lifecycle in the page

Play, stop and start again, checking that only one sequence and instrument are active at a time. In a component-based interface, also mount and unmount the audio section to detect callbacks that outlive it. A basic audio file player may already have all the controls it needs. A composition that coordinates several patterns can benefit from Tone.js's musical timing and explicit transport.

## Sources

- [Tone.js — Getting started and scheduling](https://tonejs.github.io/)
