// src/pages/Dashboard.jsx
import { useEffect } from "react";
import Sidebar from "../components/molecules/Sidebar";
import EarthquakeMap from "../components/molecules/EarthquakeMap";
import { useEarthquakeControls } from "../Hooks/useEarthquakeControls";

function Dashboard() {
  const {
    earthquakes,
    loading,
    error,
    getEarthquakes,
    minMag,
    setMinMag,
  } = useEarthquakeControls();

  useEffect(() => {
    getEarthquakes("day");
  }, []);

  return (
    <div className="flex h-screen">
      <Sidebar
        onDayClick={() => getEarthquakes("day")}
        onWeekClick={() => getEarthquakes("week")}
        onMonthClick={() => getEarthquakes("month")}
        earthquakes={earthquakes}
        loading={loading}
        error={error}
        minMag={minMag}
        setMinMag={setMinMag}
      />
      <div className="flex-1">
        <EarthquakeMap earthquakes={earthquakes} loading={loading} />
      </div>
    </div>
  );
}

export default Dashboard;
