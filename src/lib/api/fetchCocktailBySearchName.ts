import { IApiCocktail, IApiResponse } from "@/types";

export async function fetchCocktailBySearchName(
  name: string
): Promise<IApiCocktail[]> {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
  );

  const cocktails: IApiResponse<IApiCocktail> = await response.json();

  return cocktails.drinks;
}
