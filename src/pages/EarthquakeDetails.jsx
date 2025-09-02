import { useLocation } from "react-router-dom";
import EarthquakeMap from "../components/molecules/EarthquakeMap";

const EarthquakeDetails = () => {
  const location = useLocation();
  const eq = location.state?.eq;

  if (!eq) return <p>No earthquake data available.</p>;

  const [lon, lat] = eq.geometry.coordinates;

  return (
    <div className="flex h-screen">
      <div className="w-1/3 p-4 border-r">
        <h2 className="text-xl font-bold mb-4">Earthquake Details</h2>
        <p><strong>Magnitude:</strong> {eq.properties.mag}</p>
        <p><strong>Location:</strong> {eq.properties.place}</p>
        <p><strong>Time:</strong> {new Date(eq.properties.time).toLocaleString()}</p>
        <p><strong>Coordinates:</strong> {lat}, {lon}</p>
        <a
          href={eq.properties.url}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 underline"
        >
          More Info
        </a>
      </div>

      {/* Map with single earthquake focused */}
      <div className="flex-1">
        <EarthquakeMap earthquakes={[eq]} /> 
      </div>
    </div>
  );
};

export default EarthquakeDetails;

