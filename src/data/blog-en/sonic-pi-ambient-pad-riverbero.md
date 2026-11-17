An ambient pad can give a piece a slowly moving texture. A soft attack lets it emerge gradually, and a long release lets voices overlap. Reverb shapes the space around it. Listen to what each part adds before raising the level or introducing another sound.

A pad can enter progressively in a [techno arrangement](/blog/sonic-pi-brano-techno-passo-passo). A short [recording of the set](/blog/sonic-pi-registrare-esportare) can help you hear whether the texture supports the track or hides important parts.

```ruby
use_bpm 60

with_fx :reverb, room: 0.9, mix: 0.55 do
  live_loop :pad do
    use_synth :hollow
    play chord(:e3, :minor7).choose, attack: 4, release: 8, amp: 0.45
    sleep 4
  end

  live_loop :texture do
    sample :ambi_lunar_land, rate: 0.4, amp: 0.3
    sleep 8
  end
end
```

The pad starts another note before the earlier voice has finished. The slow sample adds a second layer with a different duration. Start by listening to the pad alone. Then add the texture and check where its tail overlaps the harmony.

## Leave room for the tail

Try a phrase with three widely spaced notes. Compare a light reverb with a larger one using the same notes and volume settings. If the low register becomes indistinct, reduce the number of voices or give each note more time before raising the reverb. The silence between events can help a change in harmony stand out. Try pausing new notes for one cycle and listen to how far the tail carries the harmony on its own before the next entrance.

## Introduce movement slowly

Try shifting the register or moving a filter gradually over several bars. Record two minutes with the same sounds and only a few deliberate changes. Listen for which transitions remain audible after the layers overlap. Adjust the note spacing and envelope to fit the part's role before adding more density.

## Sources

- [Sonic Pi — Tutorial](https://sonic-pi.net/tutorial.html)
