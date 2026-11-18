import { useTodosDispatch, useTodosState } from "@/hooks/useTodos";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

function TodoSection() {
  const todos = useTodosState();
  const dispatch = useTodosDispatch();
  const handleAdd = (title: string) =>
    dispatch({ type: "added", todo: { id: crypto.randomUUID(), completed: false, title: title } });

  const handleToggle = (id: string) => dispatch({ type: "toggled", id: id });
  const handleDelete = (id: string) => dispatch({ type: "deleted", id: id });

  return (
    <>
      <AddTodoForm onAdd={handleAdd} />
      <TodoList todos={todos} onDelete={handleDelete} onToggle={handleToggle} />
    </>
  );
}

export default TodoSection;
