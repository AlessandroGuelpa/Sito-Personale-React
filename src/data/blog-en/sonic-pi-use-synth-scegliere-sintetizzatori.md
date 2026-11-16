In Sonic Pi, `use_synth` sets the instrument used by subsequent `play` calls in that context. Play the same note with several synths to hear how much the source changes the character of a pattern. The [TB-303 bassline guide](/blog/sonic-pi-bassline-tb303) explores resonance and cutoff in detail. [Samples](/blog/sonic-pi-sample-libreria-integrata) give you recorded sounds alongside synthesised parts.

```ruby
use_synth :prophet
play :e3, release: 2
sleep 2

use_synth :tb303
play :e2, release: 0.3, cutoff: 90
sleep 2

use_synth :dsaw
play :e3, release: 1
```

These starting settings show three instruments. For a controlled comparison, play the same note and duration with each one. Try the defaults first, then adjust an option the synth supports. Compare at similar perceived volume so a louder instrument does not dominate the result. If multiple live loops run together, set each loop's synth inside the loop to make its instrument explicit.

## Listen to the envelope as well as the timbre

The attack determines how quickly a sound comes in, sustain controls how long it holds in this note envelope, and release shapes the tail. A short envelope can suit percussion, while a longer one can make a sustained pad. Repeat the same pattern and listen for tails that overlap the next note. A good setting for a single held note can become muddy at a faster rhythm.

## Move cutoff on an acid bassline

On `:tb303`, changing the low-pass cutoff exposes or attenuates upper harmonics. Resonance can emphasise the region around the cutoff. Start with a low level and adjust one parameter while keeping notes and BPM fixed. Record four bars with one setting and another four with a changed synth or filter. Listen back to identify whether the difference came from the harmonic content, the envelope or the level.

## Sources

- [Sonic Pi — Tutorial](https://sonic-pi.net/tutorial.html)
