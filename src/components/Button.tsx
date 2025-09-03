import type { ReactElement, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  disabled?: true | undefined;
  onClick: () => void;
}

function Button({ children, disabled, onClick }: ButtonProps): ReactElement {
  return (
    <button className="button" disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
