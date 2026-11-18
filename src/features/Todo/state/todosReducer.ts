import { type Todo } from "@/types/todo";
import { assertNever } from "@/lib/assertNever";

export type TodosState = readonly Todo[];

export type TodosAction =
  | { type: "added"; todo: Todo }
  | { type: "toggled"; id: string }
  | { type: "deleted"; id: string };

export const todosReducer = (state: TodosState, action: TodosAction): TodosState => {
  switch (action.type) {
    case "added":
      return [...state, action.todo];

    case "toggled":
      return state.map((todo) => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo));

    case "deleted":
      return state.filter((todo) => todo.id !== action.id);

    default:
      return assertNever(action);
  }
};
