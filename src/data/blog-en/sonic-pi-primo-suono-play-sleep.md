Sonic Pi turns a few lines of code into a playable phrase. Use `play` to trigger a note with the current synth and `sleep` to advance musical time before the next instruction in that sequence.

~~~ruby
play 60     # middle C, as a MIDI note number
sleep 0.5   # wait half a beat
play 64     # E
sleep 0.5
play 67     # G
~~~

You can also write note names such as `:c4`, `:e4` and `:g4`. Press Run and listen to the three starts. Removing the `sleep` calls puts the notes at the same musical time, so they overlap as a chord. Changing the delay affects where the next note starts. The synth and its envelope determine how long the earlier note stays audible.

## Change one timing value at a time

Choose a constant tempo and write two notes with one `sleep` between them. Count the beats and check when the second note starts. Try a shorter sleep value with the same synth and pitches. A value of 0.5 is half a beat, which is half a second at 60 BPM. At another tempo, the wall-clock time changes along with the beat length.

Start with a root note and a fifth. Once the spacing sounds steady, try four notes with the same interval and record the result. Then change only the interval again so you can hear what that change does. Advancing the time of the current sequence lets Sonic Pi schedule it alongside other musical work.

## Add repetition once the phrase is clear

When the phrase has the rhythm you intended, put it in a [Sonic Pi live_loop](/blog/sonic-pi-live-loop-cuore-del-live-coding) so you can repeat and edit it while the rest plays. When there are several parts, use [cue and sync](/blog/sonic-pi-sync-cue) if they need to start on the same reference events.

## Source

- [Sonic Pi tutorial](https://sonic-pi.net/tutorial.html)
