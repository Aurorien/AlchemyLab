import { ICocktailNameObject } from "@/types";
import { createCocktailSlug } from "@/lib/urlHelpers";
import Link from "next/link";

interface CocktailListItemProps {
  cocktail: ICocktailNameObject;
}

export default function CocktailListItem({ cocktail }: CocktailListItemProps) {
  const slug = createCocktailSlug({ id: cocktail.id, name: cocktail.name });

  return (
    <>
      <li>
        <Link href={`/cocktail/${slug}`}>{cocktail.name}</Link>
      </li>
    </>
  );
}
