import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./pagination.module.scss";

type PaginationProps = {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const maxPageNumbersToShow = 3;
  const pageNumbers: (number | "start-ellipsis" | "end-ellipsis")[] = [];

  if (totalPages < 1) return null;

  const half = Math.floor(maxPageNumbersToShow / 2);
  let startPage = Math.max(2, currentPage - half);
  let endPage = Math.min(totalPages - 1, currentPage + half);

  if (currentPage <= half + 1) {
    startPage = 2;
    endPage = Math.min(totalPages - 1, maxPageNumbersToShow);
  } else if (currentPage >= totalPages - half) {
    startPage = Math.max(2, totalPages - maxPageNumbersToShow + 1);
    endPage = totalPages - 1;
  }

  // Always include first page
  pageNumbers.push(1);

  // Ellipsis before
  if (startPage > 2) {
    pageNumbers.push("start-ellipsis");
  }

  // Middle pages
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  // Ellipsis after
  if (endPage < totalPages - 1) {
    pageNumbers.push("end-ellipsis");
  }

  // Last page
  if (totalPages > 1) {
    pageNumbers.push(totalPages);
  }

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={styles["button-arrow"]}
      >
        <ChevronLeft />
      </button>

      {pageNumbers.map((num, index) => {
        if (num === "start-ellipsis" || num === "end-ellipsis") {
          return (
            <span key={`${num}-${index}`} className={styles.ellipsis}>
              ...
            </span>
          );
        }

        return (
          <button
            key={num}
            className={`${styles["page-button"]} ${
              currentPage === num ? styles.active : ""
            }`}
            onClick={() => onPageChange(num)}
          >
            {num.toString().padStart(2, "0")}
          </button>
        );
      })}

      <button
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={styles["button-arrow"]}
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default Pagination;