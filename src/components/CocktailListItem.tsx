import { ICocktailNameObject } from "@/types";
import { createCocktailSlug } from "@/lib/urlHelpers";
import Link from "next/link";

interface CocktailListItemProps {
  cocktail: ICocktailNameObject;
}

export default function CocktailListItem({ cocktail }: CocktailListItemProps) {
  const slug = createCocktailSlug({
    idDrink: cocktail.idDrink,
    strDrink: cocktail.strDrink,
  });

  return (
    <>
      <li>
        <Link href={`/cocktail/${slug}`}>{cocktail.strDrink}</Link>
      </li>
    </>
  );
}
