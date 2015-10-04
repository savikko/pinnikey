Template.pilotPanel.helpers({
	  //Geolocation:
	  lat: function() { return Geolocation.currentLocation().coords.latitude; },
	  lon: function() { return Geolocation.currentLocation().coords.longitude; },
	  alt: function() { return Math.round(Geolocation.currentLocation().coords.altitude) + ' m'; },
	  speed: function() { return Math.round(Geolocation.currentLocation().coords.speed) + ' m/s'; },
    loadstatus: function(status) {
      return this.status===status;
    },
    userIsPilotOfTheLoad: function() { return Meteor.userId()===this.pilot; } 
});


Template.pilotPanel.events({
    'click .pilotstatuschange': function(event) {
        event.stopPropagation();
        loadid = this._id; //load id
        load = this; // load object for subfunctions
        status = $(event.target).data("status"); // is there some more sophisticated way to get status value from button?
        Meteor.call("loadStatus", loadid, status,function(error,result){
            if(error){
              console.log(error.reason);
            }
            else{
            	return;
            }
        });
    },
   'click .changePilotForTheLoad': function(event) {
        event.stopPropagation();
        loadid = this._id; //load id
        load = this; // load object for subfunctions
        status = $(event.target).data("status"); // is there some more sophisticated way to get status value from button?
        Meteor.call("pilotChange", loadid, function(error,result){
            if(error){
              console.log(error.reason);
            }
            else{ 
              return;
            }
        });
    }
});

// Geolocation usage (for pilot)

Template.pilotPanel.rendered = function(){

  var map = L.map('map').setView([62.244747,25.7472184], 10);
  // L.tileLayer('http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png').addTo(map);
  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20
  }).addTo(map);

    Meteor.setInterval(function() {
      Session.set('lat', Geolocation.currentLocation().coords.latitude);
      Session.set('lon', Geolocation.currentLocation().coords.longitude);
      Session.set('alt', Geolocation.currentLocation().coords.altitude); 
      Session.set('speed', Geolocation.currentLocation().coords.speed); 
      Aircrafts.update({_id: this.aircraft._id},{$set: {currentAltitude: Geolocation.currentLocation().coords.altitude}});
      Aircrafts.update({_id: this.aircraft._id},{$set: {currentSpeed: Geolocation.currentLocation().coords.speed}});
      map.locate({setView: true, maxZoom: 15});
    }, 1000);
};
// Geolocation ends