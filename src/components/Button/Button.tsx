import { FC } from "react";
import "./Button.scss";

export type ButtonProps = {
  variant?: "primary" | "danger" | "ghost";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ children, variant = "primary" }) => {
  const variantClass = variant && `button button-${variant}`;

  return <button className={variantClass}>{children}</button>;
};
