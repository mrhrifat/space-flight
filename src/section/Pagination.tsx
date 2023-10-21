/**
 * Title: Pagination
 * Description:
 * Filename: Pagination.tsx
 * Path: /src/section/Pagination.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Oct 19, 2023
 *
 */

import { useContext } from "react";
import FlightContext from "../utils/FlightContext";
import { Link, useParams } from "react-router-dom";
import usePagination from "../components/usePagination";
import { DOTS } from "../utils/data";

const Pagination = () => {
  const { currentPage, setCurrentPage, totalItems, itemsPerpage } =
    useContext(FlightContext);
  const param = useParams();

  // Custom Hook for Pagination & Pagination Range
  const paginationRange = usePagination();

  // Total Pages Count
  const totalPages = Math.ceil(totalItems / itemsPerpage);

  // Change Page to Next Page
  const handleNext = () => {
    if (currentPage <= totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Change Page to Previous Page
  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Change Page to N Number Page
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // If Current Page is 0 & Total Pages Count is 1, than not show Pagination
  if (currentPage === 0 || totalPages === 1) {
    return null;
  }

  return (
    <div className="mt-12">
      <div className="flex flex-1 items-center justify-center">
        <nav
          className="flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          {/* Previous Page Link */}
          {currentPage > 1 && (
            <Link
              to={`/${currentPage - 1}`}
              className="rounded-l-md px-2 py-2 text-gray-500 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              onClick={handlePrev}
            >
              Prev
            </Link>
          )}

          {/* N Number of Pagination Page Link */}
          {paginationRange?.map((pageNumber) => {
            // If Page Number Range is Equal to Dots Than Show Dots
            if (pageNumber === DOTS) {
              return (
                <span
                  key={Math.random()}
                  className="px-4 py-2 text-sm font-semibold text-gray-500 bg-slate-100 ring-1 ring-inset right-1 ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  &#8230;
                </span>
              );
            }
            return (
              <Link
                key={pageNumber}
                to={`/${pageNumber}`}
                className={`px-4 py-2 text-sm font-semibold text-slate-800  ring-inset right-1 ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
                  pageNumber === Number(param.id)
                    ? "bg-indigo-500 text-white hover:bg-indigo-500"
                    : "bg-slate-100 ring-1"
                }`}
                onClick={() => handlePageChange(Number(pageNumber))}
              >
                {pageNumber}
              </Link>
            );
          })}

          {/* Next Page Link */}
          {currentPage < totalPages && (
            <Link
              to={`/${currentPage + 1}`}
              className="rounded-r-md px-2 py-2 text-gray-500 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              onClick={handleNext}
            >
              Next
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
