"use client";
import { Loader } from "lucide-react";
import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
  text: string;
  loadingText: string;
}

export default function SubmitButton({ text, loadingText }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  if (pending) {
    return (
      <button type="submit" disabled>
        {loadingText} <Loader />
      </button>
    );
  }

  return <button type="submit">{text}</button>;
}
