"use client";

import { PageSize } from "@/lib/constants";
import { useState } from "react";
import CocktailListItem from "./CocktailListItem";
import Pagination from "./Pagination";
import { Loader } from "lucide-react";
import { IFilterCocktail } from "@/types";

interface SearchResultListProps {
  cocktails: IFilterCocktail[];
}

export default function SearchResultList({ cocktails }: SearchResultListProps) {
  const [page, setPage] = useState<number>(0);
  const pageCount: number = Math.ceil(cocktails.length / PageSize);
  const loading: boolean = cocktails.length === 0;

  const handleOnNext = () =>
    setPage((previous) => Math.min(previous + 1, pageCount - 1));

  const handleOnPrevious = () =>
    setPage((previous) => Math.max(previous - 1, 0));

  const renderCocktails = () => {
    if (loading) return <Loader />;

    const start = page * PageSize;
    const end = start + PageSize;
    return cocktails
      .map((c) => <CocktailListItem key={c.idDrink} cocktail={c} />)
      .slice(start, end);
  };

  return (
    <>
      <h2>Search results:</h2>
      <ol>{renderCocktails()}</ol>
      <Pagination
        currentPage={page + 1}
        loading={loading}
        next={handleOnNext}
        pageCount={pageCount}
        previous={handleOnPrevious}
      />
    </>
  );
}
