"use client";
import { useTransition } from "react";
import { ICocktail } from "@/types";
import { CocktailCard, RandomCocktailButton } from "@/components";
import styles from "./RandomCocktailDisplay.module.css";

interface RandomCocktailDisplayProps {
  cocktail: ICocktail;
  onGetRandom: () => Promise<void>;
}

export function RandomCocktailDisplay({
  cocktail,
  onGetRandom,
}: RandomCocktailDisplayProps) {
  const [isPending, startTransition] = useTransition();

  const handleGenRandomCocktail = () => {
    startTransition(() => {
      // Calls the action passed from parent
      onGetRandom();
    });
  };

  return (
    <section className={styles["random-cocktail"]}>
      <CocktailCard cocktail={cocktail} />
      <RandomCocktailButton
        isloading={isPending}
        onClick={handleGenRandomCocktail}
      />
    </section>
  );
}
