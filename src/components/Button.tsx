import type { ReactElement, ReactNode } from "react";

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
    <button className="button" disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
