"use client";
import { Loader } from "lucide-react";
import { useFormStatus } from "react-dom";

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
    <button type="submit" disabled={disabled}>
      {text}
    </button>
  );
}
