import { ChangeEvent, useContext } from "react";
import FlightContext from "../utils/FlightContext";

const FilterStatusDate = () => {
  const { setFilter } = useContext(FlightContext);

  const handleLaunchStatus = (e: ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case "all":
        return setFilter("all");
      case "successfull":
        return setFilter("successfull");
      case "failed":
        return setFilter("failed");
      case "lastWeek":
        return setFilter("lastWeek");
      case "lastMonth":
        return setFilter("lastMonth");
      case "lastYear":
        return setFilter("lastYear");
      case "lastFiveYear":
        return setFilter("lastFiveYear");
      default:
        return setFilter("all");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="grow">
        <select
          id="country"
          name="country"
          autoComplete="country-name"
          className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          defaultValue={"none"}
          onChange={handleLaunchStatus}
        >
          <option value="none" hidden disabled>
            By Launch Status
          </option>
          <option value="successfull">Successfull</option>
          <option value="failed">Failed</option>
        </select>
      </div>
      <div className="grow">
        <select
          id="country"
          name="country"
          autoComplete="country-name"
          className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          defaultValue={"none"}
          onChange={handleLaunchStatus}
        >
          <option value="none" hidden disabled>
            By Launch Date
          </option>
          <option value="lastWeek">Last week</option>
          <option value="lastMonth">Last month</option>
          <option value="lastYear">Last year</option>
          <option value="lastFiveYear">Last 5 year</option>
        </select>
      </div>
    </div>
  );
};

export default FilterStatusDate;
