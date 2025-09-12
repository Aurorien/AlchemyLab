import { mapRawCocktailData } from "@/lib/mappers";
import { fetchCocktailById, fetchRandomCocktail } from "@/lib/api";
import { handleGetRandom } from "./actions";
import { RandomCocktailDisplay } from "@/components";
import styles from "./page.module.css";

interface HomeProps {
  searchParams: Promise<{
    cocktailId?: string;
  }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const cocktailId = (await searchParams).cocktailId;
  let rawCocktail;

  // Go back to where user where at after clicking see more and then back, otherwise show new random
  if (cocktailId) {
    rawCocktail = await fetchCocktailById(cocktailId);
  } else {
    rawCocktail = await fetchRandomCocktail();
  }

  const randomCocktail = mapRawCocktailData(rawCocktail);

  return (
    <div className={styles["page"]}>
      <RandomCocktailDisplay
        cocktail={randomCocktail}
        onGetRandom={handleGetRandom} // Passes the server action
      />
    </div>
  );
}
