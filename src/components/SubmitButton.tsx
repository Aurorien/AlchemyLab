import { Loader } from "lucide-react";

interface SubmitButtonProps {
  text: string;
  isLoading: boolean;
  loadingText: string;
}

export default function SubmitButton({
  text,
  isLoading,
  loadingText,
}: SubmitButtonProps) {
  if (isLoading) {
    return (
      <button type="submit" disabled>
        {loadingText} <Loader />
      </button>
    );
  }

  return <button type="submit">{text}</button>;
}
