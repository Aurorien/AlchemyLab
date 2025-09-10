"use server";

import { redirect } from "next/navigation";
import { fetchRandomCocktail } from "@/lib/api";

export async function handleGetRandom() {
  console.log("handleGetRandom RUNS");
  const rawRandomCocktail = await fetchRandomCocktail();
  redirect(`/?cocktailId=${rawRandomCocktail.idDrink}`);
}
