import TodoItem from "./todo_item";

export default function TodoList({ todoList, setTodoList }) {
  return (
    <ul className="list-group">
      {todoList.map((todo) => {
        const { text, id, isCompleted } = todo;
        return (
          <TodoItem
            key={id}
            text={text}
            id={id}
            isCompleted={isCompleted}
            isChecked={(id) => {
              const i = todoList.findIndex(todo=>todo.id == id)
              const updateTodo = [...todoList]
              {isCompleted?updateTodo[i].isCompleted = false:updateTodo[i].isCompleted = true}
              setTodoList(updateTodo)
            }}
            onDelete={(id) =>
              setTodoList(todoList.filter((todo) => todo.id !== id))
            }
          />
        );
      })}
    </ul>
  );
}
