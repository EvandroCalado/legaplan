import { Meta, StoryFn } from "@storybook/react";
import { Button, ButtonProps } from ".";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Adcionar nova tarefa",
  },
} as Meta;

export const Default: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Danger: StoryFn<ButtonProps> = (args) => (
  <Button {...args} variant="danger" />
);

export const Ghost: StoryFn<ButtonProps> = (args) => (
  <Button {...args} variant="ghost" />
);
