import TodoList from "./components/todo_list";
import Form from "./components/add_new_form";
import { useState } from "react";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [ isCheck, setIsCheck] = useState(false)
  return (
    <div
      className="card rounded shadow-sm"
      style={{ maxWidth: "500px", margin: " 60px auto" }}
    >
      <div className="card-body">
        <h3 className="card-title mb-3">My Todo List</h3>
        <TodoList todoList={todoList} setTodoList={setTodoList} />
        <Form todoList={todoList} setTodoList={setTodoList} />
      </div>
    </div>
  );
}
