import { IApiCocktail, IApiResponse } from "@/types";

export async function fetchRandomCocktail(): Promise<IApiCocktail> {
  const response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  );

  const randomCocktailResponse: IApiResponse<IApiCocktail> =
    await response.json();

  return randomCocktailResponse.drinks[0];
}
