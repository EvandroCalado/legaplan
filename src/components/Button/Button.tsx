import { FC } from "react";
import "./Button.scss";

export type ButtonVariant = "primary" | "danger" | "ghost";

export type ButtonProps = {
  variant?: ButtonVariant;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...rest
}) => {
  const variantClass = variant && `button button-${variant}`;

  return (
    <button className={variantClass} {...rest}>
      {children}
    </button>
  );
};
