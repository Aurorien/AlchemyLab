import { IApiResponse, ICategory } from "@/types";

export async function fetchCategories(): Promise<ICategory[]> {
  const response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
  );

  const randomCocktailResponse: IApiResponse<ICategory> = await response.json();

  return randomCocktailResponse.drinks;
}
