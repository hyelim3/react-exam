import React, { useState } from "react";
import Counter from "./components/Counter";
import Converter from "./components/Converter";
import MyBtn from "./components/MyBtn";

function App() {
  const [counter, setCounter] = useState(0); //useState(0) 초기상태 0 counter에 영향
  return (
    <>
      <Counter counter={counter} setCounter={setCounter} />
      <Converter counter={counter} />
      <hr />
      <MyBtn
        text={"1번 버튼"}
        fontSize={"30px"}
        alertMsg={"1번이 클릭됨"}
        isChecked={false}
      />
      <MyBtn
        text={"2번 버튼"}
        fontSize={"20px"}
        alertMsg={"2번이 클릭됨"}
        isChecked={true}
        padding={"30px"}
      />
      <MyBtn text={"3번 버튼"} fontSize={"30px"} />
    </>
  );
}

export default App;
