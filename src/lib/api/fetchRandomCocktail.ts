import { IApiCocktail, IApiResponse } from "@/types";

export async function fetchRandomCocktail(): Promise<IApiCocktail | null> {
  try {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );

    const randomCocktailResponse: IApiResponse<IApiCocktail> =
      await response.json();

    return randomCocktailResponse.drinks[0];
  } catch (error) {
    console.error("Error fetching cocktails by name:", error);
    return null;
  }
}
