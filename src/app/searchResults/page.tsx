import { getFilteredCocktailResult } from "@/lib";
import { NoSearchResults, SearchResultList } from "@/components";

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

  const filteredCocktails = await getFilteredCocktailResult(name, category);

  const renderSearchResult = () => {
    if (
      typeof filteredCocktails === "string" ||
      !filteredCocktails ||
      filteredCocktails.length === 0
    )
      return <NoSearchResults />;
    return <SearchResultList cocktails={filteredCocktails} />;
  };

  return <section>{renderSearchResult()}</section>;
}
