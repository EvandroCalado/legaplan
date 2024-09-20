import { Meta, StoryFn } from "@storybook/react";
import { Modal, ModalProps } from ".";

export default {
  title: "Components/Modal",
  component: Modal,
  args: {
    title: "Nova tarefa",
    children: "Adcionar nova tarefa",
  },
} as Meta;

export const Default: StoryFn<ModalProps> = (args) => <Modal {...args} />;

export const VariantDanger: StoryFn<ModalProps> = (args) => (
  <Modal {...args} buttonVariant="danger">
    <span style={{ color: "rgba(0, 0, 0, 0.54)" }}>
      Tem certeza que deseja excluir esta tarefa?
    </span>
  </Modal>
);
