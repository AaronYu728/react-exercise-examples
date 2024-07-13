import React, { useState } from "react";

export default function ToDoItem(props) {
  const [isStyle, setIsStyle] = useState(false);

  function setLineThrough() {
    setIsStyle((preState) => {
      return !preState;
    });
  }

  return (
    <div onClick={setLineThrough}>
      <li style={{ textDecoration: isStyle && "line-through" }}>
        {props.text} &nbsp;&nbsp;
        {/* <button
          onClick={() => {
            props.onChecked(props.id);
          }}
        >
          X
        </button> */}
      </li>
    </div>
  );
}
