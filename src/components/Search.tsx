import SearchInputField from "./SearchInputField";
import SubmitButton from "./SubmitButton";
import "./Search.css";

function Search() {
  return (
    <form className="search">
      <SearchInputField placeholder="Search cocktail by name..." />
      <SubmitButton text="Search" />
    </form>
  );
}

export default Search;
