var countriesLayer;

function highlightFeature(e)
{
    var layer = e.target;
    layer.setStyle(
        {
            weight: 5,
            color: "orange",
            fillColor: "#f90093",
            fillOpacity: 0.2
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
        // return '#3a86ff';
    }
    else if(popEst > 50000000)
    {
        return '#90e68f';
        // return '#8338ec';
    }
    else{
        return '#adeb94';
        // return '#ff006e';
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
var map = L.map("map", { attributionControl:false }).setView([43.8476, 18.3564], 1.5);

// Google Map Layer
// var googleLayer = new L.Google();
// map.addLayer(googleLayer);

countriesLayer = L.geoJson(
        countries,
        {
            style: countriesStyle,
            onEachFeature: countriesOnEachFeature

        }
    ).addTo(map);

// map's restrictions 
// map.fitBounds(countriesLayer.getBounds());

// legend is off as it is not required right now
/* var legend = L.control({positoin: 'bottomright'});
legend.onAdd = function(map){
    var div = L.DomUtil.create('div', 'legend');
    var labels = [
                "Land holds greater than 100000000 people", 
                "Land holds greater than 50000000 people", 
                "Land holds less than or equal 50000000 people"
            ];
    var grades = [100000001, 50000001, 50000000];
    div.innerHTML = "<div><b>Legend</b></div>";
    for(var i = 0; i < grades.length; i++)
    {
        div.innerHTML += '<i style="background:'
        + getCountryColor(grades[i]) + '">&nbsp;&nbsp;</i>&nbsp;&nbsp;'
        + labels[i] + '<br/>';
    }
    return div;
}
legend.addTo(map); */

// marker is off because of highlight features 

var point = [10.755639,106.134698];
var marker = L.marker(point).addTo(map);


/* var circle = L.circle(
    point,
    1000,
    {
        color:'#fd3e81',
        fillColor: '#218380',
        fillOpacity: 0.8
    }
).addTo(map);
 var greenIcon = L.icon(
    {
        
        iconUrl: "src/icons/decorative-element-top-right.svg",
        // shadowUrl: "http://leafletj.com/docs/images/leaf-shadow.png",
        iconSize: [38, 95],
        shadowSize: [50, 64],
        iconAnchor: [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76]
    }
 );
 // marker with custom icon
 var marker = L.marker(point, {
    icon: greenIcon
 }).addTo(map); */

//  Popup  at marking place 
var myMarker = L.marker(point);
myMarker.addTo(map);
myMarker.bindPopup(
    '<b>Ho Chi Minh City</b><div><img style="width:100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJB38l8c4Tx5TKDWHjBjhb7gZYQ4xrEaRaqFDLgx3c&s" alt="image" /></div>',
    {minWidth: 256}
);


