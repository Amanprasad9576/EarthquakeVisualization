// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import EarthquakeDetails from "../pages/EarthquakeDetails";

function AppRoutes() {
  return (
    <Routes>
      {/* Main Dashboard */}
      <Route path="/" element={<Dashboard />} />

      {/* Earthquake Details Page */}
      <Route path="/earthquake/:id" element={<EarthquakeDetails />} />
    </Routes>
  );
}

export default AppRoutes;

