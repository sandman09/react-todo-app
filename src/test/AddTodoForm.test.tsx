import { render, screen } from "@testing-library/react";
import { describe, it, vi, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import AddTodoForm from "@/components/AddTodoForm";

describe("Testing Todo adding form", () => {
  const setup = () => {
    const user = userEvent.setup();
    const onAdd = vi.fn();
    render(<AddTodoForm onAdd={onAdd} />);

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: /add/i });

    return { user, onAdd, input, button };
  };

  it("calls onAdd once with the trimmed title", async () => {
    const { user, onAdd, input, button } = setup();

    await user.type(input, "   Buy milk   ");
    await user.click(button);

    expect(onAdd).toHaveBeenCalledTimes(1);
    expect(onAdd).toHaveBeenCalledWith("Buy milk");
  });

  it("clears the input after a successful submit", async () => {
    const { user, input, button } = setup();

    await user.type(input, "Buy milk");
    expect(input).toHaveValue("Buy milk");

    await user.click(button);
    expect(input).toHaveValue("");
  });

  it("does not call onAdd when the input is empty", async () => {
    const { user, onAdd, button } = setup();

    await user.click(button);
    expect(onAdd).not.toHaveBeenCalled();
  });

  it("does not call onAdd when the input is whitespace only", async () => {
    const { user, onAdd, input, button } = setup();

    await user.type(input, "         ");
    await user.click(button);

    expect(onAdd).not.toHaveBeenCalled();
  });
});
