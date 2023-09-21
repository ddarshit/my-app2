import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleonclick = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <div>
        <button onClick={handleonclick} className="px-5 mx-5 my-5 py-2 rounded">
          Click me
        </button>
        <p className="mx-5">count is : {count}</p>
      </div>
    </>
  );
}
