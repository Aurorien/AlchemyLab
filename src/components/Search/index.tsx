"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { SearchInputField, SubmitButton, Dropdown } from "@/components";
import styles from "./Search.module.css";

interface SearchProps {
  categories: string[];
}

export function Search({ categories }: SearchProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    name: searchParams.get("name") ?? "",
    category: searchParams.get("category") ?? "",
  });

  const hasCategories = !!categories.length;

  const handleOnChange = (key: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let searchQuery: string = "";

    if (formValues.name.trim())
      searchQuery = `name=${encodeURIComponent(formValues.name.trim())}`;

    if (formValues.category.trim())
      searchQuery += `&category=${encodeURIComponent(
        formValues.category.trim()
      )}`;

    router.push(`/searchResults?${searchQuery}`);
  };

  const formHasAnyValue = Object.values(formValues).some((value) =>
    Boolean(value)
  );

  return (
    <form className={styles["search"]} onSubmit={handleSubmit}>
      <fieldset className={styles["search-fieldset"]}>
        <legend>Search for cocktail</legend>
        <label>
          Cocktail name
          <SearchInputField
            placeholder="Search cocktail by name..."
            value={formValues.name}
            onChange={(value: string) => handleOnChange("name", value)}
          />
        </label>
        {hasCategories && (
          <label>
            Category
            <Dropdown
              name="category"
              items={categories}
              value={formValues.category}
              onChange={(value: string) => handleOnChange("category", value)}
            />
          </label>
        )}
        <SubmitButton
          text="Search"
          loadingText="Searching"
          disabled={!formHasAnyValue}
        />
      </fieldset>
    </form>
  );
}
