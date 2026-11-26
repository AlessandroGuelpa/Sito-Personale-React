A React component stores its cart lines and the total. Every quantity change, discount or removal now has two values to update. If one path updates only the lines, the screen can show a total for an older cart.

That is a question of [state ownership in React](/blog/entanglement-quantistico-e-i-disastri-del-global-state). If the current lines fully determine the total, calculate it from them during render. If the interface shows a change before the server confirms it, the [optimistic update](/blog/dilatazione-temporale-interstellar-e-optimistic-ui) also needs a way to roll back the lines when the request fails.

## Calculate a total from the current lines

This example uses integer prices in cents, integer quantities and a single currency. The formatter is responsible for presentation. Taxes, discounts and rounding need the rules of the actual checkout.

~~~jsx
function CartTotal({ items }) {
  const totalCents = items.reduce(
    (sum, item) => sum + item.priceCents * item.quantity,
    0
  );

  const formatted = new Intl.NumberFormat("it-IT", {
    style: "currency", currency: "EUR"
  }).format(totalCents / 100);

  return <output>{formatted}</output>;
}
~~~

## Keep the calculation in the render path

An Effect that calculates the total and writes it to another state field can produce a render with the previous value and a second update. Deriving it during render lets the lines and their total come from the same snapshot. If profiling shows that the calculation is expensive, consider `useMemo` as a performance optimisation. The result should still be correct when React recomputes it.

## Verify the amount at checkout

The displayed total helps the person using the cart. The server that completes the order still verifies prices and the rules that apply to the payment. In the UI, change a quantity and remove an item. Check the resulting total in both cases. If the lines are updated optimistically, also verify the total after the server rejects a change and the UI restores the previous cart.

If each cart row also keeps local state, check [how React keys preserve identity when rows move](/blog/react-key-liste-indice-stato).

## Source

- [React on calculating derived values during render](https://react.dev/learn/you-might-not-need-an-effect)
