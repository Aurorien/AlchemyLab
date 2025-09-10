import Link from "next/link";
import Image from "next/image";
import { IFilterCocktail } from "@/types";
import { createCocktailSlug } from "@/lib";

interface CocktailListItemProps {
  cocktail: IFilterCocktail;
}

export function CocktailListItem({ cocktail }: CocktailListItemProps) {
  const slug = createCocktailSlug({
    idDrink: cocktail.idDrink,
    strDrink: cocktail.strDrink,
  });

  return (
    <>
      <li>
        <Link href={`/cocktail/${slug}`}>
          <Image
            src={cocktail.strDrinkThumb}
            alt={cocktail.strDrink}
            width={35}
            height={41}
          />
          {cocktail.strDrink}
        </Link>
      </li>
    </>
  );
}
