import { type ReactNode, useReducer } from "react";
import { TodosDispatchContext, TodoStateContext } from "./todosContext";
import { todosReducer } from "./todosReducer";

export function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, dispatch] = useReducer(todosReducer, []);

  return (
    <TodoStateContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={dispatch}>{children}</TodosDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}
