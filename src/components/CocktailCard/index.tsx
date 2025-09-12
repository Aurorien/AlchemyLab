import Image from "next/image";
import Link from "next/link";
import { ICocktail } from "@/types";
import { createCocktailSlug } from "@/lib/urlHelpers";
import styles from "./CocktailCard.module.css";
import { ArrowRight } from "lucide-react";

interface CocktailCardProps {
  cocktail: ICocktail;
}

export function CocktailCard({ cocktail }: CocktailCardProps) {
  const slug = createCocktailSlug({
    idDrink: cocktail.id,
    strDrink: cocktail.name,
  });

  return (
    <>
      <article className={styles["card"]}>
        <Image
          src={cocktail.thumbnail}
          alt={`Photo of a ${cocktail.name} cocktail`}
          width={200}
          height={230}
          priority={true}
        />
        <h2>{cocktail.name}</h2>
        <Link
          href={`/cocktail/${slug}`}
          aria-label={`Show ${cocktail.name} recipe`}
        >
          Show more
          <ArrowRight
            size={12}
            className={styles["see-more-arrow"]}
            aria-hidden="true"
          />
        </Link>
      </article>
    </>
  );
}
