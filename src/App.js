import React, { useRef, useState } from "react";
import TodoInsert from "./components/TodoInsert";
import TodoTemplate from "./components/TodoTemplate";
import TodoList from "./components/TodoList";
import TodoEdit from "./components/TodoEdit";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [insertToggle, setInsertToggle] = useState(false);
  const nextId = useRef(1);
  const onInsert = (text) => {
    const todo = {
      id: nextId.current,
      text: text,
      checked: false,
    };
    setTodos((todos) => todos.concat(todo));
    nextId.current++;
  };
  const onToggle = (id) => {
    //눌렀을 때 어떤 일이 일어나는지
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const onInsertToggle = () => {
    setInsertToggle((prev) => !prev);
  }; //이전 상태 prev

  const onRemove = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id)); //setTodo받아옴 돌다가 id가 같으면 삭제, filter 걸리는 것만 남김
  }; //setTodos를 수정 -> todos를 불러와서 todos에 있는 todo 중에 id값이 다르면 남아있어!

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList
        todos={todos}
        onToggle={onToggle}
        onRemove={onRemove}
        onInsertToggle={onInsertToggle}
      />
      {insertToggle && <TodoEdit onInsertToggle={onInsertToggle} />}
    </TodoTemplate>
  );
};

export default App;
