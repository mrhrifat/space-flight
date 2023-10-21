/**
 * Title: FlightContext
 * Description:
 * Filename: FlightContext.tsx
 * Path: /src/utils/FlightContext.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Oct 19, 2023
 *
 */

import { createContext, useEffect, useState } from "react";
import { FlightContextType, LaunchDataType } from "./type";
import { baseUrl, defaultValue } from "./data";
import App from "../App";
import { dateTimeCalculation, fiveYears, month, week, year } from "./function";
import { useParams } from "react-router-dom";

//  Flight Context Creation
const FlightContext = createContext<FlightContextType>(defaultValue);

export const Root = () => {
  const param = useParams();
  const [currentData, setCurrentData] = useState([]);
  const [currentPage, setCurrentPage] = useState(Number(param.id) || 1);
  const [upcoming, setUpcoming] = useState(false);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const itemsPerpage = 9;
  const startIndex = (Number(param.id) - 1) * itemsPerpage;
  const endIndex = startIndex + itemsPerpage;
  let totalItems = currentData.length;

  // Filter Current Data with Filter Type & Return Filtered Data, Total Items Length
  const filterData = (filterType: string) => {
    let filteredData;

    switch (filterType) {
      case "all":
        filteredData = currentData;
        totalItems = filteredData.length;
        break;
      case "query":
        filteredData = currentData.filter((item: LaunchDataType) =>
          item.rocket.rocket_name.toLowerCase().includes(query.toLowerCase())
        );
        totalItems = filteredData.length;
        break;
      case "successfull":
        filteredData = currentData.filter((item: LaunchDataType) =>
          Boolean(item.launch_success)
        );
        totalItems = filteredData.length;
        break;
      case "failed":
        filteredData = currentData.filter((item: LaunchDataType) =>
          Boolean(!item.launch_success)
        );
        totalItems = filteredData.length;
        break;
      case "lastWeek":
        filteredData = currentData.filter(
          (item: LaunchDataType) =>
            dateTimeCalculation(item.launch_date_local) <= week()
        );
        totalItems = filteredData.length;
        break;
      case "lastMonth":
        filteredData = currentData.filter(
          (item: LaunchDataType) =>
            dateTimeCalculation(item.launch_date_local) <= month()
        );
        totalItems = filteredData.length;
        break;
      case "lastYear":
        filteredData = currentData.filter(
          (item: LaunchDataType) =>
            dateTimeCalculation(item.launch_date_local) <= year()
        );
        totalItems = filteredData.length;
        break;
      case "lastFiveYear":
        filteredData = currentData.filter(
          (item: LaunchDataType) =>
            dateTimeCalculation(item.launch_date_local) <= fiveYears()
        );
        totalItems = filteredData.length;
        break;
      default:
        filteredData = currentData;
        totalItems = filteredData.length;
    }

    return filteredData;
  };

  // Items To Display in One Page
  const itemToDisplay = filterData(filter).slice(startIndex, endIndex);

  // Data Fetching Launches & Upcoming
  const getLaunches = async (url: string) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setCurrentData(data);
    } catch (err) {
      console.log("Fetching error", err);
    }
  };

  // Data Fetching Launches & Upcoming
  useEffect(() => {
    upcoming !== true
      ? getLaunches(baseUrl)
      : getLaunches(`${baseUrl}/upcoming`);
  }, [upcoming]);

  return (
    <FlightContext.Provider
      value={{
        currentData,
        setCurrentData,
        currentPage,
        setCurrentPage,
        totalItems,
        upcoming,
        setUpcoming,
        query,
        setQuery,
        filter,
        setFilter,
        itemsPerpage,
        startIndex,
        endIndex,
        itemToDisplay,
      }}
    >
      <App />
    </FlightContext.Provider>
  );
};

export default FlightContext;