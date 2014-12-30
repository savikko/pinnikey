Template.airplaneItem.helpers({ 
 airplane: function(id) {
	return Airplanes.findOne(this.id);
	}
});