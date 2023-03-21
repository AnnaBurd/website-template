import L from "../../node_modules/leaflet/dist/leaflet";
import model from "./model.js";
import locationIconUrl from "../icons/location.svg";

// console.log(locationIconUrl);

// Load landplots data
model.loadLandplotsData();
let landplots = model.getLandplotsData();
// console.log(landplots);

// Find a center point on map to show all landplots by using arithmetic average of land coordinates
let centerLatitude = 0;
let centerLongitude = 0;
let minLatitude = landplots[0].coords[0];
let maxLatitude = minLatitude;
let minLongtitude = landplots[0].coords[1];
let maxLongtitude = minLongtitude;

landplots.forEach((plot) => {
  let [lat, long] = plot.coords;
  //   console.log(lat, long);
  centerLatitude += lat;
  centerLongitude += long;

  minLatitude = Math.min(minLatitude, lat);
  maxLatitude = Math.max(maxLatitude, lat);
  minLongtitude = Math.min(minLongtitude, long);
  maxLongtitude = Math.max(maxLongtitude, long);
});

// console.log("Corners:", minLatitude, minLongtitude, maxLatitude, maxLongtitude);
centerLatitude = centerLatitude / landplots.length;
centerLongitude = centerLongitude / landplots.length;

// console.log(centerLatitude, centerLongitude);

// Position Leaflet Map on page
let coords = [centerLatitude, centerLongitude];
let zoom = 12;
let map = L.map("allPlotsMap", {
  attributionControl: false,
  zoomControl: false,
  //   closePopupOnClick: false,
  minZoom: 10,
  maxZoom: 18,
}).setView(coords, zoom);

// Make sure markers stay within map frame
map.setMaxBounds(
  L.latLngBounds(
    L.latLng(minLatitude - 0.2, minLongtitude - 0.2),
    L.latLng(maxLatitude + 0.2, maxLongtitude + 0.2)
  )
);

// Load map tiles from open API (TODO pick a nice looking tiles)
L.tileLayer(
  "https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=ZDZNCIVl4cVYxBsQzORH"
).addTo(map);

// L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   maxZoom: 19,
//   attribution:
//     '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
// }).addTo(map);

//// Render markets on map for each plot
let markerIcon = L.icon({
  iconUrl: locationIconUrl,
  //   shadowUrl: "leaf-shadow.png",

  iconSize: [18, 18], // size of the icon
  //   shadowSize: [50, 64], // size of the shadow
  iconAnchor: [9, 18], // point of the icon which will correspond to marker's location
  //   shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [0, -18], // point from which the popup should open relative to the iconAnchor
});

landplots.forEach((plot) => {
  L.marker(plot.coords, { icon: markerIcon })
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        closeOnEscapeKey: false,
        closeButton: false,
        // autoPan: false,
        className: `test-popup`, // TODO Assign css class to popup element // TODO style
      })
    )
    .setPopupContent(`${plot.title} <br> ${plot.price} ty 💰💰💰 `)
    .openPopup();
});

// // Render poligons

// let testPoligon = L.polygon([
//   [10.530721, 107.393955],
//   [10.515043, 107.225755],
//   [10.574545, 107.295599],
// ]).addTo(map);

// TODO click events
map.on("click", function (event) {
  console.log(event);
});

// TODO move to popup on click
// this.#map.setView(workout.coords, this.#mapZoom, {
//   animate: true,
//   pan: {
//     duration: 1,
//   },
// });

// let countriesLayer;
// countriesLayer = L.geoJson(countries, {
//   style: countriesStyle,
//   onEachFeature: countriesOnEachFeature,
// }).addTo(map);

// function highlightFeature(e) {
//   var layer = e.target;
//   layer.setStyle({
//     weight: 5,
//     color: "orange",
//     fillColor: "#f90093",
//     fillOpacity: 0,
//   });
//   if (!L.Browser.ie && !L.Browser.opera) {
//     layer.bringToFront();
//   }
// }

// function resetHighlight(e) {
//   countriesLayer.resetStyle(e.target);
// }

// // zoom with click
// function zoomToFeature(e) {
//   map.fitBounds(e.target.getBounds());
// }

// hover features
// function countriesOnEachFeature(feature, layer) {
//   layer.on({
//     mouseover: highlightFeature,
//     mouseout: resetHighlight,
//     click: zoomToFeature,
//   });
// }

// countries colors
// function getCountryColor(popEst) {
//   if (popEst > 100000000) {
//     return "#73e189";
//   } else if (popEst > 50000000) {
//     return "#90e68f";
//   } else {
//     return "#adeb94";
//   }
// }
// map custom design
// function countriesStyle(feature) {
//   return {
//     fillColor: getCountryColor(feature.properties.POP_EST),
//     weight: 2,
//     opacity: 1,
//     color: "white",
//     dashArray: 3,
//     fillOpacity: 0.7,
//   };
// }
