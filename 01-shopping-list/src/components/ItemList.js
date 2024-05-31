import Item from "./Item";

export default function ItemList({ items, onDeleteItem }) {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} onDeleteItem={onDeleteItem} />
        ))}
      </ul>
    </div>
  );
}
