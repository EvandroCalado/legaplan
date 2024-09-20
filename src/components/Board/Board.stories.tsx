import { Meta, StoryFn } from "@storybook/react";
import { Board, BoardProps } from ".";
import { Task } from "../Task";

export default {
  title: "Components/Board",
  component: Board,
  args: {
    children: (
      <>
        <Task task="Lavar as maos" />
        <Task task="Lavar as maos" />

        <h2 className="board-title">Terefas finalizadas</h2>

        <Task task="Lavar as maos" finished />
      </>
    ),
  },
} as Meta;

export const Default: StoryFn<BoardProps> = (args) => <Board {...args} />;
