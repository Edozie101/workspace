

var map=L.map('map')	//Initialise the map, assigns it to the ‘map’ div
console.log(L)
var mymarker;

//checks if the browser supports geolocation feature
if ("geolocation" in navigator) {
	console.log('Location found');
} else {
	prompt('Allow location access')
}

//This code adds a layer to the map telling it what set of tiles to display and where to get them. 
//the first argument is the URL template so Leaflet knows how to fetch the tiles from the servers properly. Next is the attribution – this is what shows up in the bottom-right corner of the map. It is important that you add the right info here for proper attribution of the tile set.
// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZWR6eWUxMDEiLCJhIjoiY2ppNGdkYmZwMDg1ejNvbWY4a3EwZnpoNyJ9.PNmUpQKLmEKCQOyx47DbDQ', {
//         maxZoom: 18,
//         attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
//             '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
//             'Imagery © <a href="http://mapbox.com">Mapbox</a>',
//         id: 'mapbox.streets'
//     }).addTo(map);
    
L.tileLayer('https://mts1.google.com/vt/lyrs=m@186112443&hl=x-local&src=app&x={x}&y={y}&z={z}&s=Galile', {
	attribution: 'Map data &copy; <a href="https://maps.google.com">Google</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, By Edozie Izegbu for 2 J\'s Auto Transport',
	maxZoom: 20,
	minZoom: 5,
	worldCopyJump: false
}).addTo(map);

//Button to change the current view of the map and switch to the drivers/customer/serviceman current position
L.easyButton('fa-location-arrow', function(btn, map) {
	map.setView(mymarker.getLatLng(), 15)
}).addTo(map);

//Creating custom marker icon for Customer, Driver and Serviceman by creating Instance of LeafletIcon object
var carIcon = L.icon({
	iconUrl: "/images/mycar.png",
	iconSize: [30, 30]
});

var clientIcon = L.icon({
	iconUrl: "/images/client.png",
	iconSize: [15, 15]
});

var serviceIcon = L.icon({
	iconUrl: "/images/service.png",
	iconSize: [30, 30]
});



