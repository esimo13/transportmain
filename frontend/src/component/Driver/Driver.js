// import React, { useState } from "react";
// import axios from "axios";

// function Driver() {
//   const [latitude, setLatitude] = useState(null);
//   const [longitude, setLongitude] = useState(null);

//   const getLocation = () => {
//     if ("geolocation" in navigator) {
//       navigator.geolocation.getCurrentPosition(function (position) {
//         const { latitude, longitude } = position.coords;
//         setLatitude(latitude);
//         setLongitude(longitude);

//         // Send location data to your Node.js server
//         sendLocationData(latitude, longitude);
//       });
//     } else {
//       alert("Geolocation is not available in this browser.");
//     }
//   };

//   const sendLocationData = (lat, lon) => {
//     axios
//       .post("http://localhost:3000/api/updateLocation", {
//         latitude: lat,
//         longitude: lon,
//       })
//       .then((response) => {
//         console.log("Location data sent to server:", response.data);
//       })
//       .catch((error) => {
//         console.error("Error sending location data:", error);
//       });
//   };

//   return (
//     <div className="App">
//       <button onClick={getLocation}>Get Location</button>
//       {latitude && longitude && (
//         <div>
//           <p>Latitude: {latitude}</p>
//           <p>Longitude: {longitude}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Driver;

import React, { useState, useEffect } from "react";
import axios from "axios";

function Driver() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      });
    } else {
      alert("Geolocation is not available in this browser.");
    }
  };

  const sendLocationData = (lat, lon) => {
    axios
      .post("http://localhost:3000/api/updateLocation", {
        latitude: lat,
        longitude: lon,
      })
      .then((response) => {
        console.log("Location data sent to server:", response.data);
      })
      .catch((error) => {
        console.error("Error sending location data:", error);
      });
  };

  // Function to get and send location data
  const updateLocation = () => {
    getLocation();
    sendLocationData(latitude, longitude);
  };

  // Use useEffect to set up the interval for updating location
  useEffect(() => {
    // Initially get and send location data
    updateLocation();

    // Set up a 5-second interval to update location
    const intervalId = setInterval(updateLocation, 5000);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, [latitude, longitude]);

  return (
    <div className="App">
      {latitude && longitude && (
        <div>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
        </div>
      )}
    </div>
  );
}

export default Driver;
