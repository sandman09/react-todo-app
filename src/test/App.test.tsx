import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import App from "@/App";

describe("App.tsx test suite", () => {
  const setup = () => {
    const user = userEvent.setup();
    render(<App />);

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: /add/i });

    return { user, input, button };
  };

  it("Full flow, add a todo, see it appear, toggle it and see it checked, delete it and see it disapear", async () => {
    const { user, input, button } = setup();

    await user.type(input, "test task 1");
    await user.click(button);

    expect(screen.getByText("test task 1")).toBeInTheDocument();

    const checkbox = screen.getByRole("checkbox");
    await user.click(checkbox);
    expect(checkbox).toBeChecked();

    await user.click(screen.getByRole("button", { name: /delete/i }));
    expect(screen.queryByText("test task 1")).not.toBeInTheDocument();
  });

  it("Adding two todos with the same title creates two distinct items (this guards against using the title as a key or id).", async () => {
    const { user, input, button } = setup();

    await user.type(input, "test task 1");
    await user.click(button);
    await user.type(input, "test task 1");
    await user.click(button);

    const list = screen.getByRole("list");
    const items = within(list).getAllByRole("listitem");

    expect(items).toHaveLength(2);
  });
});
