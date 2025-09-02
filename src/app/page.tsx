import CocktailCard from "@/components/CocktailCard";
import { ICocktailApiResponse } from "@/types";
import styles from "./page.module.css";
import { mapRawCocktailData } from "@/mapRawCocktailData";

async function fetchRandomCocktail() {
  const response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  );

  const randomCocktailResponse: ICocktailApiResponse = await response.json();

  return randomCocktailResponse.drinks[0];
}

export default async function Page() {
  const rawRandomCocktail = await fetchRandomCocktail();
  const randomCocktail = mapRawCocktailData(rawRandomCocktail);

  return (
    <div className={styles["page"]}>
      <CocktailCard cocktail={randomCocktail} />
    </div>
  );
}
