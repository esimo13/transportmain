import React, { useState, useEffect } from "react";
import axios from "axios";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function LocationMap() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const customIcon = L.icon({
    iconUrl: "https://static.thenounproject.com/png/886617-200.png",
    iconSize: [32, 32], // Adjust the width and height of the marker
    iconAnchor: [16, 32], // Adjust the anchor point (center of the bottom edge in this example)
  });

  const getLocationData = () => {
    axios.get("http://localhost:3000/api/getLocationData").then((response) => {
      const { latitude, longitude } = response.data;
      setLatitude(latitude);
      setLongitude(longitude);

      // Create the map when location data is available
      if (latitude && longitude) {
        createMap(latitude, longitude);
      }
    });
  };

  useEffect(() => {
    getLocationData(); // Initial data retrieval

    // Use setInterval to fetch location data every 5 seconds
    const intervalId = setInterval(() => {
      getLocationData();
    }, 5000);

    return () => {
      clearInterval(intervalId); // Cleanup on unmount
    };
  }, []);

  let mapo;

  const createMap = (lat, lon) => {
    if (mapo) {
      // If the map instance already exists, remove it
      mapo.remove();
    }
    mapo = L.map("map").setView([lat, lon], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      mapo
    );

    L.marker([lat, lon], { icon: customIcon }).addTo(mapo);
  };

  return (
    <div>
      {latitude && longitude && (
        <div>
          <div id="map" style={{ height: "400px" }}></div>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
        </div>
      )}
    </div>
  );
}

export default LocationMap;
