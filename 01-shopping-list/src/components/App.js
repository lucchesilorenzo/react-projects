import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import ItemList from "./ItemList";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    const confirmed = window.confirm(
      "Are you sure you want to do delete the item?"
    );

    if (confirmed) setItems(items.filter((item) => item.id !== id));
  }

  return (
    <>
      <Header />
      <div className="app">
        <Form onAddItem={handleAddItem} />
        <ItemList items={items} onDeleteItem={handleDeleteItem} />
      </div>
    </>
  );
}
