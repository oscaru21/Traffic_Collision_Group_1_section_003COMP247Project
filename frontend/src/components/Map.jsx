import React, { useContext, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import ModelContext from "../context/ModelContext";

const customIcon = L.icon({
  iconUrl: `${process.env.PUBLIC_URL}/marker-icon.png`,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function Map() {
  const { location, dispatch } = useContext(ModelContext);
  const [markerLocation, setMarkerLocation] = useState({
    lat: location.LATITUDE,
    lng: location.LONGITUDE,
  });

  const handleMapClick = (event) => {
    setMarkerLocation(event.latlng);
  };

  const MapClickEvents = () => {
    useMapEvents({
      click: handleMapClick,
    });
    return null;
  };

  useEffect(() => {
    dispatch({
      type: "UPDATE_VALUE",
      payload: {
        property: "location",
        value: { LATITUDE: markerLocation.lat, LONGITUDE: markerLocation.lng },
      },
    });
  }, [markerLocation, dispatch]);

  return (
    <MapContainer
      id="map"
      center={[43.6532, -79.3832]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ minHeight: "50vh", width: "100%" }}
    >
      <MapClickEvents />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />
      {markerLocation && (
        <Marker position={markerLocation} icon={customIcon}></Marker>
      )}
    </MapContainer>
  );
}

export default Map;
