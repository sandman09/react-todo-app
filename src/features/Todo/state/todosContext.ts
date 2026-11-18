import { createContext, type Dispatch } from "react";
import { type Todo } from "@/types/todo";
import type { TodosAction } from "./todosReducer";

export const TodoStateContext = createContext<readonly Todo[] | null>(null);
export const TodoDispatchContext = createContext<Dispatch<TodosAction> | null>(null);
