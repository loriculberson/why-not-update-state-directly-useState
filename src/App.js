import React, { useState, useEffect } from "react";
import ItemList from './ItemList';
import "./style.css";

export default function App() {
   // Initialize items to an empty array
  const [items, setItems] = useState([])
  useEffect(() => console.log('items:', items))
  // Initialize a counter that will increment
  // for each item ID

  const makeItem = () => {
    // Create a new ID and use
    // a random number as the value
    return {
      id: items.length,
      value: Math.floor((Math.random()*10000)+1)
    };
  }

   // The Right Way:
  // copy the existing items and add a new one
  const addItemImmutably = () => {
    setItems([...items, makeItem()])
  };

  // The Wrong Way:
  // mutate items and set it back
  const addItemMutably = () => {
    items.push(makeItem());
    setItems(items);
  };

  const reset = () => {
    setItems([])
  }

  return (
    <div>
      <h3>Don't mutate state directly</h3>
      <button onClick={addItemImmutably}>
        Add item immutably (good)
      </button>
      <button onClick={addItemMutably}>
        Add item mutably (bad)
      </button>
      <button onClick={reset}>Reset</button>
      <ItemList 
        items={items} 
      />
    </div>
  );
}
