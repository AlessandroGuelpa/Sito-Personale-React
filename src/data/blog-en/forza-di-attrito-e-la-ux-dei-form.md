Every extra field asks for time, attention and information. A complicated contact form or checkout gives people more chances to make mistakes or leave partway through. Start by asking which information they need to provide to complete the current task and when you need it.

The [Fetch API guide](/blog/javascript-fetch-api) explains how to distinguish a dropped connection from an HTTP error during submission. When applying [optimistic UI patterns](/blog/dilatazione-temporale-interstellar-e-optimistic-ui) to forms, show a sending state until the server has confirmed anything the user will rely on.

## Start with the task

For a first enquiry, a way to contact the sender and a description of their request may be enough. A shipping form needs additional details to deliver an order. Make required fields explicit and give users a reason for requests they may find unexpected. Defer information you can collect later if it does not affect the current action.

Use visible labels associated with each control. A placeholder disappears as soon as someone starts typing, precisely when they may need to check the format. Use persistent hints for complicated input and choose input types that suit the data. Try the whole form with the keyboard and check that a screen reader announces labels and required information.

## Keep errors recoverable

“Invalid data” leaves the user guessing. Name the field and explain the specific rule they need to satisfy. Preserve their other entries so a mistake in one field does not turn into another full attempt. Browser validation can give immediate feedback. Apply the same underlying rules on the server, where requests can arrive from clients that bypass the browser checks.

## Measure completion

Track when a form is started, submitted successfully or returns an error. Compare completion and errors before and after the change, accounting for device, traffic source and intent. If one field accounts for most corrections on mobile, inspect its instructions and keyboard type before redesigning the whole form.

## Try a submission with two errors using the keyboard

Fill in a valid street, an unsupported postal code and an incomplete email address. Submit with the keyboard. The page should preserve the street, explain both errors and let you reach each field. On a long form an error summary with links to the affected fields saves a visual search. At each field, associate the error text with aria-describedby and use aria-invalid while the error is present.

On the second attempt fix only the postal code. Its error should disappear, while the email error and the corrected value should remain. The guide to [actionable error messages](/blog/i-messaggi-di-errore-non-ti-stanno-giudicando) covers how to explain what the person can do next.

## Sources

- [W3C WAI — Form instructions](https://www.w3.org/WAI/tutorials/forms/instructions/)
- [W3C WAI — Error identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html)
