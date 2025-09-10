import styles from "./SearchInputField.module.css";

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
        className={styles["search-input-field"]}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}
