let map = L.map("map").setView([24.3956, 0], 2);
const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
L.tileLayer(tileUrl, { attribution }).addTo(map);
