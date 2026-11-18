import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import renderWithProviders from "@/test-utils";
import TodoSection from "./components/TodoSection";

describe("TodoSection", () => {
  const setup = () => {
    const user = userEvent.setup();
    renderWithProviders(<TodoSection />);

    return {
      user,
      input: screen.getByRole("textbox", { name: /task input/i }),
      addButton: screen.getByRole("button", { name: /add/i }),
    };
  };

  it("adds a todo", async () => {
    const { user, input, addButton } = setup();

    await user.type(input, "Buy milk");
    await user.click(addButton);

    expect(screen.getByText("Buy milk")).toBeInTheDocument();
  });

  it("toggles a todo", async () => {
    const { user, input, addButton } = setup();
    await user.type(input, "Finish report");
    await user.click(addButton);

    const checkbox = screen.getByRole("checkbox", { name: "Finish report" });
    await user.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  it("deletes a todo", async () => {
    const { user, input, addButton } = setup();
    await user.type(input, "Clean desk");
    await user.click(addButton);

    await user.click(screen.getByRole("button", { name: "Delete Clean desk" }));

    expect(screen.queryByText("Clean desk")).not.toBeInTheDocument();
  });

  it("throws when rendered outside TodosProvider", () => {
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});

    try {
      expect(() => render(<TodoSection />)).toThrow(
        "useTodosState must be used inside <TodosProvider>",
      );
    } finally {
      consoleError.mockRestore();
    }
  });
});
