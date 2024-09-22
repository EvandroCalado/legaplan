import { TaskProps } from "@/components";
import { useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalTask, setModalTask] = useState<TaskProps | null>(null);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setModalTask(null);
  };

  const openWithTask = (task: TaskProps) => {
    setModalTask(task);
    openModal();
  };

  return {
    isOpen,
    modalTask,
    openModal,
    closeModal,
    openWithTask,
  };
};
