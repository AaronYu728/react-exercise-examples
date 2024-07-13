import "./styles.css";
import { useState } from "react";

export default function App() {
  const [isOver, setIsOver] = useState(false);
  function isOvered() {
    setIsOver(true);
  }
  function mouseout() {
    setIsOver(false);
  }
  const btnStyle = {
    backgroundColor: isOver ? "black" : "white",
  };

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={btnStyle} onMouseOver={isOvered} onMouseOut={mouseout}>
        Submit
      </button>
    </div>
  );
}
