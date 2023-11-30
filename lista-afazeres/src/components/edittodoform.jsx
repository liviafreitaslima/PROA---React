import { useState } from "react";

function EditToDoForm({ editTodo, task }) {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);

    setValue("");
  };
  return (
    <>
      <form action="" className="TodoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          value={value}
          placeholder="Atualizar tarefa"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="todo-btn">
          Salvar mudanças
        </button>
      </form>
    </>
  );
}

export default EditToDoForm;
