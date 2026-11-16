`play` and `sleep` let you write a phrase in Sonic Pi. `live_loop` lets you revise a repeating phrase while the set is running. Edit a loop and press Run. The new code takes effect when the current iteration reaches its end.

Start with a kick and a closed hi-hat. Give each loop its own name and a short pattern you can hear clearly.

~~~ruby
live_loop :beat do
  sample :bd_haus
  sleep 0.5
end

live_loop :hats do
  sample :drum_cymbal_closed, amp: 0.6
  sleep 0.25
end
~~~

## Change one layer while the others play

The two loops run in parallel. In this example the kick advances by half a beat and the hats by a quarter of a beat each time through. Once both patterns are running, change the spacing or level of one layer and press Run. Listen for the change on its next iteration. That immediate feedback is part of what performers use when playing code at an algorave.

Each iteration needs a way to advance time, such as `sleep` or a suitable timing operation. A loop that keeps issuing events with no time advance can fail or interrupt the set. Short named loops also make it easier to see which musical role you are editing. Start with [play and sleep](/blog/sonic-pi-primo-suono-play-sleep) if you want to practise the timing of a single phrase first.

## Check the alignment by ear

Think in bars when adding a second pattern. A four-beat loop and a three-beat loop that start together line up at their boundaries again after twelve beats. That can be a musical decision, or a sign you need to share a timing reference. [Sonic Pi cue and sync](/blog/sonic-pi-sync-cue) show how to coordinate starts.

Record a short rehearsal and listen to the moment one pattern changes. Try removing a single layer using the control provided by the program while the other loop continues. This tests the transitions you will actually use during a live set.

## Source

- [Sonic Pi tutorial](https://sonic-pi.net/tutorial.html)
