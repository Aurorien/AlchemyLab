"use client";
interface SearchInputFieldProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export function SearchInputField({
  placeholder,
  value,
  onChange,
}: SearchInputFieldProps) {
  return (
    <>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}
