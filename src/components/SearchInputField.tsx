import styles from "./SearchInputField.module.css";

interface SearchInputFieldProps {
  placeholder: string;
}

export default function SearchInputField({
  placeholder,
}: SearchInputFieldProps) {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        className={styles["search-input-field"]}
      />
    </>
  );
}
