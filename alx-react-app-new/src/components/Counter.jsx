import React from "react";
import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>The count is : {count}</p>
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={() => setCount(count + 1)}
          style={{
            padding: "3px",
            backgroundColor: "blue",
            color: "white",
            borderRadius: "5px",
          }}
        >
          Add Count
        </button>
        <button
          onClick={() => setCount(count - 1)}
          style={{
            padding: "3px",
            backgroundColor: "blue",
            color: "white",
            borderRadius: "5px",
          }}
        >
          Subtract Count
        </button>
        <button
          onClick={() => setCount(0)}
          style={{
            padding: "3px",
            backgroundColor: "blue",
            color: "white",
            borderRadius: "5px",
          }}
        >
          Reset Count
        </button>
      </div>
    </>
  );
}

export default Counter;
