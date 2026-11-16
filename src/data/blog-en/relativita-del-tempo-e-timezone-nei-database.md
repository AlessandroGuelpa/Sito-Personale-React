An event entered at 09:00 can show up at a different hour after passing through the browser, API and database. Start by deciding what the time means. A timestamp for a completed event identifies a specific instant. A recurring appointment such as “every Monday at 09:00 in Rome” expresses a rule in local civil time.

When querying timestamps through [Active Record](/blog/rails-activerecord-le-basi), distinguish the stored instant from the local calendar date used in a filter. A [Rails migration](/blog/rails-migrazioni-versionare-il-database) that changes the meaning of an existing column also needs to account for historical values.

## Store the intent of the event

For a log entry, keep an unambiguous instant, typically represented in UTC, and format it in the required zone at display time. For an appointment that should always start at 09:00 in Rome, store the recurrence rule and the IANA time zone `Europe/Rome`. The UTC offset can change with daylight saving time, and each occurrence must use the applicable offset.

## Check the conversion in both directions

An API timestamp without a time zone or offset can be interpreted differently by parsers and environments. Give the API an explicit contract for instant values and keep it distinct from strings representing local dates or times. Verify that writing a value and reading it back preserves the meaning even if the display format changes.

Adding 24 hours moves a timestamp by a fixed duration. Advancing to tomorrow at the same local time follows calendar rules and may span 23 or 25 hours near a daylight saving transition. Try both operations around a transition to see the difference.

## Test ambiguous and skipped times

Some local times occur twice when clocks go back, and some are skipped when clocks go forward. Test the application's handling of each case as well as users viewing the same event in different zones. For a query such as “orders placed on Monday in Rome,” derive the start and end instants from the local dates rather than assuming that Monday is a fixed UTC interval.

## Sources

- [MDN — Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [MDN — Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)
