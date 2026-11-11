import { type Todo } from "@/types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: readonly Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div role="status" className="rounded-2xl border border-dashed border-slate-700/80 bg-slate-950/30 px-5 py-10 text-center">
        <div className="mx-auto mb-3 flex size-11 items-center justify-center rounded-full bg-slate-800/80 text-slate-400">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5">
            <path d="M8 6.5h12M8 12h12M8 17.5h12M4 6.5h.01M4 12h.01M4 17.5h.01" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
          </svg>
        </div>
        <p className="text-sm font-medium text-slate-300">todo list is empty</p>
        <p className="mt-1 text-sm text-slate-500">Add a task above to get started.</p>
      </div>
    );
  }

  return (
    <ul aria-label="Your tasks" className="space-y-3">
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem todo={todo} onToggle={onToggle} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
