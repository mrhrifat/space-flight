/**
 * Title: Search
 * Description:
 * Filename: Search.tsx
 * Path: /src/components/Search.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Oct 20, 2023
 *
 */

import { ChangeEvent, useContext } from "react";
import FlightContext from "../utils/FlightContext";

const Search = () => {
  const { query, setFilter, setQuery } = useContext(FlightContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter("query");
    setQuery(e.target.value);
  };

  return (
    <div className="max-lg:col-span-2">
      {/* Search Query By Rocket Name */}

      <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
        <input
          type="text"
          name="rocketname"
          id="rocketname"
          className="w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          placeholder="Search by name..."
          value={query}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Search;
