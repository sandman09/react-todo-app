import { useContext, type Dispatch } from "react";
import { type Todo } from "@/types/todo";
import type { TodosAction } from "@/state/TodosReducer";

export function useTodosState(context: React.Context<Todo>) {
  const value = useContext(context);
  if (value === null) {
    throw new Error("useTodosState must be used inside <TodosProvider>");
  }
  return value;
}

export function useTodosDispatch(context: React.Context<Dispatch<TodosAction>>) {
  const value = useContext(context);
  if (value === null) {
    throw new Error("useTodosDispatch must be used inside <TodosProvider>");
  }
  return value;
}
