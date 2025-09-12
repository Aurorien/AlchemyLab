import Image from "next/image";
import styles from "./page.module.css";
import { extractIdFromSlug } from "@/lib/urlHelpers";
import { fetchCocktailById } from "@/lib/api";
import { sentenceArrayFromString } from "@/lib/utils";
import { mapRawCocktailData } from "@/lib/mappers";

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

  const instructionsList = sentenceArrayFromString(cocktail.instructions);

  console.log("instructionsList", instructionsList);

  return (
    <section className={styles["cocktail"]}>
      <article className={styles["cocktail-article"]}>
        <Image
          src={cocktail.thumbnail}
          alt={`Photo of ${cocktail.name} cocktail`}
          width={200}
          height={230}
          priority={true}
        />
        <div className={styles["cocktail-text-wrapper"]}>
          <section>
            <h2>{cocktail.name}</h2>
            <p className={styles["info"]}>
              Category: {cocktail.category ?? "No category"}
            </p>
            <p className={styles["info"]}>
              Tags: {cocktail.tags.length ? cocktail.tags : "No tags"}
            </p>
          </section>
          <section>
            <h3>Ingredients</h3>
            <ul>
              {cocktail.ingredients.map((item, index) => (
                <li key={`${item.ingredient}-${index}`}>
                  {item.measure}
                  <span> {item.ingredient}</span>
                </li>
              ))}
            </ul>
            <p className={styles["glass"]}>Glass: {cocktail.glass}</p>
          </section>
          <section>
            <h3>Instructions</h3>
            <ol>
              {instructionsList.map((instruction, index) => (
                <li
                  key={`${instruction}-${index}`}
                  className={styles["instruction"]}
                >
                  {instruction}.
                </li>
              ))}
            </ol>
          </section>
        </div>
      </article>
    </section>
  );
}
