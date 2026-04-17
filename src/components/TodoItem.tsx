import type { Todo } from "./TSPractice";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <span
        onClick={() => onToggle(todo.id)}
        style={{
          textDecoration: todo.done ? "line-through" : "none",
          cursor: "pointer",
          flex: 1,
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}
