import { createContext, type Dispatch } from "react";
import { type Todo } from "@/types/todo";
import type { TodosAction } from "./TodosReducer";

export const TodoStateContext = createContext<readonly Todo[] | null>([]);
export const TodosDispatchContext = createContext<Dispatch<TodosAction> | null>(null);
