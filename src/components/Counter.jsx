import React, { useState, useEffect } from "react";

const Counter = ({ counter, setCounter }) => {
  const [searchWord, setSearchWord] = useState("");
  const addCounter = () => {
    setCounter(counter + 1);
  };

  const onChange = (e) => {
    setSearchWord(e.target.value);
  };

  // 검색시 호출
  useEffect(() => {
    // API 호출 코드
    console.log("API 호출");
  }, []);

  useEffect(() => {
    console.log("change input");
  }, [searchWord]);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  return (
    <div>
      <input
        type="text"
        onChange={onChange}
        value={searchWord}
        placeholder="검색어"
      />
      <div>{counter}번 클릭했습니다.</div>
      <button onClick={addCounter}>Click me</button>
    </div>
  );
};

export default Counter; //내보내기 const
