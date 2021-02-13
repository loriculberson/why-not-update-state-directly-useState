import React from "react";

function ItemList({ items }) {
  return (
    <div>
      <ul>
        {
          items.map(item => {
            return <li key={item.id}>{item.id}: {item.value}</li>
           } )
        }
      </ul>
    </div>
  );
}

export default ItemList;
