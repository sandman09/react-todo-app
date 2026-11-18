import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type { Todo } from "@/types/todo";
import { TodosProvider } from "@/features/Todo/state/TodosProvider";
import { useTodosDispatch, useTodosState } from "./useTodos";

describe("useTodos hooks", () => {
  it("updates useTodosState when a todo is added", () => {
    const todo: Todo = { id: "1", title: "Test todo", completed: false };
    const { result } = renderHook(
      () => ({ todos: useTodosState(), dispatch: useTodosDispatch() }),
      { wrapper: TodosProvider },
    );

    act(() => {
      result.current.dispatch({ type: "added", todo });
    });

    expect(result.current.todos).toEqual([todo]);
  });

  it("throws when useTodosState is rendered outside TodosProvider", () => {
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});

    try {
      expect(() => renderHook(() => useTodosState())).toThrow(
        "useTodosState must be used inside <TodosProvider>",
      );
    } finally {
      consoleError.mockRestore();
    }
  });

  it("throws when useTodosDispatch is rendered outside TodosProvider", () => {
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});

    try {
      expect(() => renderHook(() => useTodosDispatch())).toThrow(
        "useTodosDispatch must be used inside <TodosProvider>",
      );
    } finally {
      consoleError.mockRestore();
    }
  });
});
