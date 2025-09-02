import CocktailCard from "@/components/CocktailCard";
import styles from "./page.module.css";
import { mapRawCocktailData } from "@/lib/mapRawCocktailData";
import { fetchRandomCocktail } from "@/lib/api/fetchRandomCocktail";

export default async function Page() {
  const rawRandomCocktail = await fetchRandomCocktail();
  const randomCocktail = mapRawCocktailData(rawRandomCocktail);

  return (
    <div className={styles["page"]}>
      <CocktailCard cocktail={randomCocktail} />
    </div>
  );
}
