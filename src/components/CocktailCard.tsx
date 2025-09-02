import { ICocktail } from "@/types";
import { createCocktailSlug } from "@/lib/urlHelpers";
import Image from "next/image";
import Link from "next/link";

interface CocktailCardProps {
  cocktail: ICocktail;
}

export default function CocktailCard({ cocktail }: CocktailCardProps) {
  const slug = createCocktailSlug({ id: cocktail.id, name: cocktail.name });

  return (
    <>
      <article>
        <Image
          src={cocktail.thumbnail}
          alt={cocktail.name}
          width={200}
          height={230}
        />
        <h2>{cocktail.name}</h2>
        <Link href={`/cocktail/${slug}`}>See more</Link>
      </article>
    </>
  );
}
