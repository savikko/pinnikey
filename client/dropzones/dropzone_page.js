Template.dropzonePage.helpers({ 
 aircraft: function() {
	return Aircrafts.find({_id: this._id});
	},
 username: function() {
	var user = Meteor.users.findOne(this.id);
	},
 onePlane: function() {
 	if (this.aircrafts.length==1) return true;
 	},
 moreThanOnePlane: function() {
 	if (this.aircrafts.length>1) return true;
 	},
 countAircrafts: function() {
 	return this.aircrafts.length;
 }
});

