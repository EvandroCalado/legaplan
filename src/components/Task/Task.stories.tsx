import { Meta, StoryFn } from "@storybook/react";
import { Task, TaskProps } from ".";

export default {
  title: "Components/Task",
  component: Task,
  args: {
    task: "Lavar as mãos",
  },
  argTypes: {
    onFinished: {
      action: "finished",
    },
    onRemove: {
      action: "removed",
    },
  },
} as Meta;

export const Default: StoryFn<TaskProps> = (args) => <Task {...args} />;

export const Finished: StoryFn<TaskProps> = (args) => (
  <Task {...args} finished />
);
