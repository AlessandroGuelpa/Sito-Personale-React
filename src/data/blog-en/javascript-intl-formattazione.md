JavaScript’s native `Intl` APIs format dates, numbers, currencies and relative times according to a locale. A locale can change the grouping separator, the position of a currency symbol or the order of date fields. The underlying quantity or instant can be stored separately.

~~~javascript
new Intl.NumberFormat("it-IT", {
  style: "currency",
  currency: "EUR",
}).format(1234.5); // "1.234,50 €"

new Intl.DateTimeFormat("it-IT", {
  dateStyle: "long",
  timeZone: "UTC",
}).format(new Date("2026-06-24T12:00:00Z")); // "24 giugno 2026"

new Intl.RelativeTimeFormat("it").format(-2, "day"); // "2 giorni fa"
~~~

## Choose a formatter for the job

Pass an explicit locale such as `it-IT` or `en-US` when the application knows which conventions to use. With the same value, `NumberFormat` applies the selected number and currency rules. `DateTimeFormat` displays the date or instant with the requested calendar presentation and options. For ordering strings, use `Intl.Collator`. For plural categories, use `Intl.PluralRules`.

## Keep stored data separate from display

A currency amount like 1234.50 can be stored with its ISO currency code before presentation. A formatted result such as “1.234,50 €” belongs in the UI. If people can enter amounts, decide how input parsing deals with separators and precision. The number formatter produces a display string, so give the parser its own rules.

For dates, choose an explicit `timeZone` when the view belongs to a particular zone. Otherwise the displayed time can reflect the environment running the formatter. [Time zones and persisted instants](/blog/relativita-del-tempo-e-timezone-nei-database) explain that distinction. Use unformatted values in structures such as [Map and Set](/blog/javascript-set-e-map) when code needs to compare or group the data.

## Compare two locales with the same input

Render the same amount and instant in `it-IT` and `en-US`. Keep the numeric input, ISO currency code and instant fixed during the test. Verify the displayed text for each locale, then check that a save operation still uses the original values.

## Source

- [MDN Intl reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
