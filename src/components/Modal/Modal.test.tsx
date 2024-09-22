import { fireEvent, render, screen } from "@testing-library/react";
import { Modal } from "./Modal";

describe("<Modal />", () => {
  const mockSetIsOpen = vi.fn();
  const mockOnClick = vi.fn();

  it("should render modal with title and button primary", () => {
    render(<Modal title="Adicionar tarefa" buttonVariant="primary" />);

    expect(screen.getByText("Adicionar tarefa")).toBeInTheDocument();
    expect(screen.getByLabelText(/título/i)).toBeInTheDocument();
  });

  it("should render modal with title and message", () => {
    render(<Modal title="Remover tarefa" buttonVariant="danger" />);

    expect(screen.getByText("Remover tarefa")).toBeInTheDocument();
    expect(screen.getByText(/deseja deletar essa tarefa/i)).toBeInTheDocument();
  });

  it("should call onAddTask when input valur changes", () => {
    const mockOnAddTask = vi.fn();

    render(
      <Modal
        title="Adicionar tarefa"
        buttonVariant="primary"
        isOpen
        onAddTask={mockOnAddTask}
      />
    );

    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "test" } });

    expect(mockOnAddTask).toHaveBeenCalledTimes(1);
    expect(mockOnAddTask).toHaveBeenCalledWith("test");
  });

  it("should call setIsOpen with null when Cancel button is clicked", () => {
    const mockOnAddTask = vi.fn();

    render(
      <Modal
        title="Adicionar tarefa"
        buttonVariant="primary"
        isOpen
        onAddTask={mockOnAddTask}
        setIsOpen={mockSetIsOpen}
        onClick={mockOnClick}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: /cancelar/i }));

    expect(mockSetIsOpen).toHaveBeenCalledWith(null);
  });
});
