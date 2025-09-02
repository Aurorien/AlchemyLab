import styles from "./page.module.css";
import { mapRawCocktailData } from "@/lib/mapRawCocktailData";
import { fetchRandomCocktail } from "@/lib/api/fetchRandomCocktail";
import RandomCocktailDisplay from "@/components/RandomCocktailDisplay";
import { fetchCocktailById } from "@/lib/api/fetchCocktailById";

interface PageProps {
  searchParams: {
    cocktailId?: string;
  };
}

export default async function Page({ searchParams }: PageProps) {
  let rawCocktail;

  if (searchParams.cocktailId) {
    rawCocktail = await fetchCocktailById(searchParams.cocktailId);
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
