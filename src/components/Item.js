import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [isIn, setIsIn] = useState(true);

  function handleClick() {
    setIsIn((isIn) => !isIn);
  }

  const inCart = !isIn ? "in-cart" : "";
  const addOrRemove = !!isIn ? "Add to Cart" : "Remove From Cart";

  return (
    <li className= {inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick = {handleClick} className="add">{addOrRemove}</button>
    </li>
  );
}

export default Item;
