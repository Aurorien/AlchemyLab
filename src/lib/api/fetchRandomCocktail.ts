import { ICocktailApiResponse } from "@/types";

export async function fetchRandomCocktail() {
  const response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  );

  const randomCocktailResponse: ICocktailApiResponse = await response.json();

  return randomCocktailResponse.drinks[0];
}
