The desktop Sonic Pi app can record its audio output. Start recording with its recording control, perform the arrangement, then stop recording and save the WAV. Recording a whole section makes it easier to hear timing, levels and transitions that may pass unnoticed in a short loop.

The [techno arrangement guide](/blog/sonic-pi-brano-techno-passo-passo) shows how to introduce layers over time. Test the same script at [a clearly specified BPM](/blog/sonic-pi-use-bpm-tempo) when comparing takes.

```ruby
use_bpm 124

live_loop :drums do
  sample :bd_haus, amp: 0.8 if (tick % 4).zero?
  sample :drum_cymbal_closed, amp: 0.3
  sleep 0.25
end

live_loop :bass, sync: :drums do
  use_synth :tb303
  play (ring :e1, :e2, :g1, :e1).tick,
    release: 0.2, cutoff: 85, amp: 0.35
  sleep 0.5
end
```

The loops give a fixed starting point for a recording. The bass waits for an initial drum cue and then plays at half-beat intervals. During the performance, bring in the layers one at a time so you can hear when each section changes.

## Check a short take first

Record 30 seconds that include the fullest part and one transition. Listen at a moderate level on headphones and speakers if you can. Check for clipping, a kick hidden by effects, and the length of the silence before the start. Let a reverb or delay tail finish before stopping if that ending belongs to the arrangement. If you change an effect or a loop, capture another short take and compare that moment again.

## Save the audio and the arrangement

Keep the WAV with the starting script and notes on the BPM and changes made during the set. Name the files so you can match revisions and dates. An audio recording lets you hear what happened, while the code and notes help reconstruct the performance. Use an audio editor or DAW for further editing and mastering when the arrangement is ready.

## Listen to the boundaries of the exported file

For a track with reverb, mark where the script stops triggering events and keep recording until the tail fades. Import the file into an editor and listen to the last two seconds. If the level cuts off abruptly, leave more room in the next take or make a fade in the edit. For a loop intended to repeat, check the join between end and start in looped playback.

Check the start at a moderate level too. If you pressed Record after the kick attack, the missing transient may be easy to miss during the set and obvious in the file. Start recording ahead of the first bar and trim only the leading silence you can spare.

## Sources

- [Sonic Pi — Tutorial](https://sonic-pi.net/tutorial.html)
