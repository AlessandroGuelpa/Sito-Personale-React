When a bug survives a series of fixes, try explaining the behaviour aloud from the beginning. In rubber duck debugging, a duck plays the role of a listener who has no background in the project. Explaining an apparently obvious step can reveal which assumption the code actually depends on.

[Hypothesis-driven debugging](/blog/effetto-osservatore-fisica-quantistica-e-l-arte-del-debugging) gives you a way to test what you notice. [Tests for legacy code](/blog/principio-di-inerzia-e-la-sindrome-del-non-toccare) help keep other behaviour intact while fixing it.

## Explain the contract before the implementation

Say which input the function accepts, what should come out and what happens instead. Then follow each transformation or external effect. If the problem appears with an empty collection, say what that input means under the contract. An assumption that never sounded suspicious while reading the function can stand out when you have to explain it in plain language.

## Walk through a basket calculation

Suppose a function applies a discount before checking the minimum purchase threshold. When you explain the requirement, you realise the threshold is meant to use the price before the discount. Both orders of operations can produce a valid number. Only one matches the rule. Pick an amount near the threshold so the two interpretations produce different outcomes.

## Turn the explanation into evidence

Write a small test for the case that exposed the assumption and verify an ordinary input as well. If the bug depends on a race or a slow response, follow the conversation with timestamps, traces or a test that controls the timing. The explanation identifies a plausible cause. Reproducing the failure and observing the corrected result demonstrates what changed.

## Sources

- [Chrome DevTools — Debug JavaScript](https://developer.chrome.com/docs/devtools/javascript/)
