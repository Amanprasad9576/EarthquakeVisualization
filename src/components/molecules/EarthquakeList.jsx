// src/components/molecules/EarthquakeList.jsx
import { useNavigate } from "react-router-dom";

function EarthquakeList({ earthquakes, loading, error }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full p-2 bg-gray-100 text-gray-800 rounded-md">
      <h2 className="text-lg font-bold mb-2 text-black">Earthquake Data</h2>

      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">Error fetching data</p>}

      {!loading && earthquakes?.length > 0 ? (
        <ul className="max-h-[400px] overflow-y-auto border rounded-md bg-white shadow-sm divide-y divide-gray-200">
          {earthquakes.slice(0, 10).map((eq) => (
            <li
              key={eq.id}
              className="p-2 hover:bg-gray-50 cursor-pointer"
              onClick={() => navigate(`/earthquake/${eq.id}`, { state: { eq } })}
            >
              <p className="font-medium">M {eq.properties.mag}</p>
              <p className="text-sm text-gray-600">{eq.properties.place}</p>
              <p className="text-xs text-gray-400">
                {new Date(eq.properties.time).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p>No earthquake data available</p>
      )}
    </div>
  );
}

export default EarthquakeList;
