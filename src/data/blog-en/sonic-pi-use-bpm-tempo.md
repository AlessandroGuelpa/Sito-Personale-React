Sonic Pi measures `sleep` in beats at the active tempo. At the default 60 BPM, one beat happens to last one second. `use_bpm` changes the number of beats per minute, so a pattern written in beat values can play faster or slower without changing its musical subdivisions.

```ruby
use_bpm 128

live_loop :beat do
  sample :bd_haus, amp: 0.8
  sleep 1
end

live_loop :hats do
  sample :drum_cymbal_closed, amp: 0.3
  sleep 0.25
end
```

At 128 BPM, `sleep 1` lasts about 0.47 seconds. When the beat represents a quarter note, `sleep 0.5` is an eighth note and `sleep 0.25` is a sixteenth. Changing the tempo changes the real duration of both. A local `use_bpm_mul` can speed up or slow down a single loop, so document when that layer is meant to run on a different clock.

## Check the length of the musical phrase

Count the sleeps across all branches of a loop. A four-beat sequence should land back on the intended bar line even when a branch omits a sound. [Cues](/blog/sonic-pi-sync-cue) help multiple loops enter at a shared musical point. Try the same four beats at 120 and 160 BPM and compare the relative location of the hits. Sixteenth notes are spaced 125 ms apart at 120 BPM and about 94 ms apart at 160 BPM.

## Match recorded loops to the grid

The original playback length of a recorded sample does not automatically change with every tempo setting. A break may need stretching or a different trigger position. Compare the duration of the sample with the gap before its next trigger at both tempos. Use a short [Sonic Pi recording](/blog/sonic-pi-registrare-esportare) to listen for overlaps and confirm that loops restart where you expect after a tempo change.

## Sources

- [Sonic Pi — Tutorial](https://sonic-pi.net/tutorial.html)
