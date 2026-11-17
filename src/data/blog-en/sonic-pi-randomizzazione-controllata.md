Sonic Pi can choose notes or accents from a pseudorandom sequence. Starting from the same seed and making the same calls in the same order reproduces those choices. That makes it possible to improvise with a few settings and keep a version you liked for another session.

Keep a [drum machine pattern](/blog/sonic-pi-drum-machine) steady while trying variations in one layer. [Rings with tick](/blog/sonic-pi-generative-ring-tick) also give you a fixed sequence to compare with randomly selected notes.

```ruby
use_bpm 120

live_loop :melody do
  use_random_seed 42
  4.times do
    play choose([:e3, :g3, :a3, :b3]), release: 0.3, amp: 0.5
    play :e4, release: 0.15, amp: 0.25 if one_in(2)
    sleep 0.5
  end
end
```

Here the seed is inside the live loop, so each iteration restarts the same sequence. The main notes sit on fixed half-beat steps. `choose` selects an item, `rrand` selects a value in a numeric range, and `one_in` occasionally produces true according to the supplied odds.

## Decide when the seed should restart

To replay a phrase exactly, initialise its seed at the same point each time. To let a part keep evolving, let the generator continue across phrases and arrange a repeatable start for the performance. Adding a random call for another control can change later choices using the same sequence. Record the seed with the code and the location where that seed is set.

## Vary one layer and review the recording

Keep the kick and bass fixed and vary a subset of the hats or melody. Compare two seeds over the same number of bars at the same tempo. Listen for gaps, density and accents the result creates. Select a variation that works with the fixed parts, then restart from the saved settings to check that you can reproduce it.

## Sources

- [Sonic Pi — Tutorial](https://sonic-pi.net/tutorial.html)
