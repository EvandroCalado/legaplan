import { TaskProps } from "@/components";
import { useState } from "react";

export const useTasks = (initialTasks: TaskProps[] = []) => {
  const [tasks, setTasks] = useState<TaskProps[]>(initialTasks);

  const addTask = (title: string) => {
    const newTask: TaskProps = {
      id: `${tasks.length + 1}`,
      task: title,
      finished: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const removeTask = (taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskFinished = (taskId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, finished: !task.finished } : task
      )
    );
  };

  const tasksNotFinished = tasks.filter((task) => !task.finished);
  const tasksFinished = tasks.filter((task) => task.finished);

  return {
    tasks,
    tasksNotFinished,
    tasksFinished,
    addTask,
    removeTask,
    toggleTaskFinished,
  };
};
