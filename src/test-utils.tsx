import { TodosProvider } from "./state/TodosProvider";
import App from "./App";

function RenderWithProviders() {
  return (
    <TodosProvider>
      <App />
    </TodosProvider>
  );
}

export default RenderWithProviders;
