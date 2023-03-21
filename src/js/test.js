// let mql = window.matchMedia('(max-width: 600px)');
// document.querySelector(".mq-value").innerText = mql.matches;

// function myFunction(x) {
//     if (x.matches) { // If media query matches
//       //document.body.style.backgroundColor = "yellow";
//       //alert("matches media...")
//     } else {
//       //document.body.style.backgroundColor = "pink";
//     }
//   }

// var x = window.matchMedia("(max-width: 700px)")
// myFunction(x)
// x.addListener(myFunction)

//alert("script loaded!");

import L from "../../node_modules/leaflet/dist/leaflet";
//Position Leaflet Map on page
let coords = [10, 107];
console.log("COORDS", coords);
let zoom = 12;
let map = L.map("singlePlotMap", {
  attributionControl: false,
  zoomControl: false,
  //   closePopupOnClick: false,
  minZoom: 10,
  maxZoom: 18,
}).setView(coords, zoom);

console.log(map);

// // Load map tiles from open API (TODO pick a nice looking tiles)
L.tileLayer(
  "https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=ZDZNCIVl4cVYxBsQzORH"
).addTo(map);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
