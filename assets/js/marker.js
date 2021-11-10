//let marker = L.marker([51.5, -0.09]).addTo(map);


let podMembersData = [
  {
    name: "Shikhar Shukla",
    lat: 24.3956,
    lng: 81.8825,
    city: "Sidhi",
    country: "India",
    image: "shikhar.jpeg"
  },{
    name: "Sumit Shinde",
    lat: 18.9754415,
    lng: 73.0309219,
    city: "Navi Mumbai",
    country: "India",
    image: "sumit.jpg"
  },
]

podMembersData.map(memberData => {
  let markerIcon = L.icon({
    iconUrl: `/assets/img/map/${memberData.image}`,
    iconSize: [50, 50], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    className: "markerImage",
  });
  
  L.marker([memberData.lat, memberData.lng], { icon: markerIcon }).addTo(map);
});
