import { ChangeEvent, useContext } from "react";
import FlightContext from "../utils/FlightContext";
import { useNavigate } from "react-router-dom";

const FilterStatusDate = () => {
  const { setFilter } = useContext(FlightContext);
  const navigate = useNavigate();

  const handleLaunchStatus = (e: ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case "all":
        setFilter("all");
        navigate("/1");
        break;
      case "successfull":
        setFilter("successfull");
        navigate("/1");
        break;
      case "failed":
        setFilter("failed");
        navigate("/1");
        break;
      case "lastWeek":
        setFilter("lastWeek");
        navigate("/1");
        break;
      case "lastMonth":
        setFilter("lastMonth");
        navigate("/1");
        break;
      case "lastYear":
        setFilter("lastYear");
        navigate("/1");
        break;
      case "lastFiveYear":
        setFilter("lastFiveYear");
        navigate("/1");
        break;
      default:
        setFilter("all");
        navigate("/1");
        break;
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {/* Filter By Launch Status */}

      <div className="grow">
        <label htmlFor="byStatus" className="sr-only">
          Launch Status
        </label>
        <select
          id="byStatus"
          name="byStatus"
          className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          defaultValue="none"
          onChange={handleLaunchStatus}
        >
          <option value="none" hidden disabled key="1">
            By Launch Status
          </option>
          <option value="successfull" key="2">
            Successfull
          </option>
          <option value="failed" key="3">
            Failed
          </option>
        </select>
      </div>

      {/* Filter By Launch Date & Time */}

      <div className="grow">
        <label htmlFor="byLaunchDate" className="sr-only">
          Launch Date
        </label>
        <select
          id="byLaunchDate"
          name="byLaunchDate"
          className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          defaultValue="none"
          onChange={handleLaunchStatus}
        >
          <option value="none" hidden disabled key="1">
            By Launch Date
          </option>
          <option value="lastWeek" key="2">
            Last week
          </option>
          <option value="lastMonth" key="3">
            Last month
          </option>
          <option value="lastYear" key="4">
            Last year
          </option>
          <option value="lastFiveYear" key="5">
            Last 5 year
          </option>
        </select>
      </div>
    </div>
  );
};

export default FilterStatusDate;
