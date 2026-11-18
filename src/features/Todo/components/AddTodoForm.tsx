import { useState } from "react";

interface AddTodoFormProps {
  onAdd: (title: string) => void;
}

function AddTodoForm({ onAdd }: AddTodoFormProps) {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todoTitle = inputText.trim();
    if (todoTitle === "") {
      return;
    }
    setInputText("");
    onAdd(todoTitle);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-7">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-slate-100">Your tasks</h2>
        <p className="mt-1 text-sm text-slate-400">What would you like to get done?</p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          aria-label="task input"
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="e.g. Plan the week ahead"
          className="min-w-0 flex-1 rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 shadow-inner shadow-black/10 outline-none transition placeholder:text-slate-500 hover:border-slate-600 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-400/10"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-950/40 transition hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300 active:scale-[0.98] sm:min-w-28"
        >
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-4">
            <path d="M10 4v12M4 10h12" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
          </svg>
          Add
        </button>
      </div>
    </form>
  );
}

export default AddTodoForm;
