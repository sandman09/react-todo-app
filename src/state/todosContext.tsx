import { createContext } from "react";
import { type Todo } from "@/types/todo";

export const todoStateContext = createContext<Todo[] | null>([]);

//export const todoDispatchContext...
