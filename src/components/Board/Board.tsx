"use client";

import { FC, useState } from "react";
import { Button } from "../Button";
import { Task, TaskProps } from "../Task";
import "./Board.scss";

export type BoardProps = {
  initialTasks?: TaskProps[];
};

export const Board: FC<BoardProps> = ({ initialTasks }) => {
  const [tasks, setTasks] = useState<TaskProps[]>(initialTasks || []);

  const tasksNotFinished = tasks.filter((task) => !task.finished);
  const tasksFinished = tasks.filter((task) => task.finished);

  return (
    <section className="board">
      <div className="board-content">
        <h2 className="board-content-title">Suas tarefas de hoje</h2>
        {tasksNotFinished && tasksNotFinished.length === 0 ? (
          <p className="board-content-no-tasks">Nenhuma tarefa encontrada</p>
        ) : (
          tasksNotFinished.map((task) => <Task key={task.id} {...task} />)
        )}

        {tasksFinished && (
          <>
            <h2 className="board-content-title">Tarefas finalizadas</h2>
            {tasksFinished.map((task) => (
              <Task key={task.id} {...task} finished />
            ))}
          </>
        )}
      </div>

      <Button>Adcionar nova tarefa</Button>
    </section>
  );
};
