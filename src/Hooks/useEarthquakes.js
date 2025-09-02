import { useState } from "react";
import { fetchEarthquakes } from "@/api/earthquakeApi";

export function useEarthquakes() {
  const [earthquakes, setEarthquakes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getEarthquakes = async (range = "day") => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchEarthquakes(range);
      setEarthquakes(data.features || []);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    earthquakes,
    loading,
    error,
    getEarthquakes,
  };
}
