import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="mx-5 mt-5">
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
        placeholder="Enter a new text"
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul className="mx-5 mt-5">
        {todos.map((todo, index) => (
            <li key={index}>
              {todo} 
              <button className="mx-5 mt-2" onClick={() => removeTodo(index)}>Remove</button>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
