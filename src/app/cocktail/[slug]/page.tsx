import Image from "next/image";
import styles from "./page.module.css";
import { extractIdFromSlug } from "@/lib";
import { mapRawCocktailData } from "@/lib";
import { fetchCocktailById } from "@/lib/api";

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
    <section className={styles["cocktail"]}>
      <article className={styles["cocktail-article"]}>
        <Image
          src={cocktail.thumbnail}
          alt={cocktail.name}
          width={200}
          height={230}
          className={styles["cocktail-image"]}
        />
        <div className={styles["cocktail-text-wrapper"]}>
          <section>
            <h2>{cocktail.name}</h2>
            <p className={styles["info"]}>Category: {cocktail.category}</p>
            <p className={styles["info"]}>Tags: {cocktail.tags}</p>
          </section>
          <section>
            <h3>Ingredients</h3>
            {cocktail.ingredients.map((item, index) => (
              <li key={`${item.ingredient}-${index}`}>
                {item.measure}
                <span>{item.ingredient}</span>
              </li>
            ))}
          </section>
          <section className={styles["instructions"]}>
            <h3>Instructions</h3>
            <p>
              Use a <span className={styles["glass"]}>{cocktail.glass}</span>.
            </p>
            <p>{cocktail.instructions}</p>
          </section>
        </div>
      </article>
    </section>
  );
}
