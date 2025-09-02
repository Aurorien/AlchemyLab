"use client";

import { useEffect, useState } from "react";
import CocktailCard from "./CocktailCard";
import { ICocktail } from "@/types";
import RandomCocktailButton from "./RandomCocktailButton";
import { useSearchParams } from "next/navigation";
import { fetchCocktailById } from "@/lib/api/fetchCocktailById";
import { mapRawCocktailData } from "@/lib/mapRawCocktailData";

interface CocktailDisplayProps {
  initialCocktail: ICocktail;
}

export default function CocktailDisplay({
  initialCocktail,
}: CocktailDisplayProps) {
  const [cocktail, setCocktail] = useState(initialCocktail);
  const searchParams = useSearchParams();

  useEffect(() => {
    const cocktailId = searchParams.get("cocktailId");
    if (cocktailId && cocktailId !== cocktail.id) {
      fetchCocktailFromUrl(cocktailId);
    }
  }, [cocktail.id, searchParams]);

  async function fetchCocktailFromUrl(cocktailId: string) {
    try {
      const rawCocktail = await fetchCocktailById(cocktailId);
      const mappedCocktail = mapRawCocktailData(rawCocktail);
      setCocktail(mappedCocktail);
    } catch (error) {
      console.error("Failed to fetch cocktail from URL:", error);
    }
  }

  return (
    <>
      <RandomCocktailButton onCocktailGenerated={setCocktail} />
      <CocktailCard cocktail={cocktail} />
    </>
  );
}
