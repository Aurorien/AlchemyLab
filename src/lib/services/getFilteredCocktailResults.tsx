import { IFilterCocktail, IApiCocktail } from "@/types";
import { fetchCocktailBySearchName, fetchCocktailByCategory } from "@/lib/api";
import { mapToFilterList } from "@/lib";

export async function getFilteredCocktailResults(
  name: string | undefined,
  category: string | undefined
) {
  if (!name && !category) {
    return "No data found";
  }

  if (!name && category) {
    const cocktailsByCategory = await fetchCocktailByCategory(category);
    console.log("cocktailsByCategory", cocktailsByCategory);
    return cocktailsByCategory;
  }

  if (name) {
    const filteredCocktailsByName: IFilterCocktail[] | string =
      await fetchCocktailBySearchName(name).then(
        (rawCocktails: IApiCocktail[] | string) => {
          if (typeof rawCocktails === "string") return rawCocktails;
          if (category) {
            const filtered = rawCocktails.filter(
              (c) => c.strCategory === category
            );
            const filteredCocktailsByName = mapToFilterList(filtered);
            return filteredCocktailsByName;
          }

          const cocktailsByName = mapToFilterList(rawCocktails);
          return cocktailsByName;
        }
      );

    return filteredCocktailsByName;
  }
}
