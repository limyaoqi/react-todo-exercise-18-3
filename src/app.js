import TodoList from "./components/todo_list";
import Form from "./components/add_new_form";
import { useState } from "react";

export default function App() {
  const [check, setCheck] = useState(false)
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      text: "Task 1",
      isCompleted: true,
    },
    {
      id: 2,
      text: "Task 2",
      isCompleted: check,
    },
    {
      id: 3,
      text: "Task 3",
      isCompleted: check,
    },
  ]);
  return (
    <div
      className="card rounded shadow-sm"
      style={{ maxWidth: "500px", margin: " 60px auto" }}
    >
      <div className="card-body">
        <h3 className="card-title mb-3">My Todo List</h3>
        <TodoList todoList={todoList} setTodoList={setTodoList} setCheck={setCheck} />
        <Form todoList={todoList} setTodoList={setTodoList} />
      </div>
    </div>
  );
}
