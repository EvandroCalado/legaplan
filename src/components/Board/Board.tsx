import { FC } from "react";
import { Button } from "../Button";
import "./Board.scss";

export type BoardProps = {
  children?: React.ReactNode;
};

export const Board: FC<BoardProps> = ({ children }) => {
  return (
    <section className="board">
      <h2 className="board-title">Suas tarefas de hoje</h2>

      {children}
      <Button>Adcionar nova tarefa</Button>
    </section>
  );
};
