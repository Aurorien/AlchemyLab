import { NoSearchResults, SearchResultsList } from "@/components";
import { getFilteredCocktailResults } from "@/lib/services";
import styles from "./page.module.css";

interface SearchResultsProps {
  searchParams: Promise<{
    name?: string;
    category?: string;
  }>;
}

// loading.tsx shows while this page server-side data fetching and rendering happens

export default async function SearchResults({
  searchParams,
}: SearchResultsProps) {
  const { name, category } = await searchParams;

  const filteredCocktails = await getFilteredCocktailResults(name, category);

  const renderSearchResults = () => {
    if (
      typeof filteredCocktails === "string" ||
      !filteredCocktails ||
      filteredCocktails.length === 0
    )
      return <NoSearchResults />;
    return <SearchResultsList cocktails={filteredCocktails} />;
  };

  return (
    <div className={styles["search-results-page"]}>{renderSearchResults()}</div>
  );
}
