/* eslint-disable @typescript-eslint/no-explicit-any */
import { useModal, useTasks } from "@/hooks";
import { fireEvent, render, screen } from "@testing-library/react";
import { Board } from "./Board";

vi.mock("@/hooks", () => ({
  useTasks: vi.fn(),
  useModal: vi.fn(),
}));

describe("<Board />", () => {
  const tasksNotFinishedMock = [
    { id: "1", task: "Tarefa 1", isFinished: false },
    { id: "2", task: "Tarefa 2", isFinished: false },
  ];

  const tasksFinishedMock = [{ id: "3", title: "Tarefa 3", isFinished: true }];

  const useTasksMock = {
    tasksNotFinished: tasksNotFinishedMock,
    tasksFinished: tasksFinishedMock,
    addTask: vi.fn(),
    removeTask: vi.fn(),
    toggleTaskFinished: vi.fn(),
  };

  const useModalMock = {
    isOpen: false,
    modalTask: null,
    openModal: vi.fn(),
    closeModal: vi.fn(),
    openWithTask: vi.fn(),
  };

  beforeEach(() => {
    (useTasks as any).mockReturnValue(useTasksMock);
    (useModal as any).mockReturnValue(useModalMock);
  });

  it("should render a board correctly", () => {
    render(<Board initialTasks={tasksNotFinishedMock} />);

    expect(screen.getByText("Tarefa 1")).toBeInTheDocument();
    expect(screen.getByText("Tarefa 2")).toBeInTheDocument();
    expect(screen.getByText("Adicionar nova tarefa")).toBeInTheDocument();
  });

  it("should render a new task", () => {
    (useModal as any).mockReturnValue({ ...useModalMock, isOpen: true });

    render(<Board initialTasks={tasksNotFinishedMock} />);

    const input = screen.getByLabelText("Título");
    const addButton = screen.getByText("Adicionar");

    fireEvent.change(input, { target: { value: "Nova tarefa" } });
    fireEvent.click(addButton);

    expect(useTasksMock.addTask).toHaveBeenCalledWith("Nova tarefa");
  });

  it("toggles task completion", () => {
    render(<Board initialTasks={tasksNotFinishedMock} />);

    const task = screen.getByText("Tarefa 1");
    fireEvent.click(task);

    expect(useTasksMock.toggleTaskFinished).toHaveBeenCalledWith("1");
  });

  it("remove a task", () => {
    (useModal as any).mockReturnValue({
      ...useModalMock,
      isOpen: true,
      modalTask: tasksNotFinishedMock[0],
    });

    render(<Board />);

    const deleteButton = screen.getAllByLabelText("Remover");

    fireEvent.click(deleteButton[0]);

    const confirmButton = screen.getByRole("button", { name: "Deletar" });

    fireEvent.click(confirmButton);

    expect(useTasksMock.removeTask).toHaveBeenCalledWith("1");
  });

  it("remove a task", () => {
    (useTasks as any).mockReturnValue({
      ...useTasksMock,
      tasksNotFinished: [],
    });

    render(<Board />);

    expect(screen.getByText("Nenhuma tarefa pendente !")).toBeInTheDocument();
  });
});
