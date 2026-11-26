A MIDI keyboard or controller can send messages to Sonic Pi while a set plays. A key press supplies a note and velocity. A knob can send control values you map to the range of a synth parameter. Look at the cue log to see the actual device, port and channel before wiring either one to a live loop.

```ruby
live_loop :keyboard do
  use_real_time
  note, velocity = sync "/midi:my_keyboard:0:1/note_on"
  synth :piano, note: note, amp: 0.7 * velocity / 127.0 if velocity > 0
end

live_loop :read_knob do
  use_real_time
  control_number, value = sync "/midi:my_controller:0:1/control_change"
  set :cutoff, 60 + value * 45.0 / 127 if control_number == 1
end
```

Replace the two paths with those your devices send. The piano example uses note-on velocity for its initial level. The knob loop filters one controller number and maps the MIDI range of 0 to 127 to cutoff values from 60 to 105. A timed bass loop can then use `get(:cutoff) || 70` when it triggers a note.

## Keep the timed loops independent

Use [cue and sync](/blog/sonic-pi-sync-cue) to coordinate musical sections and an [explicit BPM](/blog/sonic-pi-use-bpm-tempo) for their timing. The loop listening for a new knob event can wait without pausing the bass loop. Give the bass a default value so it can play before the first MIDI message and decide whether to keep the last known value when the controller is unplugged.

## Test one mapping at a time

Move the knob through its full range and check that the filter changes within useful limits. A jumpy controller may need a narrower range or smoothing where the synth supports it. Try the track without the device, then connect it and test a short phrase. Observe whether the change affects newly triggered notes or a voice already playing. Add more controls once one mapping responds predictably and the rhythm keeps playing during connection changes.

To read keyboard events directly in a page, see [how to receive messages with the Web MIDI API](/blog/web-audio-web-midi-api).

## Sources

- [Sonic Pi — Tutorial](https://sonic-pi.net/tutorial.html)
- [Sonic Pi — MIDI input](https://sonic-pi.net/tutorial-11.html)
