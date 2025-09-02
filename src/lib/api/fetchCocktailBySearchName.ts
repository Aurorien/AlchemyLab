import { ICocktailApiResponse } from "@/types";

export async function fetchCocktailBySearchName(name: string) {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
  );

  const cocktails: ICocktailApiResponse = await response.json();

  return cocktails.drinks;
}
