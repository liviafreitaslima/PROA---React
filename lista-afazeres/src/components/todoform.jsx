import { useState } from "react";

function ToDoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(value);

    setValue('')
  };
  return (
    <>
      <form action="" className="TodoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input" value={value}
          placeholder="Qual é sua tarefa para hoje?"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="todo-btn">
          Nova tarefa
        </button>
      </form>
    </>
  );
}

export default ToDoForm;
