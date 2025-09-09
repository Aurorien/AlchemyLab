import Image from "next/image";
import styles from "./page.module.css";
import { extractIdFromSlug } from "@/lib/urlHelpers";
import { mapRawCocktailData } from "@/lib/mapRawCocktailData";
import { fetchCocktailById } from "@/lib/api/fetchCocktailById";

interface CocktailProps {
  params: Promise<{
    slug: string;
  }>;
}

// loading.tsx shows while this page server-side data fetching and rendering happens

export default async function Cocktail({ params }: CocktailProps) {
  const slug = (await params).slug;
  const id = extractIdFromSlug(slug);

  const rawCocktail = await fetchCocktailById(id);
  const cocktail = mapRawCocktailData(rawCocktail);

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
        <p>{cocktail.category}</p>
        <p>{cocktail.tags}</p>
        <section>
          <h3>Ingredients</h3>
          {cocktail.ingredients.map((item, index) => (
            <li key={`${item.ingredient}-${index}`}>
              {item.measure}
              <span>{item.ingredient}</span>
            </li>
          ))}
        </section>
        <section>
          <h3>Instructions</h3>
          <p>
            Use a <span className={styles["glass"]}>{cocktail.glass}</span>.
          </p>
          <p>{cocktail.instructions}</p>
        </section>
      </article>
    </>
  );
}
