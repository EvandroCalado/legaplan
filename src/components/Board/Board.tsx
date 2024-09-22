"use client";

import { FC, useState } from "react";
import { Button } from "../Button";
import { Modal } from "../Modal";
import { Task, TaskProps } from "../Task";
import "./Board.scss";

export type BoardProps = {
  initialTasks?: TaskProps[];
};

export const Board: FC<BoardProps> = ({ initialTasks }) => {
  const [tasks, setTasks] = useState<TaskProps[]>(initialTasks || []);
  const [inputValue, setInputValue] = useState<string>("");
  const [onAdd, setOnAdd] = useState<boolean>(false);
  const [onDelete, setOnDelete] = useState<TaskProps | null>(null);

  const tasksNotFinished = tasks.filter((task) => !task.finished);
  const tasksFinished = tasks.filter((task) => task.finished);

  const onFinished = (id: string) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, finished: !task.finished } : task
      )
    );
  };

  const onAddTask = (title: string) => {
    setInputValue(title);
  };

  const handleAddNewTask = () => {
    const newTask: TaskProps = {
      id: `${tasks.length + 1}`,
      task: inputValue,
      finished: false,
    };
    setTasks([...tasks, newTask]);
    setOnAdd(false);
    setInputValue("");
  };

  const onRemove = (currentTaks: TaskProps) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== currentTaks.id));
  };

  return (
    <section className="board">
      {onDelete && (
        <Modal
          title="Deletar tarefa"
          buttonVariant="danger"
          isOpen={!!onDelete}
          setIsOpen={setOnDelete}
          onClick={() => {
            onRemove(onDelete);
            setOnDelete(null);
          }}
          onAddTask={onAddTask}
        />
      )}

      {onAdd && (
        <Modal
          title="Nova tarefa"
          buttonVariant="primary"
          isOpen={onAdd}
          setIsOpen={() => setOnAdd(false)}
          onClick={handleAddNewTask}
          onAddTask={onAddTask}
        />
      )}

      <div className="board-content">
        <h2 className="board-content-title">Suas tarefas de hoje</h2>

        {tasksNotFinished.length === 0 && (
          <span className="board-content-empty">Nenhuma tarefa pendente !</span>
        )}

        {tasksNotFinished.length !== 0 &&
          tasksNotFinished.map((task) => (
            <Task
              key={task.id}
              {...task}
              onFinished={() => onFinished(task.id)}
              onRemove={() => setOnDelete(task)}
            />
          ))}

        {tasksFinished.length !== 0 && (
          <>
            <h2 className="board-content-title">Tarefas finalizadas</h2>
            {tasksFinished.map((task) => (
              <Task
                key={task.id}
                {...task}
                onFinished={() => onFinished(task.id)}
                onRemove={() => setOnDelete(task)}
              />
            ))}
          </>
        )}
      </div>

      <Button onClick={() => setOnAdd(true)}>Adicionar nova tarefa</Button>
    </section>
  );
};
