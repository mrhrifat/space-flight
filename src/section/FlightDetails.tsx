import { rocket1 } from "../utils/data";

const FlightDetails = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="flex flex-col border-2 border-slate-200 p-8 rounded-md items-center gap-3">
        <div>
          <img src={rocket1} alt="rocket1" className="w-24 h-24" />
        </div>
        <div className="text-center mb-4">
          <p className="text-slate-400">
            Launch Date: <span className="text-slate-500">25 Feb 2000</span>
          </p>
          <h3 className="text-2xl mt-2">Falcon Sat</h3>
          <small className="text-slate-400">Falcon</small>
        </div>
        <div>
          <p className="text-slate-400">Launch Status:</p>
          <div className="bg-red-600 rounded-md text-center text-white py-1/4 px-3 mx-auto">
            Failed
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightDetails;
