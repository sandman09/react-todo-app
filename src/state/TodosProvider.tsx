import { type ReactNode, useReducer } from "react";
import { TodoDispatchContext, TodoStateContext } from "./todosContext";
import { todosReducer } from "./todosReducer";

export function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, dispatch] = useReducer(todosReducer, []);

  return (
    <TodoStateContext value={todos}>
      <TodoDispatchContext value={dispatch}>{children}</TodoDispatchContext>
    </TodoStateContext>
  );
}
