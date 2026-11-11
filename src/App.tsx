import "./App.css";
import { useState } from "react";
import { type Todo } from "./types/todo";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAdd = (title: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
  };

  const onToggle = (id: string) => {
    setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };
  const onDelete = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-slate-950 px-4 py-12 text-slate-200 sm:px-6 sm:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-112 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.16),transparent_65%)]"
      />
      <div className="mx-auto w-full max-w-2xl">
        <header className="mb-10 text-center sm:mb-12">
          <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-400/10 text-indigo-300 shadow-lg shadow-indigo-950/40">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-7">
              <path
                d="m7 12.5 3.2 3.2L17.5 8"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              />
              <path
                d="M12 3.5 19.5 7v5c0 4.4-3 7.4-7.5 8.5C7.5 19.4 4.5 16.4 4.5 12V7L12 3.5Z"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <p className="mb-2 text-sm font-medium tracking-[0.2em] text-indigo-300 uppercase">
            A calmer kind of productivity
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
            Make room for what matters.
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-7 text-slate-400">
            Keep your next steps in one place, and take them one at a time.
          </p>
        </header>

        <section
          aria-label="Todo list"
          className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-5 shadow-2xl shadow-black/30 backdrop-blur sm:p-8"
        >
          <AddTodoForm onAdd={onAdd} />
          <TodoList todos={todos} onDelete={onDelete} onToggle={onToggle} />
        </section>

        <p className="mt-6 text-center text-xs text-slate-500">Small steps add up. You’ve got this.</p>
      </div>
    </main>
  );
}

export default App;
