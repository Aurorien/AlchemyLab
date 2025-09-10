"use client";
import { Dropdown } from "./Dropdown";
import SearchInputField from "./SearchInputField";
import SubmitButton from "./SubmitButton";
import styles from "./Search.module.css";

interface SearchProps {
  categories: string[];
}

export default function Search({ categories }: SearchProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const [formValues, setFormValues] = useState({
    name: searchParams.get("name") ?? "",
    category: searchParams.get("category") ?? "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("search query", query);

    if (query.trim())
      router.push(`/searchResults?q=${encodeURIComponent(query.trim())}`);
  };

  const formHasAnyValue = Object.values(formValues).some((value) =>
    Boolean(value)
  );

  return (
    <form className={styles["search"]} onSubmit={handleSubmit}>
      <SearchInputField
        placeholder="Search cocktail by name..."
        value={formValues.name}
        onChange={(value: string) => handleOnChange("name", value)}
      />
      <Dropdown
        name="category"
        items={categories}
        value={formValues.category}
        onChange={(value: string) => handleOnChange("category", value)}
      />
      <SubmitButton
        text="Search"
        loadingText="Searching..."
        disabled={!formHasAnyValue}
      />
    </form>
  );
}
