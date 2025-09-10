import NoSearchResults from "@/components/NoSearchResults";
import SearchResultList from "@/components/SearchResultList";
import { fetchCocktailBySearchName } from "@/lib/api/fetchCocktailBySearchName";
import { fetchCocktailByCategory } from "@/lib/api/fetchCocktailsByCategory";
import { getFilteredCocktailResult } from "@/lib/getFilteredCocktailResult";
import { mapToFilterList } from "@/lib/mapRawCocktailData";
import { IApiCocktail, IFilterCocktail, INoDataMessage } from "@/types";

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
