The Web MIDI API can receive events from hardware such as a keyboard or pad controller. Those messages describe what the player did. A Web Audio synthesiser can turn a note number into a pitch and use its velocity to shape the initial sound. A [step sequencer](/blog/web-audio-sequencer-step) can use the same events as input, and an [AnalyserNode](/blog/web-audio-analyser-visualizzare) can display the audio that the synthesiser produces.

## Read note messages on any channel

```javascript
async function enableMidi() {
  if (!navigator.requestMIDIAccess) {
    throw new Error("Web MIDI is unavailable");
  }
  const access = await navigator.requestMIDIAccess();
  for (const input of access.inputs.values()) {
    input.onmidimessage = ({ data }) => {
      const [status, note, velocity] = data;
      const command = status & 0xf0;
      if (command === 0x90 && velocity > 0) {
        startNote(note, velocity);
      } else if (command === 0x80 || (command === 0x90 && velocity === 0)) {
        stopNote(note);
      }
    };
  }
  return access;
}
```

Call the function from your MIDI setup control and report a denied request or unavailable browser feature. The example assumes functions that manage the audio voices. The low four bits of a channel message's status byte identify its channel. Masking those bits lets the example recognise note-on and note-off across channels. A note-on with velocity zero also releases the note. Other MIDI message types can have a different structure.

## Handle the device changing during a session

Check that the page runs in a supported browser and secure context. Use the access object's connection events to refresh the available ports and reattach handlers as needed. If a device disconnects while it holds notes, decide how the synthesiser will release those voices. A saved port identifier can become stale.

Map incoming controller values to the safe or useful range of the parameter they control. A little smoothing can help if a knob produces frequent changes. If several devices play at once, track the note by input and channel as well as pitch. Test pressing and releasing notes and disconnecting the device mid-phrase. Keep the controller state and the audio output observable separately while testing.

## Sources

- [MDN — Web MIDI API](https://developer.mozilla.org/en-US/docs/Web/API/Web_MIDI_API)
