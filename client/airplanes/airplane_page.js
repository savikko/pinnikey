Template.aircraftPage.helpers({ 
 dropzones: function() {
	return Dropzones.find({aircrafts: {id: this._id}}).fetch();
	}
});

