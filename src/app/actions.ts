"use server";

import { redirect } from "next/navigation";
import { fetchRandomCocktail } from "@/lib/api";

export async function handleGetRandom() {
  const rawRandomCocktail = await fetchRandomCocktail();
  if (!rawRandomCocktail) redirect(`/`);

  redirect(`/?cocktailId=${rawRandomCocktail.idDrink}`);
}
