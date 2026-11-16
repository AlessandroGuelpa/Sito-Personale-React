Two Sonic Pi live loops can start at different times or reach their boundaries on different beats. Use `cue` to send a named event and `sync` to wait for it. An independent [Sonic Pi live_loop](/blog/sonic-pi-live-loop-cuore-del-live-coding) provides the repeating phrase. The timing event gives multiple phrases a common point to align to.

~~~ruby
live_loop :metronome do
  cue :tick           # send a timing event on each pass
  sleep 1
end

live_loop :bass do
  sync :tick          # wait for the timing event
  use_synth :tb303
  play :e2, release: 0.4
end
~~~

## Choose which loop sends the pulse

In this example the metronome sends `:tick` once per beat. The bass waits for a tick before playing its note. For a larger arrangement, decide whether the other parts should start on a beat, at a bar boundary or after a longer phrase. You can send events only at those meaningful points.

Name the cues clearly. If two loops are each waiting for the other to send a cue, there may be no event that lets either continue. Start the pulse from a loop that can run on its own and let the parts that depend on it wait for that signal. [MIDI control in Sonic Pi](/blog/sonic-pi-midi-controllo) can add performer input on top of this timing structure.

## Rehearse a cold start and an edit

Start the session from an empty state and listen for when the bass first enters. Check that the kick and bass meet at the intended boundary. While the session is running, edit one pattern and verify where its next iteration falls against the reference event. If the edit changes the duration of the phrase, test whether the next `sync` still catches the cue you expect.

A short recording of these two tests can reveal a timing offset that is easy to miss while looking at the code.

## Source

- [Sonic Pi tutorial](https://sonic-pi.net/tutorial.html)
