import styles from "./page.module.css";
import { mapRawCocktailData } from "@/lib/mapRawCocktailData";
import { fetchRandomCocktail } from "@/lib/api/fetchRandomCocktail";
import RandomCocktailDisplay from "@/components/RandomCocktailDisplay";
import { fetchCocktailById } from "@/lib/api/fetchCocktailById";

interface PageProps {
  searchParams: Promise<{
    cocktailId?: string;
  }>;
}

export default async function Page({ searchParams }: PageProps) {
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
      <RandomCocktailDisplay initialCocktail={randomCocktail} />
    </div>
  );
}
