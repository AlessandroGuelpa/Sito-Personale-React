The Roland TB-303 is closely associated with the acid bass sound. Sonic Pi provides a `:tb303` synth for exploring that character with repeated notes, filter movement and resonance. Start with a few notes and a consistent rhythm so you can hear what each parameter does.

The [Sonic Pi synth guide](/blog/sonic-pi-use-synth-scegliere-sintetizzatori) compares the TB-303 with other sources. In a set with several loops, [cue and sync](/blog/sonic-pi-sync-cue) can line the bass entry up with the drums.

```ruby
use_bpm 128

live_loop :acid do
  use_synth :tb303
  notes = (ring :e1, :e2, :g1, :a1)
  cutoffs = (ring 75, 80, 85, 95, 100, 95, 85, 80)
  play notes.tick(:bass_note),
    release: 0.2,
    cutoff: cutoffs.tick(:filter),
    res: 0.65,
    amp: 0.45
  sleep 0.25
end
```

The note and cutoff rings advance with named counters. The filter moves over eight steps while the pitch sequence repeats after four. In an existing set, start the bass loop at a drum cue if you want it to enter on the same grid as the rest of the track.

## Shape the groove with duration and accents

Keep the notes fixed and try lengthening one note or leaving one step silent. Then compare a second pattern that changes where an accent lands. Notes in nearby octaves can produce enough movement to hear the impact of changing cutoff. A high resonance can produce a strong peak near the cutoff, so compare settings at a moderate level.

## Add movement over several bars

Try a fixed cutoff first, then slowly move the upper end of the range across a few repeats. You can also experiment with a small random range once the baseline is easy to recognise. Record the same groove with and without distortion. Listen for whether the added harmonics help the bass cut through or mask the kick.

## Hear the accents while keeping the notes fixed

Keep the starting pattern and add a ring of eight levels, such as 0.45, 0.25, 0.27, 0.38, 0.25, 0.42, 0.26 and 0.24. Read it once per step with its own counter and pass the value to amp. Start with a fixed cutoff and record two bars at your usual listening level. Restore the cutoff movement and compare the same position in the bar.

To add a rest, advance the [rings and their counters](/blog/sonic-pi-generative-ring-tick) before deciding whether to call play. Keep sleep 0.25 outside the branch. Skipping tick with the note can shift the filter and pitch relative to the original pattern. Skipping sleep brings the following events forward. Mute the fourth step and check that the fifth still aligns with the kick.

## Sources

- [Sonic Pi — Tutorial](https://sonic-pi.net/tutorial.html)
