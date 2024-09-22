"use client";

import { useModal, useTasks } from "@/hooks";
import { FC, useState } from "react";
import { Button } from "../Button";
import { Modal } from "../Modal";
import { Task, TaskProps } from "../Task";
import "./Board.scss";

export type BoardProps = {
  initialTasks?: TaskProps[];
};

export const Board: FC<BoardProps> = ({ initialTasks = [] }) => {
  const {
    tasksNotFinished,
    tasksFinished,
    addTask,
    removeTask,
    toggleTaskFinished,
  } = useTasks(initialTasks);
  const { isOpen, modalTask, openModal, closeModal, openWithTask } = useModal();
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    if (!inputValue.trim) return;

    addTask(inputValue);
    closeModal();
    setInputValue("");
  };

  return (
    <section className="board">
      {modalTask && (
        <Modal
          title="Deletar tarefa"
          buttonVariant="danger"
          isOpen={isOpen}
          setIsOpen={closeModal}
          onClick={() => {
            removeTask(modalTask.id);
            closeModal();
          }}
        />
      )}

      {isOpen && !modalTask && (
        <Modal
          title="Nova tarefa"
          buttonVariant="primary"
          isOpen={isOpen}
          setIsOpen={closeModal}
          onClick={handleAddTask}
          onAddTask={setInputValue}
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
              onFinished={() => toggleTaskFinished(task.id)}
              onRemove={() => openWithTask(task)}
            />
          ))}

        {tasksFinished.length !== 0 && (
          <>
            <h2 className="board-content-title">Tarefas finalizadas</h2>
            {tasksFinished.map((task) => (
              <Task
                key={task.id}
                {...task}
                onFinished={() => toggleTaskFinished(task.id)}
                onRemove={() => openWithTask(task)}
              />
            ))}
          </>
        )}
      </div>

      <Button onClick={openModal}>Adicionar nova tarefa</Button>
    </section>
  );
};
