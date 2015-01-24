Template.aircraftItem.helpers({ 
 aircraft: function(id) {
	return Aircrafts.findOne(this.id);
	}
});