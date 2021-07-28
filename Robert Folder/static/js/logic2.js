var data = "Resources/collision_nonull.csv";

    d3.csv(data, function(response) {

    console.log(response);

    var heatArray = [];

    for (var i = 0; i < response.length; i++) {
        var location = response[i];

        if(location) {
            heatArray.push([parseFloat(location.latitude), parseFloat(location.longitude)]);
        }
    
    }
    
    var heat = L.heatLayer(heatArray, {
        radius: 25,
        blur: 1
    })
    

    d3.csv(data, function(response) {

    console.log(response);

    var accidentMarkers = [];

    for (var i = 0; i < response.length; i++) {
        var loc = response[i];

        if (loc) {
            accidentMarkers.push(L.marker([parseFloat(loc.latitude), parseFloat(loc.longitude)]));
        }
    }
    
    var accidents = L.layerGroup(accidentMarkers)
    

    var street = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
    });

    var dark = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "dark-v10",
    accessToken: API_KEY
    });

    var light = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "light-v10",
    accessToken: API_KEY
    });

  // Overlays that may be toggled on or off
    var overlayMaps = {
    Heat: heat,
    Markers: accidents
    };
    
    var baseMaps = {
    Night_Collisions: dark,
    Day_Collisions: light,
    All_Collisions: street
    }
  // Create map object and set default layers
var myMap = L.map("map", {
    center: [40.7128, -74.0059],
    zoom: 10.5,
    layers: [street, heat]
    });
L.control.layers(baseMaps, overlayMaps, {collapsed: false}).addTo(myMap);
    })
    })

