import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }
  function decrement() {
    setCounter(counter - 1);
  }
  return (
    <div>
      <h1>Task1</h1>
      <h2 style={{ fontSize: "40px" }}>{counter}</h2>
      <button
        style={{
          width: "50px",
          height: "50px",
          margin: "10px",
          fontSize: "30px",
        }}
        onClick={increment}
      >
        +
      </button>
      <button
        style={{
          width: "50px",
          height: "50px",
          margin: "10px",
          fontSize: "30px",
        }}
        onClick={decrement}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
