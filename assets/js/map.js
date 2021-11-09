let map = L.map("map").setView([45.4214, -75.6901], 3);
const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
L.tileLayer(tileUrl, { attribution }).addTo(map);
