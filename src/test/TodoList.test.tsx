import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import TodoList from "../components/TodoList";

describe("TodoList", () => {
  it("renders one list item per todo", () => {
    const todos = [
      { id: "1", title: "First todo", completed: false },
      { id: "2", title: "Second todo", completed: true },
    ];

    render(<TodoList todos={todos} onDelete={vi.fn()} onToggle={vi.fn()} />);

    expect(screen.getAllByRole("listitem")).toHaveLength(todos.length);
    expect(screen.getByText("First todo")).toBeInTheDocument();
    expect(screen.getByText("Second todo")).toBeInTheDocument();
  });

  it("shows the empty-state message when given an empty array", () => {
    render(<TodoList todos={[]} onDelete={vi.fn()} onToggle={vi.fn()} />);

    expect(screen.getByText(/todo list is empty/i)).toBeInTheDocument();
  });
});
