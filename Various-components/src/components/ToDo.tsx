import { ChangeEvent, useState } from "react";

function ToDo() {
  interface TodoType {
    text: String;
  }

  const [todos, setTodos] = useState<TodoType[]>([]);
  const [currentTodo, setCurrentTodo] = useState("");

  function handleAddTodos() {
    const todo = {
      text: currentTodo,
    };
    if (currentTodo.trim() !== "") {
      setTodos((t) => [...t, todo]);

      // reset input
      setCurrentTodo("");
    }
  }

  function handleCurrentTodo(event: ChangeEvent<HTMLInputElement>) {
    setCurrentTodo(event.target.value);
  }

  function handleDeleteTodo(index: number) {
    setTodos((f) => f.filter((_object, i) => i !== index));
  }

  function handleMove(index: number, moveUp: boolean) {
    if (moveUp) {
      if (index > 0) {
        const updatedTodos = [...todos];
        [updatedTodos[index], updatedTodos[index - 1]] = [
          updatedTodos[index - 1],
          updatedTodos[index],
        ];
        setTodos(updatedTodos);
      }
    } else {
      if (index + 1 !== todos.length) {
        const updatedTodos = [...todos];
        [updatedTodos[index], updatedTodos[index + 1]] = [
          updatedTodos[index + 1],
          updatedTodos[index],
        ];
        setTodos(updatedTodos);
      }
    }
  }

  return (
    <div>
      <h2>Todo List</h2>
      <div className="todo-input-container">
        <input type="text" value={currentTodo} onChange={handleCurrentTodo} />
        <button type="button" onClick={handleAddTodos}>
          Add Todo
        </button>
      </div>
      <div className="todo-list-container">
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo.text}{" "}
              <button type="button" onClick={() => handleMove(index, true)}>
                Move up
              </button>{" "}
              <button type="button" onClick={() => handleMove(index, false)}>
                Move Down
              </button>{" "}
              <button onClick={() => handleDeleteTodo(index)}>
                Delete Todo
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDo;
