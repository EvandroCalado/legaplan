"use client";

import { FC } from "react";
import { Button, ButtonVariant } from "../Button";
import { TaskProps } from "../Task";
import "./Modal.scss";

export type ModalProps = {
  title: string;
  buttonVariant: ButtonVariant;
  isOpen?: boolean;
  setIsOpen?: (task: TaskProps | null) => void;
  onClick?: () => void;
  onAddTask?: (title: string) => void;
};

export const Modal: FC<ModalProps> = ({
  title,
  buttonVariant = "primary",
  isOpen,
  setIsOpen,
  onClick,
  onAddTask,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onAddTask?.(event.target.value);
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <h2 className="modal-content-title">{title}</h2>

        {buttonVariant === "primary" && (
          <div className="modal-content-add">
            <label htmlFor="add">Título</label>
            <input
              id="add"
              type="text"
              placeholder="Digite"
              onChange={handleChange}
            />
          </div>
        )}

        {buttonVariant === "danger" && (
          <span className="modal-content-delete">
            Tem certeza que você deseja deletar essa tarefa?
          </span>
        )}

        <div className="modal-content-buttons">
          <Button variant="ghost" onClick={() => setIsOpen?.(null)}>
            Cancelar
          </Button>
          <Button variant={buttonVariant} onClick={onClick}>
            {buttonVariant === "primary" ? "Adicionar" : "Deletar"}
          </Button>
        </div>
      </div>
    </div>
  );
};
