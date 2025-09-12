import { ICocktailNameObject } from "@/types";

export function createCocktailSlug({
  idDrink,
  strDrink,
}: ICocktailNameObject): string {
  const safeName = strDrink
    .toLowerCase()
    .replace(/[^a-z0-9\s]/gi, "-") // Removes special characters
    .replace(/\s+/g, "-") // Replaces spaces with hyphens
    .replace(/-+/g, "-") // Replaces multiple hyphens with single
    .replace(/^-|-$/g, ""); // Removes leading/trailing hyphens

  return `${idDrink}-${safeName}`;
}

export function extractIdFromSlug(slug: string): string {
  return slug.split("-")[0];
}
