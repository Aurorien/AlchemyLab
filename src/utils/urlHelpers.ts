import { ICocktailNameItem } from "@/types";

export function createCocktailSlug({ id, name }: ICocktailNameItem) {
  return `/${id}-${name.toLowerCase().replace(/\s+/g, "-")}`;
}

export function extractIdFromSlug(slug: string): string {
  return slug.split("-")[0];
}
