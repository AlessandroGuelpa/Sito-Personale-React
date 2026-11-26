Sonic Pi can play a selected part of a sample using `start` and `finish`. Choose a [sample from the library](/blog/sonic-pi-sample-libreria-integrata), listen to the original, then select regions that can become individual hits. Those slices can fit into a [programmed drum machine](/blog/sonic-pi-drum-machine) or form a rhythm of their own.

```ruby
use_bpm 120

live_loop :chop do
  index = (ring 0, 1, 2, 3, 4, 5, 6, 7).tick
  sample :loop_amen,
    start: index / 8.0,
    finish: (index + 1) / 8.0,
    beat_stretch: 2,
    amp: 0.65
  sleep 0.25
end
```

The indices divide the source into eight equal regions from 0 to 1. The last region ends at 1.0. `.tick` advances one step each time the loop runs. `beat_stretch` adjusts the playback rate relative to the duration in beats, and the grid spaces triggers a quarter of a beat apart here. Try `.choose` on the same ring to rearrange the slices without changing the grid.

## Choose cuts by listening to the source

An equal fraction of the file can start between transients or in the middle of an audible waveform. Listen to the uncut break and identify which attacks you want. Then audition a small region and adjust its boundaries. If the edge clicks, a short envelope can soften it. Listen for a tail extending into the following step, especially after changing the rate or stretch.

## Compare the result with the original break

Try four distinct slices at a fixed tempo before setting up more variations. Hear the source, the cut version and the stretched version in succession. Check which part of the change came from the slice boundaries and which came from the playback rate. A small number of well-placed cuts can give a break a new rhythm while keeping the original transients recognisable.

## Recognise a click caused by a cut

Take a segment that starts while the signal is still strong. Repeat it dry and listen to the attack. A hard cut can begin far from zero and produce a click. Move the start slightly or try a very short attack. If this removes the kick or snare transient too, the slice can lose the rhythmic role you wanted.

Check the end of the segment the same way. A truncated tail can click even when the onset is clean. Record three versions at the same level and listen in the beat. Keep the cut that fits the grid and leaves the hit recognisable.

## Sources

- [Sonic Pi — Tutorial](https://sonic-pi.net/tutorial.html)
