import { IApiResponse, IFilterCocktail } from "@/types";

export async function fetchCocktailByCategory(
  category: string
): Promise<IFilterCocktail[] | string | null> {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
    );

    const cocktailsByCategoryResponse: IApiResponse<IFilterCocktail> =
      await response.json();

    return cocktailsByCategoryResponse.drinks;
  } catch (error) {
    console.error("Error fetching cocktails by name:", error);
    return null;
  }
}
