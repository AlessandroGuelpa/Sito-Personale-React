You are editing product variants in a React list. You type “Check label” next to the red variant, then reverse the list. The names move into the new order. Your note appears next to the black variant. Two rows are enough to reproduce this, even with all the data already in the browser.

## How an array index ties state to a position

With an array index as the `key`, React still sees the keys `0` and `1` after the reorder. The component in the second position keeps key `1`. Its name changes because it gets new props. Its draft remains in the state of the component React reused. Inserting or removing a row above the one being edited can produce the same effect.

## Reproduce it with two variants

This example uses the variant ID as the key. Each row keeps its own draft in local state.

~~~jsx
import { useState } from 'react';

const variants = [
  { id: 'v-101', name: 'Black' },
  { id: 'v-102', name: 'Red' },
];

function VariantRow({ variant }) {
  const [note, setNote] = useState('');

  return (
    <li>
      <label>
        Note for the {variant.name} variant
        <input value={note} onChange={(event) => setNote(event.target.value)} />
      </label>
    </li>
  );
}

export default function VariantNotes() {
  const [reversed, setReversed] = useState(false);
  const rows = reversed ? [...variants].reverse() : variants;

  return (
    <>
      <button type="button" onClick={() => setReversed((current) => !current)}>
        Reverse order
      </button>
      <ul>
        {rows.map((variant) => (
          <VariantRow key={variant.id} variant={variant} />
        ))}
      </ul>
    </>
  );
}
~~~

To reproduce the bug, take `(variant, index)` in `map` and replace `key={variant.id}` with `key={index}`. Enter a note for Red and click **Reverse order**. The note moves to Black, which now occupies the second position. Repeat with ID-based keys and the note follows Red into the first position.

## Choose an ID for each row

Use an ID that is stable and unique among siblings. Set the key on the component returned by `map`, here `VariantRow`. If the variant’s name is the key, correcting a typo can remount the row and clear its note. A key generated with `Math.random()` also changes over renders with identical data.

When the same variant can appear twice, such as two separately customised items in a basket, use the ID of the specific basket line. For a row created before the server assigns an ID, you can give it a local ID when it is added and keep that key even after saving. The server response can then update the row data while the person keeps editing their note.

## Decide whether drafts should survive filtering

A stable key preserves which row owns the note while React keeps that row mounted. If a filter hides Red, React unmounts the component. When the row comes back, its input starts empty even with the same ID. To recover the draft, keep it in a map keyed by ID in the component that owns the list. Where you [store state in React](/blog/entanglement-quantistico-e-i-disastri-del-global-state) determines how long an edit is available.

For a list that supports reordering, removal and filters, enter two different notes and check the value of each input after every operation. Correct names on the rows can hide a draft attached to the wrong one.

## Sources

- [React on keys when rendering lists](https://react.dev/learn/rendering-lists)
- [React on preserving and resetting state](https://react.dev/learn/preserving-and-resetting-state)
