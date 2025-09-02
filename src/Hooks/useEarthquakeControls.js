import { useEarthquakes } from "./useEarthquakes";


import { useState } from "react";


export function useEarthquakeControls() {
  const { earthquakes, loading, error, getEarthquakes } = useEarthquakes();
  const [minMag, setMinMag] = useState(0);

  // Filter earthquakes based on magnitude
  const filteredEarthquakes = earthquakes.filter(
    (eq) => eq.properties.mag >= minMag
  );

  return {
    earthquakes: filteredEarthquakes, // ✅ Always return filtered
    loading,
    error,
    getEarthquakes,
    minMag,
    setMinMag,
  };
}
