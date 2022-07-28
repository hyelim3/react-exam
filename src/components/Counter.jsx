import React, { useState } from "react";

function Counter({ counter, setCounter }) {
  const addCount = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <div>{counter}번 클릭했습니다.</div>
      <button onClick={addCount}>Click me</button>
    </div>
  );
  return;
}

export default Counter; //내보내기 const
