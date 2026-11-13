import { useContext } from "react";
import { type Todo } from "@/types/todo";

export function useTodosState(context: React.Context<Todo>) {
  const value = useContext(context);
  if (value === null) {
    throw new Error("useTodosState must be used inside <TodosProvider>");
  }
  return value;
}
