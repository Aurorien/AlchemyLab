import { IApiCocktail, ICocktail, IFilterCocktail } from "../types";

export function mapRawCocktailData(rawCocktail: IApiCocktail): ICocktail {
  const ingredients = Array.from({ length: 15 }, (_, i) => {
    const num = i + 1;
    return {
      ingredient: rawCocktail[`strIngredient${num}` as keyof IApiCocktail],
      measure: rawCocktail[`strMeasure${num}` as keyof IApiCocktail],
    };
  }).filter((item) => item.ingredient);

  return {
    id: rawCocktail.idDrink,
    name: rawCocktail.strDrink,
    tags: rawCocktail.strTags ? rawCocktail.strTags.split(",") : [],
    category: rawCocktail.strCategory,
    alcoholic: rawCocktail.strAlcoholic === "Alcoholic",
    glass: rawCocktail.strGlass,
    instructions: rawCocktail.strInstructions,
    thumbnail: rawCocktail.strDrinkThumb,
    ingredients,
  };
}

export function mapToFilterList(list: IApiCocktail[]): IFilterCocktail[] {
  return list.map((cocktail) => ({
    strDrinkThumb: cocktail.strDrinkThumb,
    strDrink: cocktail.strDrink,
    idDrink: cocktail.idDrink,
  }));
}
