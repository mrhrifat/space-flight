/**
 * Title: SearchAndFilter
 * Description:
 * Filename: SearchAndFilter.tsx
 * Path: /src/section/SearchAndFilter.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Oct 21, 2023
 *
 */

import { Upcoming, FilterStatusDate, Search } from "../components/";

const SearchAndFilter = () => {
  return (
    <div className="py-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 justify-between items-end">
      <Search />

      <div className="md:col-start-3 col-span-2 flex flex-col">
        <Upcoming />
        <FilterStatusDate />
      </div>
    </div>
  );
};

export default SearchAndFilter;
