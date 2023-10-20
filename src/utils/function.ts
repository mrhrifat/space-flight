import {
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
