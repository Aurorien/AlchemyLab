"use client";

import CocktailCard from "./CocktailCard";
import { ICocktail } from "@/types";
import RandomCocktailButton from "./RandomCocktailButton";
import { useTransition } from "react";
interface RandomCocktailDisplayProps {
  cocktail: ICocktail;
  onGetRandom: () => Promise<void>;
}

export default function RandomCocktailDisplay({
  cocktail,
  onGetRandom,
}: RandomCocktailDisplayProps) {
  const [isPending, startTransition] = useTransition();

  console.log("rendered RandomCocktailDisplay");

  const handleGenRandomCocktail = () => {
    console.log("handleGenRandomCocktail RUNS");
    startTransition(() => {
      // Calls the action passed from parent
      onGetRandom();
    });
  };

  return (
    <>
      <RandomCocktailButton
        isloading={isPending}
        onClick={handleGenRandomCocktail}
      />
      <CocktailCard cocktail={cocktail} />
    </>
  );
}
