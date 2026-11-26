Sonic Pi's `scale` and `chord` functions return note sequences you can use in a pattern. Give `scale` a tonic and a scale type such as `:minor_pentatonic` or `:dorian`. Give `chord` a root and a chord quality such as `:minor` or `:major7`. Play the notes together for a chord or spread them out for an arpeggio.

```ruby
scale(:e3, :minor_pentatonic)
# (ring 52, 55, 57, 59, 62, 64)

chord(:e3, :minor)
# (ring 52, 55, 59)

scale(:e3, :minor_pentatonic).each do |note|
  play note
  sleep 0.25
end

play chord(:a3, :major7)
```

A ring can also supply a random note with `.choose` or cycle through its values with `.tick`. Each keeps the choices within the notes you started with. The rhythm and note order still determine what it sounds like as a phrase.

## Choose a register and a rhythmic reference

Start with a small range of notes. If the line overlaps a kick or bass so much that the parts become indistinct, try another octave. The [synth choice](/blog/sonic-pi-use-synth-scegliere-sintetizzatori) will also affect how easily you can hear the melody. Use a simple [drum machine grid](/blog/sonic-pi-drum-machine) as a steady point of reference while deciding where to place the notes.

## Compare two versions of a short phrase

Make a four-bar loop with a few notes. Listen to how the last note leads back to the first when it repeats. Then vary a single pitch, its duration or its place in the rhythm. Notes from one scale provide a common set of choices, while emphasis and the relationship to the active chord create much of the tension and resolution. Try arpeggiating one chord instead of playing all its notes together, and listen to how that changes the space available for the next part.

## Change the inversion and listen to the top note

Play E3, G3 and B3 together, then G3, B3 and E4. The two voicings contain the same pitch classes, but the second puts G at the bottom and E at the top. Use the same duration and synth. Add an E bass line and listen for which pad note stands out. If the melody is clear with one voicing and hard to hear with the other, try moving only the melody up an octave. Keep the rhythm fixed during the comparison so you can hear what the register changes.

## Sources

- [Sonic Pi — Tutorial](https://sonic-pi.net/tutorial.html)
