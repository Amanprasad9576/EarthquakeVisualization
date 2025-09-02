import { Input } from "../ui/input";
import { Button } from "../ui/button";
import EarthquakeList from "./EarthquakeList";


function Sidebar({
  onDayClick,
  onWeekClick,
  onMonthClick,
  earthquakes,
  loading,
  error,
  minMag,
  setMinMag,
}) {
  return (
    <div className="flex flex-col h-[100vh] w-[25vw] bg-sky-500 text-white p-4">
      <div className="flex flex-col w-full gap-4 flex-grow">
        <h1 className="text-xl font-bold border-b pb-2">
          Recent Earthquakes
        </h1>

        {/* Filter */}
        <div className="flex flex-col gap-2">
          <label htmlFor="magnitude" className="text-sm font-medium">
            Minimum Magnitude
          </label>
          <Input
            id="magnitude"
            type="number"
            min="0"
            value={minMag}
            onChange={(e) => setMinMag(Number(e.target.value))}
            placeholder="e.g. 4.5"
            className="w-full border border-gray-300 text-black"
          />
        </div>

        {/* Range Buttons */}
        <div className="flex flex-col gap-2">
          <Button
            onClick={onDayClick}
            className="bg-yellow-600 hover:bg-yellow-700"
          >
            Past Day
          </Button>
          <Button
            onClick={onWeekClick}
            className="bg-yellow-600 hover:bg-yellow-700"
          >
            Last Week
          </Button>
          <Button
            onClick={onMonthClick}
            className="bg-yellow-600 hover:bg-yellow-700"
          >
            Last Month
          </Button>
        </div>

        {/* Earthquake List */}
        <div className="flex-1 overflow-y-auto">
          <EarthquakeList
            earthquakes={earthquakes}
            loading={loading}
            error={error}
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
