import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const customIcon = L.icon({
    iconUrl: `${process.env.PUBLIC_URL}/marker-icon.png`,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

function Map() {
  const [markerLocation, setMarkerLocation] = useState(null);

  const handleMapClick = (event) => {
      setMarkerLocation(event.latlng);
  };

  const MapClickEvents = () => {
    useMapEvents({
      click: handleMapClick,
    });
    return null;
  }

  return (
      <MapContainer
        id="map"
        center={[43.6532, -79.3832]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%"}}
      >
        <MapClickEvents />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        {markerLocation && <Marker position={markerLocation} icon={customIcon}></Marker>}
      </MapContainer>
  );
}

export default Map;
