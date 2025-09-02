import { ICocktailApiResponse } from "@/types";

export async function fetchCocktailById(id: string) {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  const randomCocktailResponse: ICocktailApiResponse = await response.json();

  return randomCocktailResponse.drinks[0];
}
