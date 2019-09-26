// API url variables
const stationApi = 'https://api.wheretheiss.at/v1/satellites/25544';
const spacePeopleAPi = 'http://api.open-notify.org/astros.json';

// Initialize the Leaflet map
const stationMap = L.map('stationMap').setView([ 51.505, -0.09 ], 13);

// OpenStreetMap tile variables
const osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const osmTiles = L.tileLayer(osmUrl, { attribution });

// Set tile layer
osmTiles.addTo(stationMap);
