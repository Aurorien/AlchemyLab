import type { ReactNode } from "react";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { Button, SpinningLoader } from "@/components";
import styles from "./Pagination.module.css";

interface PaginationProps {
  currentPage: number;
  pageCount: number;
  loading: boolean;
  previous: () => void;
  next: () => void;
}

export function Pagination({
  currentPage,
  pageCount,
  loading,
  previous,
  next,
}: PaginationProps) {
  const renderPagination = (): ReactNode => {
    if (loading) return <SpinningLoader />;

    return (
      <p>
        {currentPage} / {pageCount}
      </p>
    );
  };
  return (
    <section className={styles["pagination"]}>
      <Button
        disabled={currentPage === 1 ? true : undefined}
        onClick={previous}
        aria-label="Go to previous page"
      >
        <CircleArrowLeft aria-hidden="true" />
      </Button>
      <div className={styles["pagination-page-numbers"]}>
        {renderPagination()}
      </div>
      <Button
        disabled={currentPage === pageCount ? true : undefined}
        onClick={next}
        aria-label="Go to next page"
      >
        <CircleArrowRight aria-hidden="true" />
      </Button>
    </section>
  );
}
