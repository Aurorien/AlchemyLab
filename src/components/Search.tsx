"use client";
import { Dropdown } from "./Dropdown";
import SearchInputField from "./SearchInputField";
import SubmitButton from "./SubmitButton";
import styles from "./Search.module.css";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { CategoryDropdown } from "./CategoryDropdown";
import { ICategory } from "@/types";

interface SearchProps {
  categories: ICategory[];
}

export default function Search({ categories }: SearchProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const urlQuery = searchParams.get("q") || "";
    setQuery(urlQuery);
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("search query", query);

    if (query.trim())
      router.push(`/searchResults?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <form className={styles["search"]} onSubmit={handleSubmit}>
      <SearchInputField
        placeholder="Search cocktail by name..."
        value={query}
        onChange={setQuery}
      />
      <Dropdown
        name="category"
        items={categories}
        value={formValues.category}
        onChange={(value: string) => handleOnChange("category", value)}
      />
      <SubmitButton
    </form>
  );
}
