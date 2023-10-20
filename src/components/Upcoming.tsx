import { useContext } from "react";
import FlightContext from "../utils/FlightContext";

const Upcoming = () => {
  const filghtContext = useContext(FlightContext);

  const handleUpcoming = () => {
    filghtContext.setUpcoming(!filghtContext.upcoming);
  };

  return (
    <div className="flex row-row gap-2 items-center sm:justify-end mb-2">
      <input
        id="upcomingLaunches"
        name="upcomingLaunches"
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        checked={filghtContext.upcoming}
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
