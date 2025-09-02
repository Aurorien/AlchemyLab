"use client";

import { useState } from "react";
import { fetchRandomCocktail } from "@/lib/api/fetchRandomCocktail";
import { mapRawCocktailData } from "@/lib/mapRawCocktailData";
import { ICocktail } from "@/types";
import { useRouter } from "next/navigation";

interface RandomCocktailButtonProps {
  onCocktailGenerated: (cocktail: ICocktail) => void;
}

export default function RandomCocktailButton({
  onCocktailGenerated,
}: RandomCocktailButtonProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleGenRandomCocktail() {
    setLoading(true);
    try {
      const rawRandomCocktail = await fetchRandomCocktail();
      const newCocktail = mapRawCocktailData(rawRandomCocktail);
      onCocktailGenerated(newCocktail);
      router.push(`/?cocktailId=${newCocktail.id}`, { scroll: false });
    } catch (error) {
      console.error("Failed to fetch random cocktail:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button onClick={handleGenRandomCocktail} disabled={loading}>
      {loading ? "Loading..." : "Show new random cocktail"}
    </button>
  );
}
