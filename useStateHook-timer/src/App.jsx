import "./styles.css";

import { useState } from "react";

export default function App() {
  const timenow = new Date().toLocaleTimeString();
  const [currentTime, setTime] = useState(timenow);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  // setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}
