import React, { useState } from "react";
// 삼항연산자

function Converter({ counter }) {
  return <div>{counter % 2 === 0 ? "짝수" : "홀수"}</div>;
}
export default Converter;
