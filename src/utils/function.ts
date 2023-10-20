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

export const week = () => 7 * 24 * 60 * 60 * 1000;

export const month = () => 30 * 24 * 60 * 60 * 1000;

export const year = () => 365 * 24 * 60 * 60 * 1000;

export const fiveYears = () => 1825 * 24 * 60 * 60 * 1000;

export const isoDateToLocalDate = (date: string) => {
  const localDate = new Date(date);
  return `${localDate.getDay() + 1} ${
    months[localDate.getMonth() + 1]
  } ${localDate.getFullYear()}`;
};

export const dateTimeCalculation = (date: string) => {
  const launchTime = new Date(date);
  const todayTime = new Date();
  const timeDifference = Number(todayTime) - Number(launchTime);
  return timeDifference;
};
