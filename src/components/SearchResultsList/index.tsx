"use client";
import { useState } from "react";
import { IFilterCocktail } from "@/types";
import { PageSize } from "@/lib/constants";
import { CocktailListItem, Pagination, SpinningLoader } from "@/components";
import styles from "./SearchResultsList.module.css";

interface SearchResultsListProps {
  cocktails: IFilterCocktail[];
}

export function SearchResultsList({ cocktails }: SearchResultsListProps) {
  const [page, setPage] = useState<number>(0);
  const pageCount: number = Math.ceil(cocktails.length / PageSize);
  const loading: boolean = cocktails.length === 0;

  const handleOnNext = () =>
    setPage((previous) => Math.min(previous + 1, pageCount - 1));

  const handleOnPrevious = () =>
    setPage((previous) => Math.max(previous - 1, 0));

  const renderCocktails = () => {
    if (loading) return <SpinningLoader />;

    const start = page * PageSize;
    const end = start + PageSize;
    return cocktails
      .map((c) => <CocktailListItem key={c.idDrink} cocktail={c} />)
      .slice(start, end);
  };

  const startNumber = page * PageSize + 1;

  return (
    <section className={styles["search-results"]}>
      <h2>Search results:</h2>
      <ol start={startNumber} className={styles["search-results-list"]}>
        {renderCocktails()}
      </ol>
      <Pagination
        currentPage={page + 1}
        loading={loading}
        next={handleOnNext}
        pageCount={pageCount}
        previous={handleOnPrevious}
      />
    </section>
  );
}
