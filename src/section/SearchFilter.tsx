const SearchFilter = () => {
  return (
    <div className="py-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 justify-between items-end">
      {/* 1st Item - Search */}
      <div className="max-lg:col-span-2">
        <form action="#">
          <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
            <input
              type="text"
              name="rocketname"
              id="rocketname"
              className="w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Search by name..."
            />
          </div>
        </form>
      </div>

      <div className="md:col-start-3 col-span-2 flex flex-col">
        <div className="flex row-row gap-2 items-center sm:justify-end mb-2">
          <input
            id="upcomingLaunches"
            name="upcomingLaunches"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          <div className="text-sm leading-6">
            <label
              htmlFor="upcomingLaunches"
              className="font-medium text-gray-900"
            >
              Show upcoming only
            </label>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="grow">
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            >
              <option value="none" selected hidden disabled>
                By Launch Status
              </option>
              <option>Successfull</option>
              <option>Failed</option>
            </select>
          </div>
          <div className="grow">
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            >
              <option value="none" selected hidden disabled>
                By Launch Date
              </option>
              <option>Last week</option>
              <option>Last month</option>
              <option>Last year</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
