import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import TodoItem from "../components/TodoItem";

describe("Testing TodoItem", () => {
  const todo = { id: "todo-1", title: "Test todo", completed: false };

  it("renders the title and an unchecked checkbox when incomplete", () => {
    render(<TodoItem todo={todo} onToggle={vi.fn()} onDelete={vi.fn()} />);

    expect(screen.getByText(todo.title)).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  it("renders a checked checkbox when complete", async () => {
    const onToggle = vi.fn();
    const user = userEvent.setup();
    render(<TodoItem todo={{ ...todo, completed: true }} onToggle={onToggle} onDelete={vi.fn()} />);

    await user.click(screen.getByRole("checkbox"));

    /*  expect(onToggle).toHaveBeenCalledTimes(1);
    expect(onToggle).toHaveBeenCalledWith(todo.id); */

    expect(screen.getByRole("checkbox", { name: todo.title })).toBeChecked();
  });

  it("calls onToggle with the todo id when the checkbox is clicked", async () => {
    const onToggle = vi.fn();
    const user = userEvent.setup();
    render(<TodoItem todo={todo} onToggle={onToggle} onDelete={vi.fn()} />);

    await user.click(screen.getByRole("checkbox"));

    expect(onToggle).toHaveBeenCalledWith(todo.id);
  });

  it("calls onDelete with the todo id when the delete button is clicked", async () => {
    const onDelete = vi.fn();
    const user = userEvent.setup();
    render(<TodoItem todo={todo} onToggle={vi.fn()} onDelete={onDelete} />);

    await user.click(screen.getByRole("button", { name: /delete/i }));

    expect(onDelete).toHaveBeenCalledWith(todo.id);
  });
});
