import Image from "next/image";
import Link from "next/link";
import { ICocktail } from "@/types";
import { createCocktailSlug } from "@/lib";

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
      <article>
        <Image
          src={cocktail.thumbnail}
          alt={cocktail.name}
          width={200}
          height={230}
          priority={true}
        />
        <h2>{cocktail.name}</h2>
        <Link href={`/cocktail/${slug}`}>See more</Link>
      </article>
    </>
  );
}
