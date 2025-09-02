import { mapToNamesList } from '@/mapRawCocktailData';
import { ICocktailApiResponse } from '@/types';

async function fetchCocktailBySearchName(name: string) {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
  );

  const cocktails: ICocktailApiResponse = await response.json();

  return cocktails.drinks;
}

interface PageProps {
  searchParams: {
    q?: string;
  };
}

export default async function Page({ searchParams }: PageProps) {
  const cocktails = await fetchCocktailBySearchName(searchParams.q ?? '');
  const cocktailNameObjects = mapToNamesList(cocktails);
  console.log('cocktailNameObjects', cocktailNameObjects);

  return (
    <>
      <ul></ul>
    </>
  );
}
