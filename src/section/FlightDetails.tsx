import Details from "../components/Details";

const FlightDetails = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <Details />
      <Details />
      <Details />
      <Details />
    </div>
  );
};

export default FlightDetails;
