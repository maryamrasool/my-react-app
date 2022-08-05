import React, { useState } from "react";
import "./index.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <div>
      <p>count: {count}</p>
      <button className="btn" onClick={incrementCount}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
