import NoSearchResults from "@/components/NoSearchResults";
import SearchResultList from "@/components/SearchResultList";
import { fetchCocktailBySearchName } from "@/lib/api/fetchCocktailBySearchName";
import { mapToCocktailNamesList } from "@/lib/mapRawCocktailData";

interface SearchResultsProps {
  searchParams: Promise<{
    q?: string;
  }>;
}

// loading.tsx shows while this page server-side data fetching and rendering happens

export default async function SearchResults({
  searchParams,
}: SearchResultsProps) {
  const searchQuery = (await searchParams).q;
  if (!searchQuery) {
    return <NoSearchResults />;
  }

  const cocktails = await fetchCocktailBySearchName(searchQuery);
  if (!cocktails) {
    return <NoSearchResults />;
  }

  const cocktailNameObjects = mapToCocktailNamesList(cocktails);
  console.log("cocktailNameObjects", cocktailNameObjects);

  return (
    <section>
      <h2>Search results:</h2>
      <SearchResultList cocktailNames={cocktailNameObjects} />
    </section>
  );
}
