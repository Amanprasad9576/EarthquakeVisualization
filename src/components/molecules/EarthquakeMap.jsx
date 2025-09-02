import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import "leaflet/dist/leaflet.css";

const getMarkerColor = (mag) => {
  if (mag >= 5) return "red";      // Strong
  if (mag >= 3) return "orange";   // Moderate
  return "green";                  // Weak
};

const getMarkerSize = (mag) => {
  if (mag <= 1) return 6;
  if (mag <= 3) return 10;
  if (mag <= 5) return 14;
  return 20; // very strong quakes
};

const EarthquakeMap = ({ earthquakes }) => {
  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Cluster Group */}
      <MarkerClusterGroup>
        {earthquakes.map((eq) => {
          const [lon, lat] = eq.geometry.coordinates;
          const mag = eq.properties.mag;

          return (
            <CircleMarker
              key={eq.id}
              center={[lat, lon]}
              radius={getMarkerSize(mag)}
              pathOptions={{
                color: getMarkerColor(mag),
                fillColor: getMarkerColor(mag),
                fillOpacity: 0.6,
              }}
            >
              <Popup>
                <div>
                  <strong>Magnitude: {mag}</strong>
                  <br />
                  {eq.properties.place}
                  <br />
                  {new Date(eq.properties.time).toLocaleString()}
                </div>
              </Popup>
            </CircleMarker>
          );
        })}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default EarthquakeMap;


