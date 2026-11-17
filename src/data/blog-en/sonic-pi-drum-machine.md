A drum machine needs sounds and a grid that defines when they are played. Pick a kick, snare and closed hi-hat from the [Sonic Pi sample library](/blog/sonic-pi-sample-libreria-integrata). Give the sounds distinct roles before adding [scales and chords](/blog/sonic-pi-scale-accordi) above them.

```ruby
use_bpm 120

live_loop :kick do
  sample :bd_haus, amp: 0.9
  sleep 1
end

live_loop :snare do
  sleep 1
  sample :sn_dolf, amp: 0.55
  sleep 1
end

live_loop :hats do
  sample :drum_cymbal_closed, amp: 0.3
  sleep 0.25
end
```

The kick plays on each beat. The snare waits one beat and lands on beats two and four in a four-beat bar. The hats count subdivisions every quarter of a beat. The three loops have different iteration lengths that line up with the same grid. Listen to one loop at a time and then run all three together.

## Give the groove room

A 16-step bar can place the kick on strong beats, a snare where it provides a backbeat, and hats between them. Leave some cells empty and compare the result with every hat switched on. When changing a loop, count its total sleep duration. A duration that does not line up with the bar can shift the relationship between layers over successive repetitions. That can be intentional when writing a polyrhythm.

## Introduce one repeatable variation

Start with four bars you can hear repeating cleanly. Try changing a hat accent or adding a snare hit near the end of the fourth bar, then listen for whether it helps the return to the first beat. If you use `one_in(4)` for an occasional extra hit, put the condition on the extra event and leave its timing grid steady. Record a few passes and judge the mix with the kick, snare and hats all playing. Loud tails can hide transients that sound distinct on their own.

## Sources

- [Sonic Pi — Tutorial](https://sonic-pi.net/tutorial.html)
