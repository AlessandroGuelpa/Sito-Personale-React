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

## Check a date boundary using the same instant

An order placed at 23:30 UTC on 5 January already falls on 6 January in Rome. If the server renders in UTC and the browser uses its local time zone, the displayed date can change between the HTML response and application startup. Pick the zone for the screen and pass it in both environments.

~~~javascript
const orderTime = new Date("2026-01-05T23:30:00Z")
const formatIn = (timeZone) =>
  new Intl.DateTimeFormat("it-IT", {
    timeZone, year: "numeric", month: "2-digit", day: "2-digit"
  })

console.log(formatIn("UTC").format(orderTime)) // 05/01/2026
console.log(formatIn("Europe/Rome").format(orderTime)) // 06/01/2026
~~~

If the data is a calendar date, such as an all-day deadline, preserve its year, month and day as calendar fields. Immediately converting it to an instant at midnight UTC can show the previous date to someone farther west.

## Check the parts that matter to the interface

To style the currency differently, use formatToParts to locate the part with type currency. Preserve the order and spacing returned by the formatter. This avoids splitting on a separator that can change with the locale. For a portable test, check the day field or currency part that matters, since spaces and typographic marks can vary across environments. Also check that the cart still adds up the original amounts and keeps currencies separate after formatting them for display.

## Source

- [MDN Intl reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
