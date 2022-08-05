import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./index.css";

const Counter = () => {
  let navigate = useNavigate();

  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const showUserData = () => {
    let path = "/user-details";
    navigate(path);
  };

  return (
    <div>
      <p>count: {count}</p>
      <button className="btn" onClick={incrementCount}>
        Increment
      </button>
      <div className="get-data-btn">
        <button onClick={showUserData}>Get User Data</button>
      </div>
    </div>
  );
};

export default Counter;
