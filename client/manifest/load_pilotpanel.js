Template.pilotPanel.helpers({
	  //Geolocation:
	  lat: function() { return Session.get('lat'); },
	  lon: function() { return Session.get('lon'); },
	  alt: function() { return Math.round(Session.get('alt')) + ' m'; },
	  speed: function() { return Math.round(Session.get('speed')) + ' m/s'; }
});


Template.pilotPanel.events({
    'click .statuschange': function(event) {
        event.stopPropagation();
        loadid = this._id; //load id
        load = this; // load object for subfunctions
        status = $(event)[0].target.attributes.status.value; // is there some more sophisticated way to get status value from button?
        aircraftcall = Aircrafts.findOne(this.aircraft).registration.slice(-2).split('').join('');
        Meteor.call("loadStatus", loadid, status,function(error,result){
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

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(position) {
  Session.set('lat', position.coords.latitude);
  Session.set('lon', position.coords.longitude);
  Session.set('alt', position.coords.altitude); 
  Session.set('speed', position.coords.speed);  
};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};


Meteor.setInterval(function() {
  navigator.geolocation.getCurrentPosition(success, error, options);
}, 5000);

// Geolocation ends