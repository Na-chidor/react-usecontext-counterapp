import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter</h1>
      <p style={{ fontSize: "2em" }}>{count}</p>
      <button onClick={() => setIsRunning(true)} style={{ margin: "5px", padding: "10px 20px" }}>
        Start
      </button>
      <button onClick={() => setIsRunning(false)} style={{ margin: "5px", padding: "10px 20px" }}>
        Stop
      </button>
    </div>
  );
};

export default Counter;
