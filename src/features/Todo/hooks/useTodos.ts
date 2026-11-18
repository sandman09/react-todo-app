import { useContext } from "react";
import { TodoStateContext, TodoDispatchContext } from "@/features/Todo/state/todosContext";

export function useTodosState() {
  const value = useContext(TodoStateContext);
  if (value === null) {
    throw new Error("useTodosState must be used inside <TodosProvider>");
  }
  return value;
}

export function useTodosDispatch() {
  const value = useContext(TodoDispatchContext);
  if (value === null) {
    throw new Error("useTodosDispatch must be used inside <TodosProvider>");
  }
  return value;
}
