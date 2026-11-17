import { describe, expect, it } from "vitest";
import { TodosReducer, type TodosState } from "@/state/TodosReducer";

describe("todosReducer", () => {
  const firstTodo = { id: "1", title: "First todo", completed: false };
  const secondTodo = { id: "2", title: "Second todo", completed: true };

  it("adds a todo to the end of the list", () => {
    const state: TodosState = [firstTodo];
    const newTodo = { id: "3", title: "New todo", completed: false };

    expect(TodosReducer(state, { type: "added", todo: newTodo })).toEqual([firstTodo, newTodo]);
    expect(state).toEqual([firstTodo]);
  });

  it("toggles only the todo with the matching id", () => {
    const state: TodosState = [firstTodo, secondTodo];

    expect(TodosReducer(state, { type: "toggled", id: "1" })).toEqual([
      { ...firstTodo, completed: true },
      secondTodo,
    ]);
    expect(state).toEqual([firstTodo, secondTodo]);
  });

  it("deletes only the todo with the matching id", () => {
    const state: TodosState = [firstTodo, secondTodo];

    expect(TodosReducer(state, { type: "deleted", id: "1" })).toEqual([secondTodo]);
    expect(state).toEqual([firstTodo, secondTodo]);
  });
});
