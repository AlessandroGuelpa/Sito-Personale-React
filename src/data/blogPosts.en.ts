import { inventoryArticleIds, inventoryArticleRoutes } from "../config/locales";
import type { BlogPost } from "./blogPosts";

export const englishBlogPosts: Record<string, BlogPost> = {
  [inventoryArticleRoutes.en]: {
    id: inventoryArticleIds.en,
    title: "Shopify–ERP Inventory Sync: Handling Concurrent Stock Updates",
    date: "2026-11-16",
    category: "sviluppo-software",
    hub: "shopify-integrazioni",
    excerpt:
      "Keep Shopify and ERP inventory in sync when orders arrive mid-update. Use compare-and-swap, reconcile stock movements, and retry safely.",
    tags: ["Shopify", "Inventory", "ERP"],
    content: `
A Shopify–ERP sync job reads 10 units available at a location. The ERP records a correction of two units, so the job prepares to set the quantity to 12. Before it writes, a Shopify order takes the available stock down to 9. Writing 12 based on the earlier read would overwrite the stock change from that sale.

## Check the quantity at the point of writing

In the Shopify GraphQL Admin API 2026-10, use \`inventorySetQuantities\` when the calling system is authoritative for that quantity. Send the number the job read as \`changeFromQuantity\` and the intended total as \`quantity\`. Shopify compares the expected quantity for the same inventory item, location and stock state when it processes the mutation.

For the example above, the mutation input would look like this:

\`\`\`json
{
  "name": "available",
  "reason": "correction",
  "quantities": [
    {
      "inventoryItemId": "gid://shopify/InventoryItem/1001",
      "locationId": "gid://shopify/Location/2001",
      "changeFromQuantity": 10,
      "quantity": 12
    }
  ]
}
\`\`\`

With 9 units now available, Shopify returns \`CHANGE_FROM_QUANTITY_STALE\`. A fresh read followed by an unconditional write still leaves time for another order to arrive. Keeping the comparison on the mutation closes that gap.

## Reconcile the order before retrying

After a conflict, read the current quantity and check which stock movements the ERP has processed. Suppose the original correction was an addition of two units and the ERP has yet to account for the order. The reconciled total is 11. If the ERP has already recorded the order, use its reconciled figure and avoid deducting the sale twice.

Decide which system owns the inventory item and location before choosing a mutation. An authoritative snapshot fits \`inventorySetQuantities\`. A relative movement, such as receiving two units, can fit \`inventoryAdjustQuantities\` when that movement is the intended business operation.

The 2026-10 version of \`inventorySetQuantities\` requires an idempotency key via \`@idempotent\`. Reuse the key and the payload when retrying the same request after a timeout. Once reconciliation produces a different write, send it with a new key. For a GraphQL response, also check the mutation’s \`userErrors\` so a response with HTTP 200 and a stock conflict never counts as a successful sync.

## Reproduce the race in a test store

Pause the job immediately after it reads 10 units. Place a test order and confirm that the same location now has 9. Resume the job and verify that the write is rejected and the stock stays at 9. Then let the job reconcile the order and the ERP correction and verify the new total.

Log the inventory item, location, API version, expected quantity and error code to make conflicts diagnosable. Keep a periodic reconciliation job for missed events and other discrepancies between systems. The compare-and-swap check protects one update, and reconciliation repairs divergence across the two systems.

**Shopify documentation**

- [Set absolute inventory quantities](https://shopify.dev/docs/api/admin-graphql/2026-10/mutations/inventorySetQuantities)
- [Apply an inventory adjustment](https://shopify.dev/docs/api/admin-graphql/2026-10/mutations/inventoryAdjustQuantities)
- [Use idempotency keys](https://shopify.dev/docs/api/usage/idempotent-requests)
`,
  },
};
