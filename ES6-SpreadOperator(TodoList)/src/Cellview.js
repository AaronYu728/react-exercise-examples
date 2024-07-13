import React, { useState } from "react";
export default function Cellview(props) {
  const [isStyle, setIsStyle] = useState(false);
  return (
    <div>
      <li
        key="{props.index}"
        style={{ textDecoration: isStyle && "line-through" }}
      >
        {props.item} &nbsp;&nbsp;
        <button
          onClick={() => {
            props.onChecked(props.id);
          }}
        >
          X
        </button>
      </li>
    </div>
  );
}
