import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("<Button />", () => {
  it("should render a button default", () => {
    render(<Button>Adicionar nova tarefa</Button>);

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText(/Adicionar nova tarefa/i)).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveClass("button-primary");
  });

  it("should render a button with danger variant", () => {
    render(<Button variant="danger">Adicionar nova tarefa</Button>);

    expect(screen.getByRole("button")).toHaveClass("button-danger");
  });

  it("should render a button with danger variant", () => {
    render(<Button variant="ghost">Adicionar nova tarefa</Button>);

    expect(screen.getByRole("button")).toHaveClass("button-ghost");
  });

  it("should call onClick when onClick is passed", () => {
    const onClick = vi.fn();

    render(<Button onClick={onClick}>Adicionar nova tarefa</Button>);

    fireEvent.click(screen.getByRole("button"));

    expect(onClick).toHaveBeenCalled();
  });
});
