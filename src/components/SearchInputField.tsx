import styles from "./SearchInputField.module.css";

interface SearchInputFieldProps {
  placeholder: string;
}

function SearchInputField({ placeholder }: SearchInputFieldProps) {
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

export default SearchInputField;
