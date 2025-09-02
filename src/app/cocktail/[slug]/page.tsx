import { ICocktail, ICocktailApiResponse } from "@/types";
import Image from "next/image";
import styles from "./page.module.css";
import { extractIdFromSlug } from "@/utils/urlHelpers";
import { mapRawCocktailData } from "@/mapRawCocktailData";

interface PageProps {
  params: {
    slug: string;
  };
}

async function fetchCocktailById(id: string) {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  const randomCocktailResponse: ICocktailApiResponse = await response.json();

  return randomCocktailResponse.drinks[0];
}

export default async function Page({ params }: PageProps) {
  const id = extractIdFromSlug(params.slug);

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
