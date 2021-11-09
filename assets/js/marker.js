var marker = L.marker([51.5, -0.09]).addTo(mymap);

var markerIcon = L.icon({
  iconUrl: "/assets/img/daman.png",
  iconSize: [50, 50], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
  className: "markerImage",
});
