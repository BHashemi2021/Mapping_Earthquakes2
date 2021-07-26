// Add console.log to check to see if our code is working.
console.log("working");


// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);




//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);



// ! adding  circle to the map instead of the marker
// L.circle([34.0522, -118.2437], {
//    radius: 100
// }).addTo(map);


// ! Alternative way to draw a circle on the map. Default radius is set at 10 pixels. 
// L.circleMarker([34.0522, -118.2437]).addTo(map);



// ! SKILL DRILL: create a light-yellow circle with black lines indicating a 300-meter radius 
// of Central Los Angeles on a dark map

L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: 'black',
    fillColor: '#ffffal'
    
}).addTo(map);



// We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY,
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);



