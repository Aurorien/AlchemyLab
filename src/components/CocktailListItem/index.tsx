import Link from "next/link";
// import Image from "next/image";
import { IFilterCocktail } from "@/types";
import { createCocktailSlug } from "@/lib/urlHelpers";
import styles from "./CocktailListItem.module.css";

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
        <Link href={`/cocktail/${slug}`} className={styles["list-link"]}>
          {cocktail.strDrink}
          {/* <Image
            src={cocktail.strDrinkThumb}
            alt={cocktail.strDrink}
            width={20}
            height={24}
          /> */}
        </Link>
      </li>
    </>
  );
}

// TODO: Add image and resize on hover
