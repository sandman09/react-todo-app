import { type ReactNode, useReducer } from "react";
import { TodosDispatchContext, TodoStateContext } from "./TodosContext";
import { TodosReducer } from "./TodosReducer";

export function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, dispatch] = useReducer(TodosReducer, []);

  return (
    <TodoStateContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={dispatch}>{children}</TodosDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}
