import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (!text.trim()) return;
    setTodos([...todos, { id: Date.now(), text, done: false }]);
    setText("");
  };

  const toggleTodo = (id) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div>
      <h2>Todo List</h2>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add Todo"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <span
              style={{
                textDecoration: t.done ? "Line-through" : "none",
                cursor: "pointer",
              }}
              onClick={() => toggleTodo(t.id)}
            >
              {t.text}
            </span>
            <button onClick={() => deleteTodo(t.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
