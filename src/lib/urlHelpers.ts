import { ICocktailNameObject } from "@/types";

export function createCocktailSlug({ id, name }: ICocktailNameObject) {
  return `/${id}-${name.toLowerCase().replace(/\s+/g, "-")}`;
}

export function extractIdFromSlug(slug: string): string {
  return slug.split("-")[0];
}
