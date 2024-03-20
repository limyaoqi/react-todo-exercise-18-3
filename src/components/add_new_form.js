import { useState } from "react";

export default function Form({ todoList, setTodoList }) {
  const [addTodo, setAddTodo] = useState("");
  return (
    <div className="mt-4">
      <form
        className="d-flex justify-content-between align-items-center"
        onSubmit={(e) => {
          e.preventDefault();
          setTodoList([
            ...todoList,
            {
              id: Math.random(),
              text: addTodo,
              isCompleted: false,
            },
          ]);
          setAddTodo("");
        }}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Add new item..."
          required
          value={addTodo}
          onChange={(e) => setAddTodo(e.target.value)}
        />
        <button className="btn btn-primary btn-sm rounded ms-2">Add</button>
      </form>
    </div>
  );
}
