/* eslint-disable react-refresh/only-export-components */
import { TodosProvider } from "./features/Todo/state/TodosProvider";
import type { ReactElement } from "react";
import { render, type RenderOptions } from "@testing-library/react";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <TodosProvider>{children}</TodosProvider>;
};

const renderWithProviders = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export default renderWithProviders;
