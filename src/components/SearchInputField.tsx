import "./SearchInputField.module.css";

interface SearchInputFieldProps {
  placeholder: string;
}

function SearchInputField({ placeholder }: SearchInputFieldProps) {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        className="search-input-field"
      />
    </>
  );
}

export default SearchInputField;
