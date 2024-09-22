import { Meta, StoryFn } from "@storybook/react";
import { Board, BoardProps } from ".";

const initialTasks = [
  {
    id: 1,
    task: "Lavar as maos",
  },
  {
    id: 2,
    task: "fazer um bolo",
  },
  {
    id: 3,
    task: "Lavar a louça",
  },
  {
    id: 4,
    task: "Levar o lixo para fora",
    finished: true,
  },
];

export default {
  title: "Components/Board",
  component: Board,
  args: {
    initialTasks,
  },
} as Meta;

export const Default: StoryFn<BoardProps> = (args) => <Board {...args} />;
