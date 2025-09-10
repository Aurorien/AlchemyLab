import type { ReactNode } from "react";
import { CircleArrowLeft, CircleArrowRight, Loader } from "lucide-react";
import { Button } from "@/components";

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
    if (loading) return <Loader />;

    return (
      <p>
        {currentPage} / {pageCount}
      </p>
    );
  };
  return (
    <section>
      <Button
        disabled={currentPage === 1 ? true : undefined}
        onClick={previous}
      >
        <CircleArrowLeft />
      </Button>
      <div>{renderPagination()}</div>
      <Button
        disabled={currentPage === pageCount ? true : undefined}
        onClick={next}
      >
        <CircleArrowRight />
      </Button>
    </section>
  );
}
