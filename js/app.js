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

// Set satellite icon
const satellite = L.icon({
	iconUrl: './resources/satellite.svg',
	iconSize: [ 60, 42 ]
});

// Marker & circle variables
const marker = L.marker([ 0, 0 ], { icon: satellite }).addTo(stationMap);
const circle = L.circleMarker([ 0, 0 ], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 35
}).addTo(stationMap);

let firstCall = true;

// Request ISS location data
const getLocation = async () => {
	const response = await fetch(stationApi);
	const data = await response.json();

	// Grab lat and lon from station data
	const { latitude, longitude } = data;

	// Plot marker at location
	marker.setLatLng([ latitude, longitude ]);
	circle.setLatLng([ latitude, longitude ]);

	// Center on marker
	if (firstCall) {
		stationMap.setView([ latitude, longitude ], 2);
		firstCall = false;
	}
};

getLocation();

setInterval(getLocation, 1000);
