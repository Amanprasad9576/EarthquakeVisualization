import Navbar from "./components/molecules/Navbar";
import Sidebar from "./components/molecules/Sidebar";
import EarthquakeMap from "./components/molecules/EarthquakeMap";
import { useEarthquakeControls } from "./Hooks/useEarthquakeControls";
import { useEffect } from "react";

import "./App.css";



function App() {
  const {
    earthquakes,
    loading,
    error,
    getEarthquakes,
    minMag,
    setMinMag,
  } = useEarthquakeControls();

  // Load default (Past Day) on mount
  useEffect(() => {
    getEarthquakes("day");
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        <Sidebar
          onDayClick={() => getEarthquakes("day")}
          onWeekClick={() => getEarthquakes("week")}
          onMonthClick={() => getEarthquakes("month")}
          earthquakes={earthquakes}  // ✅ filtered
          loading={loading}
          error={error}
          minMag={minMag}
          setMinMag={setMinMag}
        />

        <div className="flex-1">
          <EarthquakeMap earthquakes={earthquakes} loading={loading} /> {/* ✅ filtered */}
        </div>
      </div>
    </>
  );
}

export default App;

