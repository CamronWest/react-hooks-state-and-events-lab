import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {

  const [items, setItems] = useState(itemData);  
  const [toggle, setToggle] = useState(false);
    function handleToggle(){
        setToggle((toggle) => !toggle);
        
    }

  const appClass = !!toggle ? "App dark" : "App light"
  const modeText = !!toggle ? "light Mode" : "dark Mode"
  

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick = {handleToggle}>{modeText}</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
