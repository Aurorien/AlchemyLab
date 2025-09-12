"use client";
import { useFormStatus } from "react-dom";
import { SpinningLoader } from "@/components";
import styles from "./SubmitButton.module.css";

interface SubmitButtonProps {
  text: string;
  loadingText: string;
  disabled: boolean;
}

export function SubmitButton({
  text,
  loadingText,
  disabled = false,
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  if (pending) {
    return (
      <button
        type="submit"
        className={styles["submit-button"]}
        disabled
        aria-live="polite"
      >
        {loadingText} <SpinningLoader />
      </button>
    );
  }

  return (
    <button
      className={styles["submit-button"]}
      type="submit"
      disabled={disabled}
    >
      {text}
    </button>
  );
}
