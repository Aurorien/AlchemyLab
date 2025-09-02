import SearchInputField from "./SearchInputField";
import SubmitButton from "./SubmitButton";
import styles from "./Search.module.css";

function Search() {
  return (
    <form className={styles.search}>
      <SearchInputField placeholder="Search cocktail by name..." />
      <SubmitButton text="Search" />
    </form>
  );
}

export default Search;
