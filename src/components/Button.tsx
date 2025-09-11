import type { ReactElement, ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  disabled?: true | undefined;
  onClick: () => void;
}

export function Button({
  children,
  disabled,
  onClick,
}: ButtonProps): ReactElement {
  return (
    <button className={styles["button"]} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
