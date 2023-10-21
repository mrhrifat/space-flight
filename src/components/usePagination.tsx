/**
 * Title: usePagination
 * Description:
 * Filename: usePagination.tsx
 * Path: /src/components/usePagination.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Oct 21, 2023
 *
 */

import { useContext, useMemo } from "react";
import { DOTS } from "../utils/data";
import FlightContext from "../utils/FlightContext";
import { range } from "../utils/function";

const usePagination = () => {
  const { currentPage, totalItems, itemsPerpage } = useContext(FlightContext);
  // Pagination Range To Show on Pagination
  const paginationRange = useMemo(() => {
    const sibling = 1;
    const totalPages = Math.ceil(totalItems / itemsPerpage);
    const totalPageNumbers = sibling + 4;

    if (totalPageNumbers >= totalPages) {
      return range(1, totalPages);
    }

    // Left & Right Sibling Index
    const leftSiblingIndex = Math.max(currentPage - sibling, 1);
    const rightSiblingIndex = Math.min(currentPage + sibling, totalPages);

    // Show Left & Right Dots (When available)
    const showLeftDots = leftSiblingIndex > 2;
    const showRightDots = rightSiblingIndex < totalPages - 2;

    // Page Index
    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    // Not Left Side Dots But Right Dots To Show
    if (!showLeftDots && showRightDots) {
      const leftItemCount = 3 + 2 + sibling;
      const leftRange = range(1, leftItemCount);
      return [...leftRange, DOTS, totalPages];
    }

    // Not Right Side Dots But Left Dots To Show
    if (showLeftDots && !showRightDots) {
      const rightItemCount = 3 + 2 * sibling;
      const rightRange = range(totalPages - rightItemCount + 1, totalPages);

      return [firstPageIndex, DOTS, ...rightRange];
    }

    // Both Left & Right Side Dots To Show
    if (showLeftDots && showRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);

      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [currentPage, totalItems, itemsPerpage]);

  return paginationRange;
};

export default usePagination;
