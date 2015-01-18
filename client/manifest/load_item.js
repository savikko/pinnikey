Template.loadItem.helpers({
  airplane: function() {
  	airplane = Airplanes.findOne({_id: this.airplane});
	return airplane;
	},
  jumper: function(id) {
	 return Meteor.users.findOne(this.id);
	},
  freeslots: function() {
  	slotsavailable = Airplanes.findOne({_id: this.airplane}).maxjumpers;
  	if (Loads.findOne(this._id).jumpers.length) {
  		slotsused = Loads.findOne(this._id).jumpers.length;
  	}
  	else{
     	slotsused = 0;
	}
  	slotsfree = slotsavailable-slotsused;
  	if (slotsfree>0) {
  		return true;
  	}
  	else
  	{
  		return false;
  	}
    },
  status: function(id) {
  	slotsavailable = Airplanes.findOne({_id: this.airplane}).maxjumpers;
  	if (Loads.findOne(this._id).jumpers.length) {
  		slotsused = Loads.findOne(this._id).jumpers.length;
  	}
  	else{
     	slotsused = 0;
	}

  	slotsfree = slotsavailable-slotsused;
  	if (slotsfree===0) {
  		status = "FULL";
  	}
  	else if (slotsfree==1)
  	{
  		status = slotsavailable-slotsused+" slot available";
  	}
  	else
  	{
  		status = slotsavailable-slotsused+" slots available";  		
  	}
  	return status;
  },
  total_weight: function(){
  	var weights = _.map(Loads.findOne(this._id).jumpers,function (value){ return value.weight; }); // get weights to array
  	var totalweight = _.reduce(weights, function(memo, num){ return memo + num; }, 0); // sum array of weights to one variable
  	return totalweight;
  },
  kilosleft: function(){
  	var weights = _.map(Loads.findOne(this._id).jumpers,function (value){ return value.weight; }); // get weights to array
  	var totalweight = _.reduce(weights, function(memo, num){ return memo + num; }, 0); // sum array of weights to one variable
  	var usableweight = Airplanes.findOne({_id: this.airplane}).usableweight_forskydivers;
  	return usableweight-totalweight;
  },
  lightenough: function(){
  	var weights = _.map(Loads.findOne(this._id).jumpers,function (value){ return value.weight; }); // get weights to array
  	var totalweight = _.reduce(weights, function(memo, num){ return memo + num; }, 0); // sum array of weights to one variable
  	var usableweight = Airplanes.findOne({_id: this.airplane}).usableweight_forskydivers;
  	var skydiverweight = Meteor.user().profile.weight;
  	if (usableweight-totalweight-skydiverweight>0) {
  		return true;
  	}
  	else {
  		return false;
  	}
  }
});

Template.loadItem.events({
    'click #cancelJump': function(event) {
        event.stopPropagation();
        jump = this;
        load = event.currentTarget.name;
        return Meteor.call("removeSkydiverFromLoad", load, jump);
        //Meteor.call
    },
    'click #addJump': function(event) {
        event.stopPropagation();
        load = this._id; //load id
        return Meteor.call("addSkydiverToLoad", load, 1500, "Ooossomi");
        //Meteor.call
    },

});
