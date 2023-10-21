/**
 * Title: Upcoming
 * Description:
 * Filename: Upcoming.tsx
 * Path: /src/components/Upcoming.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Oct 20, 2023
 *
 */

import { useContext } from "react";
import FlightContext from "../utils/FlightContext";

const Upcoming = () => {
  const { setUpcoming, upcoming } = useContext(FlightContext);

  const handleUpcoming = () => {
    setUpcoming(!upcoming);
  };

  return (
    <div className="flex row-row gap-2 items-center sm:justify-end mb-2">
      {/* Fetch & Toggle Upcoming Rocket Launch */}

      <input
        id="upcomingLaunches"
        name="upcomingLaunches"
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        checked={upcoming}
        onChange={handleUpcoming}
      />
      <div className="text-sm leading-6">
        <label htmlFor="upcomingLaunches" className="font-medium text-gray-900">
          Show upcoming only
        </label>
      </div>
    </div>
  );
};

export default Upcoming;
