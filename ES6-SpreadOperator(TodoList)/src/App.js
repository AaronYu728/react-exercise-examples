import "./styles.css";
import React, { useState } from "react";
import Cellview from "./Cellview";

export default function App() {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState("");

  function changeHandle(event) {
    const text = event.target.value;
    setInputText(text);
  }

  function addItem() {
    if (inputText.length > 0) {
      setItems((preValue) => {
        return [...preValue, inputText];
      });
    }
  }

  function deleteLiview(id) {
    setItems((preItems) => {
      return preItems.filter((item, index) => {
        return id !== index;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={changeHandle} type="text" />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => {
            return (
              <Cellview
                key={index}
                id={index}
                item={item}
                onChecked={deleteLiview}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
