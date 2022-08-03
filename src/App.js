import React, { useRef, useState } from "react";
import TodoInsert from "./components/TodoInsert";
import TodoTemplate from "./components/TodoTemplate";
import TodoList from "./components/TodoList";
import TodoEdit from "./components/TodoEdit";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [insertToggle, setInsertToggle] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
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

  const onInsertToggle = () => {
    setInsertToggle((prev) => !prev);
  }; //이전 상태 prev

  const onRemove = (id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      setTodos((todos) => todos.filter((todo) => todo.id !== id)); //setTodo받아옴 돌다가 id가 같으면 삭제, filter 걸리는 것만 남김
    }
  }; //setTodos를 수정 -> todos를 불러와서 todos에 있는 todo 중에 id값이 다르면 남아있어!
  //onSubmit: 할일 객체 클릭- selectedtodo에 값이 담김. 뿌려준 것은 남기고 text로 수정 submi-제출될 때

  const onToggle = (id) => {
    //눌렀을 때 어떤 일이 일어나는지
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList
        todos={todos}
        onRemove={onRemove}
        onToggle={onToggle}
        onInsertToggle={onInsertToggle}
        setSelectedTodo={setSelectedTodo}
      />
      {insertToggle && (
        <TodoEdit onInsertToggle={onInsertToggle} selectedTodo={selectedTodo} />
      )}
    </TodoTemplate>
  );
};

export default App;
