"use client";
import { Loader } from "lucide-react";
import { useFormStatus } from "react-dom";
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
      <button type="submit" disabled>
        {loadingText} <Loader />
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
