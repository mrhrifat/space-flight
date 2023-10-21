/**
 * Title: function
 * Description:
 * Filename: function.ts
 * Path: /src/utils/function.ts
 * Author: Mrh Rifat (Programmer)
 * Date: Oct 20, 2023
 *
 */

import {
  months,
  rocket1,
  rocket2,
  rocket3,
  rocket4,
  rocket5,
  rocket6,
  rocket7,
  rocket8,
  rocket9,
} from "./data";

export const rocketImage = () => {
  switch (Math.floor(Math.random() * (9 - 1 + 1) + 1)) {
    case 1:
      return rocket1;
    case 2:
      return rocket2;
    case 3:
      return rocket3;
    case 4:
      return rocket4;
    case 5:
      return rocket5;
    case 6:
      return rocket6;
    case 7:
      return rocket7;
    case 8:
      return rocket8;
    case 9:
      return rocket9;
    default:
      return rocket1;
  }
};

// Convert ISO Date Time To Local Date
export const isoDateToLocalDate = (date: string) => {
  const localDate = new Date(date);
  return `${localDate.getDay() + 1} ${
    months[localDate.getMonth() + 1]
  } ${localDate.getFullYear()}`;
};

// Calculate Difference Between ISO Date Time & Local Date
export const dateTimeCalculation = (date: string) => {
  const launchTime = new Date(date);
  const todayTime = new Date();
  const timeDifference = +todayTime - +launchTime;
  return timeDifference;
};

// Pagination Range
export const range = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, id) => id + start);
};
