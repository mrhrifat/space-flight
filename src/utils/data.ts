/**
 * Title: data
 * Description:
 * Filename: data.ts
 * Path: /src/utils/data.ts
 * Author: Mrh Rifat (Programmer)
 * Date: Oct 21, 2023
 *
 */

import rocket1 from "../img/rocket_01.png";
import rocket2 from "../img/rocket_02.png";
import rocket3 from "../img/rocket_03.png";
import rocket4 from "../img/rocket_04.png";
import rocket5 from "../img/rocket_05.png";
import rocket6 from "../img/rocket_06.png";
import rocket7 from "../img/rocket_07.png";
import rocket8 from "../img/rocket_08.png";
import rocket9 from "../img/rocket_09.png";

export {
  rocket1,
  rocket2,
  rocket3,
  rocket4,
  rocket5,
  rocket6,
  rocket7,
  rocket8,
  rocket9,
};

export const DOTS = "...";

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const defaultFetchCurrentData = async () => {
  return [];
};

// Context Default Value
export const defaultValue = {
  currentData: [],
  setCurrentData: defaultFetchCurrentData,
  currentPage: 1,
  setCurrentPage: (): number => 1,
  totalItems: 0,
  upcoming: false,
  setUpcoming: (): boolean => false,
  query: "",
  setQuery: (): string => "",
  filter: "all",
  setFilter: (): string => "all",
  itemsPerpage: 9,
  startIndex: 1,
  endIndex: 1,
  itemToDisplay: [],
};
