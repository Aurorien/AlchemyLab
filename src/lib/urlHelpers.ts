import { ICocktailNameObject } from "@/types";

export function createCocktailSlug({
  idDrink,
  strDrink,
}: ICocktailNameObject): string {
  return `/${idDrink}-${strDrink.toLowerCase().replace(/\s+/g, "-")}`;
}

export function extractIdFromSlug(slug: string): string {
  return slug.split("-")[0];
}
