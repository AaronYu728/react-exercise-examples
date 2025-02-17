import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    if (count == 0) {
      return;
    }
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}
