import { IApiCocktail, IApiResponse } from "@/types";

export async function fetchCocktailBySearchName(
  name: string
): Promise<IApiCocktail[] | string | null> {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
    );

    const cocktails: IApiResponse<IApiCocktail> = await response.json();

    return cocktails.drinks;
  } catch (error) {
    console.error("Error fetching cocktails by name:", error);
    return null;
  }
}
