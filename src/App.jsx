import React, { useState } from "react";
import Counter from "./components/Counter";
import Converter from "./components/Converter";
import MyBtn from "./components/MyBtn";

function App() {
  const [todos, setTodos] = useState([]); //할일목록
  const [todo, setTodo] = useState(""); //할 일
  const onChange = (e) => {
    setTodo(e.target.value);
  };

  const [counter, setCounter] = useState(0); //useState(0) 초기상태 0 counter에 영향
  const [active, setActive] = useState(true);
  // const onChange = (event) => {
  // setMinutes(event.target.value);
  //   console.log(event);
  //   setCounter(event.target.value); //input 활성화
  // };
  const reset = () => {
    setCounter(0);
  };
  const changeActive = () => {
    reset();
    setActive((prevState) => {
      return !prevState;
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (todo === "") {
      alert("1글자 이상 입력해주세요");
      return;
      // 밑에 실행 안됨 끝남
    }
    setTodos((currentArray) => [todo, ...currentArray]);
    setTodo("");
  };

  return (
    <>
      <div>
        <h1>할 일</h1>
        <form onSubmit={onSubmit}>
          {/* //제출할 대 함수 실행 */}
          <input
            type="text"
            onChange={onChange}
            value={todo}
            placeholder="할 일을 적어주세요."
          />
          <button
            onClick={() => {
              console.log(todos);
            }}
          >
            등록
          </button>
        </form>

        <button
          onClick={() => {
            console.log(todos);
          }}
        >
          check
        </button>
        <hr />
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
        <hr />
      </div>
      <Counter counter={counter} setCounter={setCounter} />
      <hr />
      <div>Time Converter</div>
      <div>
        Minutes{" "}
        <input
          type="number"
          placeholder="Minutes"
          value={active ? counter : counter * 60}
          onChange={onChange}
          disabled={!active} //비활성화=true 활성화가 되려면 false
        />
        <div>
          Hours{" "}
          <input
            type="number"
            placeholder="Hours"
            value={active ? Math.floor(counter / 60) : counter}
            disabled={active}
            onChange={onChange}
          />
        </div>
        <button onClick={reset}>reset</button>
        <button onClick={changeActive}>active toggle</button>
      </div>
      <hr />
    </>
  );
}

export default App;
