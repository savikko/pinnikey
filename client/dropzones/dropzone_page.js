Template.dropzonePage.helpers({ 
 airplane: function() {
	return Airplanes.find({_id: this._id});
	},
 username: function() {
	var user = Meteor.users.findOne(this.id);
	},
 onePlane: function() {
 	if (this.airplanes.length==1) return true;
 	},
 moreThanOnePlane: function() {
 	if (this.airplanes.length>1) return true;
 	},
 countAirplanes: function() {
 	return this.airplanes.length;
 }
});

