A change to one CSS selector can affect components on pages you never touched. The cascade makes that behaviour explainable. A selector such as `button` or `article` reaches every matching element, so a rule added for one area can change a shared control somewhere else.

## Find the declaration that wins

Open DevTools on the affected element and inspect the property that changed. The cascade considers the origin and importance of declarations, their layers, specificity and order. Source order breaks a tie only after the earlier criteria have been considered. That is why the last edited file is an unreliable guide to the rule that actually won.

If a button changes after a layout update, compare the rules that applied before and after the edit. Check which selectors now match and where the winning declaration sits in the cascade. A narrower selector or a component class can address the cause without escalating specificity throughout the stylesheet.

## Give component styles a clear scope

Choose classes with a recognisable responsibility and use a consistent convention for related components. CSS Modules can reduce name collisions, while a stylesheet organised around clear ownership makes the effect of a change easier to inspect. Reserve global defaults and resets for behaviour that should apply across the site.

Start from the HTML and essential interactions. [Progressive enhancement](/blog/progressive-enhancement-funzione-base) explains why the basic interface should work when later layers are delayed. The same principle matters to [form usability](/blog/forza-di-attrito-e-la-ux-dei-form), particularly when a rule affects keyboard focus or the visibility of error messages.

## Test where the component is reused

After narrowing a rule, inspect buttons, inputs and dialogs on the pages that share them. Compare screenshots for default, hover, focus and disabled states. Include a narrow viewport and dark mode for components that appear in both settings. A visual test can reveal a change you missed during development, and DevTools can then identify the selector responsible for it.

## Sources

- [MDN on the CSS cascade](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascade/Cascade)
- [MDN on CSS specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascade/Specificity)
