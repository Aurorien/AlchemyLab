import { ICocktailApiResponse } from "./types";

interface IIngredient {
  ingredient: string | null;
  measure: string | null;
}

interface ICocktail {
  id: string;
  name: string;
  tags: string[];
  category: string;
  alcoholic: boolean;
  glass: string;
  instructions: string;
  thumbnail: string;
  ingredients: IIngredient[];
}

export function mapRawCocktailData(
  rawCocktail: ICocktailApiResponse
): ICocktail {
  const ingredients = Array.from({ length: 15 }, (_, i) => {
    const num = i + 1;
    return {
      ingredient:
        rawCocktail[`strIngredient${num}` as keyof ICocktailApiResponse],
      measure: rawCocktail[`strMeasure${num}` as keyof ICocktailApiResponse],
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
