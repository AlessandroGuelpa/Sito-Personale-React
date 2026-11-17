A Sonic Pi ring repeats its values when its index reaches the end. `.tick` advances the counter and reads the corresponding value. `.look` can read the current value without advancing it. Use rings for notes, timings or control values that should repeat in a predictable order.

A fixed ring is a useful starting point before introducing [seeded random variation](/blog/sonic-pi-randomizzazione-controllata). You can also cycle through [sample slices](/blog/sonic-pi-slicing-campioni) by storing their indices in a ring.

```ruby
notes = (ring :c4, :e4, :g4, :b4, :a4)
levels = (ring 0.6, 0.25, 0.4)

live_loop :arp do
  play notes.tick(:pitch), release: 0.2, amp: levels.tick(:level)
  sleep 0.25
end
```

There are five pitches and three levels. Both advance once at each step, so the combination returns to its starting position after 15 steps. The same idea works with a ring of filter values, with a separate counter if the filter moves at a different rate.

## Decide which values should share a counter

If two reads of `.tick` use the same unnamed counter inside one loop, the second read advances it again. Adding a new read can therefore change the sequence. Use named counters when each sequence should have its own position. To read several values at the same index, advance once and use `.look` for the other reads of that counter.

## Keep part of the phrase predictable

Start with a ring of pitches and a fixed rhythmic grid. Record a short cycle, then change only the dynamics or one length. When pitches, gaps and filter settings all change on every step, the ear can lose the point of reference. A recurring rhythm or register lets the difference between the ring lengths create movement while keeping the phrase recognisable.

## Sources

- [Sonic Pi — Tutorial](https://sonic-pi.net/tutorial.html)
