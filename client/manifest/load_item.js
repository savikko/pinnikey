Template.loadItem.helpers({
  airplane: function() {
  	airplane = Airplanes.findOne({_id: this.airplane});
	return airplane;
	},
  jumper: function(id) {
	 return Meteor.users.findOne(this.id);
	},
  status: function(id) {
  	slotsavailable = Airplanes.findOne({_id: this.airplane}).maxjumpers;
  	slotsused = Loads.findOne(this._id).jumpers.length;
  	slotsfree = slotsavailable-slotsused;
  	if (slotsfree==0) {
  		status = "FULL";
  	}
  	else if (slotsfree==1)
  	{
  		status = slotsavailable-slotsused+" slot";
  	}
  	else
  	{
  		status = slotsavailable-slotsused+" slots";  		
  	}
  	return status;
  }
});
