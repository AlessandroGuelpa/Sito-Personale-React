A product might need engraving text, a gift message or another detail specific to one order line. Shopify’s native **line item properties** let a theme collect that detail in the product form. Check whether they cover the full requirement before adding a dependency.

The property needs to follow the right line through checkout. If another system receives that order, [idempotency at the webhook boundary](/blog/webhook-idempotenza-ordini) helps keep a repeated notification from creating another order. Catalogue information that applies to every purchase of a product belongs to the product data and its [ERP synchronisation](/blog/webhook-riconciliazione-sincronizzazione).

## Collect the property in the product form

Shopify recognises inputs named `properties[Property name]` when they are submitted with the product form. Here is the relevant part of a Liquid theme:

~~~liquid
{% form 'product', product %}
  <label for="engraving">Engraving text</label>
  <input
    id="engraving"
    type="text"
    name="properties[Engraving]"
    maxlength="20"
  >
  <button type="submit">Add to cart</button>
{% endform %}
~~~

The theme still needs to submit the selected variant and support the rest of its product-form behaviour. A line item property belongs to one line. Cart attributes describe the cart itself, so choose the storage location based on where the information is needed during fulfilment.

## Check whether a native field covers the requirement

A short text field often fits the native feature. Preview rendering, rule-based surcharges, complex validation or a production workflow may need additional code or an app. Evaluate the full flow from product form to fulfilment before choosing how to implement it.

## Test the full path to fulfilment

Try multiple variants and quantities. Add a product through the theme’s AJAX cart and place a test order. Confirm that the value stayed with the intended line and reaches any downstream system that uses it. For example, a workshop needs to know which of two otherwise identical items carries the engraving request.

An HTML `maxlength` gives shoppers immediate feedback. Enforce any length or character requirements that matter to fulfilment in the application or downstream process as well.

## Sources

- [Shopify Liquid line item properties](https://shopify.dev/docs/api/liquid/objects/line_item)
- [Shopify product templates and forms](https://shopify.dev/docs/storefronts/themes/architecture/templates/product/overview)
