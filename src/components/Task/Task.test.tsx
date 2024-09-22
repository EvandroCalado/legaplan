import { fireEvent, render, screen } from "@testing-library/react";
import { Task } from "./Task";

describe("<Task />", () => {
  it("should render a task", () => {
    render(<Task id="1" task="test" />);

    expect(screen.getByRole("article")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByText("test")).toBeInTheDocument();
  });

  it("should render a finished task", () => {
    render(<Task id="1" task="test" finished />);

    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("should call onFinished", () => {
    const onFinished = vi.fn();
    render(<Task id="1" task="test" onFinished={onFinished} />);

    const task = screen.getByText("test");

    fireEvent.click(task);

    expect(onFinished).toHaveBeenCalledTimes(1);
  });

  it("should call onRemove", () => {
    const onRemove = vi.fn();
    render(<Task id="1" task="test" onRemove={onRemove} />);

    const trash = screen.getByLabelText("Remover");

    fireEvent.click(trash);

    expect(onRemove).toHaveBeenCalledTimes(1);
  });
});
