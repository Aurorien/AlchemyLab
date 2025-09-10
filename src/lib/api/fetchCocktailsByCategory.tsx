import { IApiResponse, IFilterCocktail } from "@/types";

export async function fetchCocktailByCategory(
  category: string
): Promise<IFilterCocktail[] | string> {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
  );

  const cocktailsByCategoryResponse: IApiResponse<IFilterCocktail> =
    await response.json();

  return cocktailsByCategoryResponse.drinks;
}
