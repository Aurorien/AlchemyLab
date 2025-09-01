interface SubmitButtonProps {
  text: string;
}

function SubmitButton({ text }: SubmitButtonProps) {
  return (
    <>
      <button>{text}</button>
    </>
  );
}

export default SubmitButton;
