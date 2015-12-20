L.mapbox.accessToken = 'pk.eyJ1IjoibWFvenRhbWlyIiwiYSI6ImNpaWJpbDZkNDAwM2t1b2x6cHp5NnI5dGQifQ.JKxijQJrn510Jwev0vNR8A';
var map = L.mapbox.map('map', 'maoztamir.073fa88d', { maxZoom: 10, minZoom: 8 })
    .setView([31.9, 34.958], 8);

var myLayer = L.mapbox.featureLayer().addTo(map);

var geoJson = [{
        //  marker for tel aviv //
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [34.6996, 32.0517]
        },
        "id": "tel_aviv",
        "properties": {
            "title": "tel_aviv",
            "icon": {
                "iconUrl": "iconmap/mapicon1.svg",
                "iconSize": [50, 50], // size of the icon
                "iconAnchor": [0, 40], // point of the icon which will correspond to marker's location
                "popupAnchor": [0, 0], // point from which the popup should open relative to the iconAnchor
                "className": "bigger"   //class for if the debts are bigger or smaller 
            }
        }
    }, {
        //  marker for haifa //
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [34.9482, 32.8283]
        },
        "id": "haifa",
        "properties": {
            "title": "haifa",
            "icon": {
                "iconUrl": "iconmap/mapicon2.svg",
                "iconSize": [50, 50], // size of the icon
                "iconAnchor": [0, 40], // point of the icon which will correspond to marker's location
                "popupAnchor": [0, 0], // point from which the popup should open relative to the iconAnchor
                "className": "bigger"   //class for if the debts are bigger or smaller 
            }
        }
    }, {
        //  marker for jerusalem //
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [35.1988, 31.7387]
        },
        "id": "jerusalem",
        "properties": {
            "title": "jerusalem",
            "icon": {
                "iconUrl": "iconmap/mapicon2.svg",
                "iconSize": [50, 50], // size of the icon
                "iconAnchor": [0, 40], // point of the icon which will correspond to marker's location
                "popupAnchor": [0, 0], // point from which the popup should open relative to the iconAnchor
                "className": "bigger"   //class for if the debts are bigger or smaller 
            }
        }
    }, {
        //  marker for galil //
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [35.3801, 32.9211]
        },
        "id": "galil",
        "properties": {
            "title": "galil",
            "icon": {
                "iconUrl": "iconmap/mapicon2.svg",
                "iconSize": [50, 50], // size of the icon
                "iconAnchor": [0, 40], // point of the icon which will correspond to marker's location
                "popupAnchor": [0, 0], // point from which the popup should open relative to the iconAnchor
                "className": "bigger"   //class for if the debts are bigger or smaller 
            }
        }
    }, {
        //  marker for negev //
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [34.7758, 31.2504]
        },
        "id": "negev",
        "properties": {
            "title": "negev",
            "icon": {
                "iconUrl": "iconmap/mapicon3.svg",
                "iconSize": [50, 50], // size of the icon
                "iconAnchor": [0, 40], // point of the icon which will correspond to marker's location
                "popupAnchor": [0, 0], // point from which the popup should open relative to the iconAnchor
                "className": "bigger"   //class for if the debts are bigger or smaller 
            }
        }
    }, {
        //  marker for shomron //
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [35.1686, 32.0383]
        },
        "id": "shomron",
        "properties": {
            "title": "shomron",
            "icon": {
                "iconUrl": "iconmap/mapicon2.svg",
                "iconSize": [50, 50], // size of the icon
                "iconAnchor": [0, 40], // point of the icon which will correspond to marker's location
                "popupAnchor": [0, 0], // point from which the popup should open relative to the iconAnchor
                "className": "bigger"   //class for if the debts are bigger or smaller 
            }
        }
    }, {
        //  marker for nayanya //
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [34.8239, 32.2778]
        },
        "id": "nayanya",
        "properties": {
            "title": "nayanya",
            "icon": {
                "iconUrl": "iconmap/mapicon3.svg",
                "iconSize": [50, 50], // size of the icon
                "iconAnchor": [0, 40], // point of the icon which will correspond to marker's location
                "popupAnchor": [0, 0], // point from which the popup should open relative to the iconAnchor
                "className": "bigger"   //class for if the debts are bigger or smaller 
            }
        }
    }
];

// Set a custom icon on each marker based on feature properties.
myLayer.on('layeradd', function(e) {
    var marker = e.layer,
        feature = marker.feature;

    marker.setIcon(L.icon(feature.properties.icon));
});

// Add features to the map.
myLayer.setGeoJSON(geoJson);