//let marker = L.marker([51.5, -0.09]).addTo(map);


let podMembersData = [
  {
    name: "Shikhar Shukla",
    lat: 24.398454,
    lng: 81.879031,
    city: "Sidhi",
    country: "India",
    image: "shikhar",
    role:"Fellow"
  }, 
  {
    name: "Sumit Shinde",
    lat: 18.9754415,
    lng: 73.0309219,
    city: "Navi Mumbai",
    country: "India",
    image: "sumit",
    role:"Fellow"
  },
  {
    name: "Juan Garcia",
    lat: 35.3724176286574,
    lng: -119.012290877924,
    city: "Bakersfield",
    country: "United States",
    image: "juan",
    role:"Fellow"
  },
  {
    name: "Gaurav Das",
    lat: 26.140289,
    lng: 91.791862,
    city: "Guwahati",
    country: "India",
    image: "gaurav",
    role:"Fellow"
  },
  {
    name: "Mahera Furniturewala",
    lat: 18.975795,
    lng: 72.816086,
    city: "Mumbai",
    country: "India",
    image: "mahera",
    role:"Fellow"
  },
  {
    name: "Abdulrahman Mamdouh",
    lat: 30.0131,
    lng: 31.2089,
    city: "Giza",
    country: "Giza",
    image: "abdulrahman",
    role:"Fellow"
  },
  {
    name: "Pratheek U",
    lat: 12.972689,
    lng: 77.618649,
    city: "Bangalore",
    country: "India",
    image: "pratheek",
    role:"Fellow"
  },
  {
    name: "Akshat",
    lat: 25.641256,
    lng: 85.064999,
    city: "Patna",
    country: "India",
    image: "akshat",
    role:"Fellow"
  },
  {
    name: "Eshika Khandelwal",
    lat: 17.385,
    lng: 78.4867,
    city: "Hyderabad",
    country: "India",
    image: "eshika",
    role:"Fellow"
  },
  {
    name: "Arsalan Dilawar",
    lat: 33.66636561234196,
    lng: 73.05277913,
    city: "Islamabad",
    country: "Pakistan",
    image: "arsalan",
    role:"Pod Leader"
  },
  {
    name: "Daman Arora",
    lat: 45.4215,
    lng: -75.6972,
    city: "Ottawa",
    country: "Canada",
    image: "daman",
    role:"Fellow"
  },
  {
    name: "Rida Mumtaz",
    lat: 24.774265,
    lng: 46.738586,
    city: "Riyadh",
    country: "Saudi Arabia",
    image: "rida",
    role:"Fellow"
  },
  {
    name: "Ricardo Prins",
    lat: 40.233845,
    lng: -111.658531,
    city: "Provo",
    country: "USA",
    image: "ricardo",
    role:"Fellow"
  },
  {
    name: "Kalyan Chirla",
    lat: 53.8008,
    lng: -1.5491,
    city: "Leeds",
    country: "United Kingdom",
    image: "kalyan",
    role:"Fellow"
  },
  {
    name: "Gustavo Elizarraras",
    lat: 19.495587,
    lng: -98.870225,
    city: "Texcoco",
    country: "México",
    image: "gustavo",
    role:"Fellow"
  },
  {
    name: "Mahmoud",
    lat: 30.112089,
    lng: 31.272795,
    city: "Cairo",
    country: "Egypt",
    image: "mahmoud",
    role:"Fellow"
  },
  {
    name: "Justin Nguyen",
    lat: 33.709,
    lng: -117.9544,
    city: "Westminster",
    country: "United States",
    image: "justin",
    role:"Fellow"
  },
]

podMembersData.map(memberData => {
  let markerIcon = L.icon({
    iconUrl: `/assets/img/fellows/${memberData.image}.jpg`,
    iconSize: [50, 50], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    className: "markerImage",
  });

  L.marker([memberData.lat, memberData.lng], { icon: markerIcon })
    .addTo(map)
    .bindPopup(
      `<html>
       <h5><b>${memberData.name}</b></h5>
       <h6><b>${memberData.role}</b></h6>
       <span><b>${memberData.city}, ${memberData.country}</b></span>
       </html>`
    )
});
