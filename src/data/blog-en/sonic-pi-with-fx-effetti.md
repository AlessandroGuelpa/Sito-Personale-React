Sonic Pi's `with_fx` applies an effect to sounds played inside its block. Reverb can give a sound space, echo can add repeats in time with a pattern, and distortion can change its harmonics. Listen to the dry [synth sound](/blog/sonic-pi-use-synth-scegliere-sintetizzatori) first so you can hear what the effect contributes.

```ruby
with_fx :reverb, mix: 0.6 do
  play :e3
  sleep 0.5
  play :g3
end

with_fx :echo, phase: 0.25, decay: 4 do
  with_fx :distortion, distort: 0.4 do
    play :e2, release: 0.2
  end
end
```

In the second example, the note passes through the inner distortion before reaching the outer echo. The echo repeats a processed sound. If effects are nested the other way around, each stage receives different input. Parameters such as `mix`, `room`, `phase` and `decay` apply where the selected effect supports them.

## Hear what the order changes

Start with one note and a single effect. Set the mix and level before introducing a second effect. Compare an echo feeding reverb with reverb feeding echo. In the first case each repeat contributes to the reverberant tail. In the second, the echo receives a signal that already includes a tail. Examine the result with the actual tempo and notes you use, especially when several repeats fit between your triggers.

## Check a longer phrase

Try four bars dry and four with the effect while keeping the rhythm and notes fixed. On a rhythmic part, listen for reverb masking the attack of the next hit. With a progression made from [scales and chords](/blog/sonic-pi-scale-accordi), check whether the previous harmony lingers into the next one. A tail can still be audible after the last trigger. Leave space for it or reduce its level if the next section needs a clear entrance.

## Sources

- [Sonic Pi — Tutorial](https://sonic-pi.net/tutorial.html)
