import { useContext } from "react";
import Details from "../components/Details";
import FlightContext from "../utils/FlightContext";

const FlightDetails = () => {
  const { itemToDisplay } = useContext(FlightContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {itemToDisplay.map((item) => (
        <Details key={item.mission_name} launchData={item} />
      ))}
    </div>
  );
};

export default FlightDetails;
