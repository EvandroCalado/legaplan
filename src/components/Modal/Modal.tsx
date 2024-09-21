import { FC } from "react";
import { Button, ButtonVariant } from "../Button";
import "./Modal.scss";

export type ModalProps = {
  title: string;
  buttonVariant: ButtonVariant;
};

export const Modal: FC<ModalProps> = ({ title, buttonVariant = "primary" }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className="modal-content-title">{title}</h2>

        {buttonVariant === "primary" && (
          <div className="modal-content-add">
            <label htmlFor="add">Título</label>
            <input id="add" type="text" placeholder="Digite" />
          </div>
        )}

        {buttonVariant === "danger" && (
          <span className="modal-content-delete">
            Tem certeza que você deseja deletar essa tarefa?
          </span>
        )}

        <div className="modal-content-buttons">
          <Button variant="ghost">Cancelar</Button>
          <Button variant={buttonVariant}>
            {buttonVariant === "primary" ? "Adicionar" : "Deletar"}
          </Button>
        </div>
      </div>
    </div>
  );
};
