import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function MapSection() {
  useEffect(() => {
    // Controlla se la mappa esiste già
    if (!document.getElementById("map")._leaflet_id) {
      const map = L.map("map").setView([51.505, -0.09], 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(map);
    }
  }, []); 

  return (
    <div>
      <h1 className="heders">Map</h1>
      <div id="map" style={{ height: "400px", width: "100%" }}></div>
    </div>
  );
}

export default MapSection;