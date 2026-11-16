Sonic Pi includes recordings of drums, loops, effects and textures. Call `sample` with a name from the built-in library to play one of them. Autocomplete can help you explore families such as `:drum_`, `:ambi_`, `:loop_` and `:elec_`. Try a few sounds by themselves before combining them in a [Sonic Pi drum machine](/blog/sonic-pi-drum-machine).

```ruby
sample :bd_haus                  # Kick
sample :sn_dolf                  # Snare
sample :loop_amen                # Drum break
sample :ambi_choir, rate: 0.5    # Slower and lower
sample :bd_haus, amp: 0.7, pan: -1 # Left channel
```

Run these lines one at a time to hear each sample. For a rhythm, add `sleep` calls to give each trigger a position on the beat.

## Change one playback parameter at a time

`rate` changes speed and pitch together. At half speed, a sample takes twice as long and sounds an octave lower. `amp` scales the level, and `pan` controls stereo placement. With `start` and `finish`, select a fraction of the recording from 0 to 1. The [sample slicing guide](/blog/sonic-pi-slicing-campioni) uses those boundaries to build variations from one sound.

`beat_stretch` adjusts playback to fit a duration in beats at the current tempo. Compare an unchanged drum sample, a different rate and a stretch setting. Listen for changes in attack and pitch. An extreme transformation can make a sound behave differently from the original even if it fits the target duration.

## Give the tail room in the pattern

Set a BPM and a repeatable grid, then listen to the sound in context. If a kick or choir sample lasts beyond its next trigger, the overlapping tails can raise the level or blur the next beat. Try shortening the selected portion or changing the spacing, then check the mix with all the other layers enabled. Compare at moderate levels, especially with samples that already sound dense or compressed.

## Sources

- [Sonic Pi — Tutorial](https://sonic-pi.net/tutorial.html)
