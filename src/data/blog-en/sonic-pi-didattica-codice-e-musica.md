Sonic Pi was developed as a tool for teaching programming through music. A beginner can change a number and immediately hear a difference. A loop becomes a rhythm that repeats, a variable can store how long notes last, and a condition can decide whether a drum hit plays on a particular step.

Start with [play and sleep](/blog/sonic-pi-primo-suono-play-sleep) so the learner can hear what controls a note and what controls the gap after it. The [comparison with Web Audio](/blog/sonic-pi-e-web-audio-stessa-idea) shows how the same musical ideas can appear in a browser programme.

## Predict the pattern before running it

```ruby
4.times do
  play :e4
  sleep 0.25
end
```

Ask how many notes one run will play and how far apart they will be. After listening, change only the sleep value. The notes should stay the same in number and pitch, while their timing changes. Then restore the original sleep and change the number of iterations. The two edits make it easy to hear the difference between repetition count and spacing.

## Give the next concept an audible role

Store a note or a duration in a variable. Ask what changes if you assign a different value. Add a condition that plays a drum on one step of a four-step phrase and have the learner point out where they expect to hear it. Keep each exercise short enough to run several times and leave room for a learner to test their own prediction.

## Compare the expectation with what happened

A wrong note or a misplaced beat gives immediate evidence that the result differs from the plan. Have the learner describe the difference in words and change one instruction before running it again. Writing down the expected count, timing or accent turns an enjoyable sound experiment into a way to test a programming idea.

For an early exercise where students can observe sound in a browser, try [a lesson with Chrome Music Lab](/blog/web-audio-chrome-music-lab-lezioni).

## Sources

- [Sonic Pi — Tutorial](https://sonic-pi.net/tutorial.html)
