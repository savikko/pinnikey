Template.dropzonesList.helpers({
  dropzones: function() {
   return Dropzones.find();
  },
  distance: function(lat,lng) {
  	return distanceTo(lat,lng);
  }
});





Template.dropzonesList.rendered = function() {
	// General things
	L.Icon.Default.imagePath = 'packages/mrt_leaflet/images';
	var pinnikeyIcon = L.icon({
	    iconUrl: 'img/pinnikey_onlypin.png?n',

	    iconSize:     [20, 41], // size of the icon
	    iconAnchor:   [10, 41], // point of the icon which will correspond to marker's location
	    popupAnchor:  [1, -30] // point from which the popup should open relative to the iconAnchor
	});
	function onLocationFound(e) {
	    var radius = e.accuracy / 2;

	    L.marker(e.latlng).addTo(map)
	        .bindPopup("You, here.").openPopup();

	    L.circle(e.latlng, radius).addTo(map);
		}
	function onLocationError(e) {
	    //alert(e.message);
		}
	var map = L.map('map').setView([62.244747,25.7472184], 5);
	L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	    maxZoom: 18
	}).addTo(map);
	map.on('locationfound', onLocationFound);
	map.on('locationerror', onLocationError);
	map.locate({setView: true, maxZoom: 6});
	var OpenWeatherMap_Clouds = L.tileLayer('http://{s}.tile.openweathermap.org/map/clouds/{z}/{x}/{y}.png', {
	attribution: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
	opacity: 0.5
	});
	var OpenWeatherMap_Temperature = L.tileLayer('http://{s}.tile.openweathermap.org/map/temp/{z}/{x}/{y}.png', {
	attribution: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
	opacity: 0.1
	});
	var OpenWeatherMap_Wind = L.tileLayer('http://{s}.tile.openweathermap.org/map/wind/{z}/{x}/{y}.png', {
	attribution: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
	opacity: 0.2
	});

	//OpenWeatherMap_Clouds.addTo(map);
	//OpenWeatherMap_Wind.addTo(map);
	//OpenWeatherMap_Temperature.addTo(map);
	var addDropzonesToMap = function() {
	 var dropzones = Dropzones.find().fetch();
	 var each, marked;
	 for (var i = 0; i < dropzones.length; i++) {
	 each = dropzones[i];
	 marked = new L.marker([each.coordinate.lat, each.coordinate.lng], {icon: pinnikeyIcon});
	 marked.bindPopup("<a href='/dropzone/" + each._id + "'>" +each.name+"</a>").addTo(map);
	 }
	 }
	 
	addDropzonesToMap();

  };