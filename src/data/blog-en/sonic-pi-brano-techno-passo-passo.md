A techno groove can start with a kick and one other sound. The arrangement develops when layers enter, drop out or change over a defined number of bars. Set a tempo and give each part a predictable timing relationship to the kick.

Use a [recording of the set](/blog/sonic-pi-registrare-esportare) to check whether the transitions are audible. An [ambient pad](/blog/sonic-pi-ambient-pad-riverbero) can add a longer texture if its tail leaves enough room for the rhythm to return.

```ruby
use_bpm 130

live_loop :kick do
  sample :bd_tek, amp: 0.9
  sleep 1
end

live_loop :hats, sync: :kick do
  sleep 0.5
  sample :drum_cymbal_closed, amp: 0.3
  sleep 0.5
end

live_loop :bass, sync: :kick do
  use_synth :tb303
  play (ring :e1, :e1, :g1, :e1).tick, release: 0.3, cutoff: 85, amp: 0.4
  sleep 0.5
end

live_loop :stab, sync: :kick do
  use_synth :prophet
  play chord(:e3, :minor7), release: 0.2, amp: 0.35 if one_in(4)
  sleep 1
end
```

The kick lands once per beat, and the hi-hat enters halfway through each beat. The bass repeats a short phrase. The chord stabs are occasional, but the loop continues to count every beat even when it plays nothing. Introduce each layer separately and check its timing before running everything together.

## Turn a repeating groove into sections

Start with a few bars of kick and hats. Bring in the bass at a bar boundary. In a later section, remove a layer before bringing the fuller groove back. Write down the number of bars each section lasts. Using bars gives transitions a place in the music even if you rehearse at another BPM.

## Listen for what actually changes

Record the whole progression and listen without watching the code. If two sections sound almost identical, change something audible such as the bass rhythm, the number of hats or how long the kick is absent. Keep filter moves and occasional stabs sparse enough for the transitions to remain clear. At a faster tempo, check that long tails and busy patterns still leave space for the next attack.

## Write a return you can hear at a fixed volume

In an eight-bar phrase keep the kick for the first seven bars, then mute it on the last beat. Bring in the bass pattern on beat one of the next phrase. Record the same bars twice, leaving the kick on throughout the second take. Keep sounds and levels fixed. If the return stands out with the gap before the change, the rhythmic structure is carrying the transition.

Repeat with a delay tail on the fill and listen to the first hit of the new phrase. If the tail softens the return, schedule the last trigger earlier or reduce the effect’s decay. Check precisely where the new loop follows the [drum cue](/blog/sonic-pi-sync-cue).

## Sources

- [Sonic Pi — Tutorial](https://sonic-pi.net/tutorial.html)
