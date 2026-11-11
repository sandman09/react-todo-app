import { type Todo } from "@/types/todo";

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

function TodoItem({ todo, onDelete, onToggle }: TodoItemProps) {
  const checkboxId = `todo-${todo.id}`;

  return (
    <div className="group flex items-center gap-3 rounded-xl border border-slate-800/80 bg-slate-950/40 px-4 py-3 transition hover:border-slate-700 hover:bg-slate-950/70">
      <input
        id={checkboxId}
        className="size-4 shrink-0 cursor-pointer rounded border-slate-600 bg-slate-800 text-indigo-500 accent-indigo-400 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
        type="checkbox"
        onChange={() => onToggle(todo.id)}
        checked={todo.completed}
      />
      <label
        htmlFor={checkboxId}
        className={`min-w-0 flex-1 cursor-pointer wrap-break-word text-sm leading-6 transition ${
          todo.completed ? "text-slate-500 line-through" : "text-slate-200"
        }`}
      >
        {todo.title}
      </label>
      <button
        className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg text-slate-500 transition hover:bg-rose-400/10 hover:text-rose-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-300"
        onClick={() => onDelete(todo.id)}
        aria-label="Delete"
      >
        <svg aria-hidden="true" focusable="false" viewBox="0 0 20 20" fill="none" className="size-4">
          <path d="m6 6 8 8m0-8-8 8" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
          <path
            d="M3.5 5.5h13M8 5.5v-2h4v2m-6.5 0 .7 11h7.6l.7-11"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="1.4"
          />
        </svg>
      </button>
    </div>
  );
}

export default TodoItem;
