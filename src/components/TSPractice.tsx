import { useState, ChangeEvent } from "react";
import TodoItem from "./TodoItem";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

type Filter = "all" | "active" | "completed";

export default function TSPractice() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [text, setText] = useState<string>("");
    const [filter, setFilter] = useState<Filter>("all");

    const addTodo = () => {
        if (!text.trim()) return;

        const newTodo: Todo = {
            id: Date.now(),
            text,
            done: false,
        };
        setTodos([...todos, newTodo]);
        setText("");
    };

    const toggleTodo = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, done: !todo.done } : todo
            )
        );
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const filteredTodos = todos.filter((todo) => {
        if (filter === "active") return !todo.done;
        if (filter === "completed") return todo.done;
        return true;
    });

    return (
        <div>
            <h1>TypeScript Todo List</h1>
            <input
                value={text}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
                placeholder="New todo list item"
            />
            <button onClick={addTodo}>Add Todo</button>

            <div style={{ marginTop: "1rem" }}>
                <button
                    onClick={() => setFilter("all")}
                    style={{ fontWeight: filter === "all" ? "bold" : "normal" }}
                >
                    All
                </button>
                <button
                    onClick={() => setFilter("active")}
                    style={{ fontWeight: filter === "active" ? "bold" : "normal", marginLeft: "0.5rem" }}
                >
                    Active
                </button>
                <button
                    onClick={() => setFilter("completed")}
                    style={{ fontWeight: filter === "completed" ? "bold" : "normal", marginLeft: "0.5rem" }}
                >
                    Completed
                </button>
            </div>

            <ul>
                {filteredTodos.map((t) => (
                    <TodoItem
                        key={t.id}
                        todo={t}
                        onToggle={toggleTodo}
                        onDelete={deleteTodo}
                    />
                ))}
            </ul>
        </div>
    );

}