export function createCocktailSlug(cocktailId: string, cocktailName: string) {
  return `/${cocktailId}-${cocktailName.toLowerCase().replace(/\s+/g, "-")}`;
}

export function extractIdFromSlug(slug: string): string {
  return slug.split("-")[0];
}
