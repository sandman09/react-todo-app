import { describe, expect, it } from "vitest";
import { todosReducer as todosReducer, type TodosState } from "@/features/Todo/state/todosReducer";
import type { Todo } from "@/types/todo";

describe("todosReducer", () => {
  const firstTodo = { id: "1", title: "First todo", completed: false };
  const secondTodo = { id: "2", title: "Second todo", completed: true };
  const freezeTodos = (...todos: Todo[]): TodosState =>
    Object.freeze(todos.map((todo) => Object.freeze({ ...todo })));

  it("adds a todo to the end of the list", () => {
    const state = freezeTodos(firstTodo);
    const newTodo = { id: "3", title: "New todo", completed: false };

    expect(todosReducer(state, { type: "added", todo: newTodo })).toEqual([firstTodo, newTodo]);
    expect(state).toEqual([firstTodo]);
  });

  it("toggles only the todo with the matching id", () => {
    const state = freezeTodos(firstTodo, secondTodo);
    const result = todosReducer(state, { type: "toggled", id: "1" });

    expect(result).toEqual([{ ...firstTodo, completed: true }, secondTodo]);
    expect(result[1]).toBe(state[1]);
    expect(state).toEqual([firstTodo, secondTodo]);
  });

  it("preserves the state when toggling an unknown id", () => {
    const state = freezeTodos(firstTodo, secondTodo);

    expect(todosReducer(state, { type: "toggled", id: "unknown" })).toEqual(state);
  });

  it("deletes only the todo with the matching id", () => {
    const state = freezeTodos(firstTodo, secondTodo);

    expect(todosReducer(state, { type: "deleted", id: "1" })).toEqual([secondTodo]);
    expect(state).toEqual([firstTodo, secondTodo]);
  });

  it("preserves the state when deleting an unknown id", () => {
    const state = freezeTodos(firstTodo, secondTodo);

    expect(todosReducer(state, { type: "deleted", id: "unknown" })).toEqual(state);
  });
});
