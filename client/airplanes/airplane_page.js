Template.airplanePage.helpers({ 
 dropzones: function() {
	return Dropzones.find({airplanes: {id: this._id}}).fetch();
	}
});

