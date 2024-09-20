import { FC } from "react";
import { Button, ButtonVariant } from "../Button";
import "./Modal.scss";

export type ModalProps = {
  title: string;
  buttonVariant: ButtonVariant;
  children?: React.ReactNode;
};

export const Modal: FC<ModalProps> = ({
  title,
  buttonVariant = "primary",
  children,
}) => {
  return (
    <div className="modal">
      <h2 className="modal-title">{title}</h2>

      {children}

      <div className="modal-buttons">
        <Button variant="ghost">Cancelar</Button>
        <Button variant={buttonVariant}>Cancelar</Button>
      </div>
    </div>
  );
};
