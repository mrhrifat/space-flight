import { isoDateToLocalDate, rocketImage } from "../utils/function";
import { LaunchDataType } from "../utils/type";

const Details = ({ launchData }: { launchData: LaunchDataType }) => {
  const badgeSuccess = (
    <div className="bg-[#0B652F] font-bold leading-5 rounded-md text-center text-white py-1 px-3 mx-auto">
      Success
    </div>
  );

  const badgeFailed = (
    <div className="bg-[#B01212] font-bold leading-5 rounded-md text-center text-white py-1 px-3 mx-auto">
      Failed
    </div>
  );

  return (
    <div className="flex flex-col border-2 border-slate-200 p-8 rounded-md items-center gap-5">
      <div>
        <img src={rocketImage()} alt="rocket1" className="w-24 h-24" />
      </div>
      <div className="text-center mb-4">
        <p className="text-slate-500">
          Launch Date:
          <span className="text-slate-700">
            {isoDateToLocalDate(launchData.launch_date_utc)}
          </span>
        </p>
        <h3 className="text-2xl mt-2">{launchData.mission_name}</h3>
        <small className="text-slate-500">
          {launchData.rocket.rocket_name}
        </small>
      </div>
      <div>
        <p className="text-slate-500 mb-2">Launch Status:</p>

        {launchData.launch_success === true ? badgeSuccess : badgeFailed}
      </div>
    </div>
  );
};

export default Details;
