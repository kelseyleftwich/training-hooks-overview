import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState<number>(0);

  const addOne = () => setCount(prev => prev + 1);

  const subtractOne = () => setCount(prev => prev - 1);

  const resetCount = () => setCount(0);

  return (
    <>
      <h1>Use State</h1>
      <p>Count: {count}</p>
      <button onClick={addOne}>Add 1</button>
      <button onClick={subtractOne}>Subtract 1</button>
      <button onClick={resetCount}>Reset Count</button>
    </>
  );
};

export default UseState;
