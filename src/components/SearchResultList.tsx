"use client";

import { PageSize } from "@/lib/constants";
import { ICocktailNameObject } from "@/types";
import { useState } from "react";
import CocktailListItem from "./CocktailListItem";
import { Loader } from "./Loader";
import Pagination from "./Pagination";

interface SearchResultListProps {
  cocktailNames: ICocktailNameObject[];
}

export default function SearchResultList({
  cocktailNames,
}: SearchResultListProps) {
  const [page, setPage] = useState<number>(0);
  const pageCount: number = Math.ceil(cocktailNames.length / PageSize);
  const loading: boolean = cocktailNames.length === 0;

  const handleOnNext = () =>
    setPage((previous) => Math.min(previous + 1, pageCount - 1));

  const handleOnPrevious = () =>
    setPage((previous) => Math.max(previous - 1, 0));

  const renderCocktails = () => {
    if (loading) return <Loader />;

    const start = page * PageSize;
    const end = start + PageSize;
    return cocktailNames
      .map((c) => <CocktailListItem key={c.id} cocktail={c} />)
      .slice(start, end);
  };

  return (
    <>
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
