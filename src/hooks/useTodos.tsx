import { useContext } from "react";
import { TodoStateContext, TodosDispatchContext } from "@/state/todosContext.ts";

export function useTodosState() {
  const value = useContext(TodoStateContext);
  if (value === null) {
    throw new Error("useTodosState must be used inside <TodosProvider>");
  }
  return value;
}

export function useTodosDispatch() {
  const value = useContext(TodosDispatchContext);
  if (value === null) {
    throw new Error("useTodosDispatch must be used inside <TodosProvider>");
  }
  return value;
}
