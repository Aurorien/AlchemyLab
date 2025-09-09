import SearchResultList from "@/components/SearchResultList";
import { fetchCocktailBySearchName } from "@/lib/api/fetchCocktailBySearchName";
import { mapToCocktailNamesList } from "@/lib/mapRawCocktailData";

interface PageProps {
  searchParams: {
    q?: string;
  };
}

// loading.tsx shows while this page server-side data fetching and rendering happens

export default async function Page({ searchParams }: PageProps) {
  if (!searchParams.q) {
    return (
      <section>
        <h2>No search results.</h2>
        <p>Search for a cocktail by its name in the search field above.</p>
      </section>
    );
  }

  // While this data loads, loading.tsx shows
  const cocktails = await fetchCocktailBySearchName(searchParams.q);
  const cocktailNameObjects = mapToCocktailNamesList(cocktails);
  console.log("cocktailNameObjects", cocktailNameObjects);

  return (
    <section>
      <h2>Search results:</h2>
      <SearchResultList cocktailNames={cocktailNameObjects} />
    </section>
  );
}
