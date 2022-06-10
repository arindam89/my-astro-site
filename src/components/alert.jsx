import React, { useState } from "react";

export default function Alert() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
        className="font-bold"
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Decrement
      </button>
      <p>Counter value is: {counter}</p>
    </>
  );
}
