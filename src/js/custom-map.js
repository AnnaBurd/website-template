
var countriesLayer;

function highlightFeature(e)
{
    var layer = e.target;
    layer.setStyle(
        {
            weight: 5,
            color: "orange",
            fillColor: "#f90093",
            fillOpacity: 0
        }
    );
    if(!L.Browser.ie && !L.Browser.opera){
        layer.bringToFront();
    }
}

function resetHighlight(e){
    countriesLayer.resetStyle(e.target);
}

// zoom with click
function zoomToFeature(e)
{
    map.fitBounds(e.target.getBounds());
}

// hover features
function countriesOnEachFeature(feature, layer){
    layer.on(
        {
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: zoomToFeature
        }
    )
}


// countries colors
function getCountryColor(popEst){
    if(popEst > 100000000)
    {
        return '#73e189';
    }
    else if(popEst > 50000000)
    {
        return '#90e68f';
    }
    else{
        return '#adeb94';
    }
}
// map custom design
function countriesStyle(feature){
    return{
        fillColor: getCountryColor(feature.properties.POP_EST),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: 3,
        fillOpacity: 0.7
    }
}


// Adding map 
var map = L.map("custom__map", { attributionControl:false }).setView([21.0227262,105.7693234], 4);


countriesLayer = L.geoJson(
        countries,
        {
            style: countriesStyle,
            onEachFeature: countriesOnEachFeature

        }
    ).addTo(map);

// marker is off because of highlight features 

var point = [21.0227262,105.7693234];
var marker = L.marker(point).addTo(map);


//  Popup  at marking place 
var myMarker = L.marker(point);
myMarker.addTo(map);
myMarker.bindPopup(
    '<b>Ha Noi</b><div><img style="width:100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY4hgw1ycTSF8l-QWOVWgtCqYOmvyxX_zT-w&usqp=CAU" alt="Ha Noi" /></div>',
    {minWidth: 256}
);


// Tile layer by useing Open Street map API
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

