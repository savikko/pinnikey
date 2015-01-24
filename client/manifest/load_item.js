Template.loadItem.helpers({
  callbuttonstate: function() {
    var activeCallButton = document.getElementById(this.status + '-' + this._id);
    $(activeCallButton).addClass("btn-success").siblings().removeClass('btn-success');
    return;
  },
  airplanebuttonstate: function() {
    var activeAirplaneButton = document.getElementById(this.airplanestatus);
    $(activeAirlaneButton).addClass("btn-success").siblings().removeClass('btn-success');
    return;
  },
  airplane: function() {
  	airplane = Airplanes.findOne({_id: this.airplane});
	return airplane;
	},
  createtime: function() {
    return moment.tz(this.date,"GMT").fromNow();
  },
  jumper: function(id) {
	 return Meteor.users.findOne(this.id);
	},
  useronload: function(id) {
    if (_.find(Loads.findOne(this._id).jumpers, function(obj) { return obj.id == Meteor.userId(); }).id==Meteor.userId()) {
      return true;
    }
    else {
      return false;
    } 
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
  loadstatus: function(id) {
  	slotsavailable = Airplanes.findOne({_id: this.airplane}).maxjumpers;
  	if (Loads.findOne(this._id).jumpers.length) {
  		slotsused = Loads.findOne(this._id).jumpers.length;
  	}
  	else {
     	slotsused = 0;
    }

  	slotsfree = slotsavailable-slotsused;
  	if (slotsfree===0) {
  		loadstatus = "FULL";
  	}
  	else if (slotsfree==1)
  	{
  		loadstatus = slotsavailable-slotsused+" slot available";
  	}
  	else
  	{
  		loadstatus = slotsavailable-slotsused+" slots available";  		
  	}
  	return loadstatus;
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
        load = this._id;
        jump = _.find(Loads.findOne(load).jumpers, function(obj) { return obj.id == Meteor.userId(); });
        return Meteor.call("removeSkydiverFromLoad", load, jump);
        //Meteor.call
    },
    'click .addJump': function(event) {
        event.stopPropagation();
        var addJumpbutton = document.getElementById('addJump-' + this._id);
        var e = document.getElementById('jumpdetails-' + this._id);
           if(e.style.display == 'block') {
              e.style.display = 'none';
              addJumpbutton.className = "addJump btn btn-success";
              }
           else {
              e.style.display = 'block';
              addJumpbutton.className = "addJump btn btn-default";
              // following is totally wrong place for these, but for some reason .rendered does not work..
              $("#type-" + this._id).select2({
                  placeholder: "Select type of jump"
              });
              $("#altitude-" + this._id).select2({
                  placeholder: "Select an altitude"
              });
            }
        return true;
    },
    'click #confirmJump': function(event) {
        event.stopPropagation();
        load = this._id; //load id
        var addJumpbutton = document.getElementById('addJump-' + this._id);
        var altitude = document.getElementById("altitude-" + this._id).options[document.getElementById("altitude-" + this._id).selectedIndex].value;
        var type = document.getElementById("type-" + this._id).options[document.getElementById("type-" + this._id).selectedIndex].value;
        var e = document.getElementById('jumpdetails-' + this._id);
           if(e.style.display == 'block') {
              e.style.display = 'none';
              addJumpbutton.className = "addJump btn btn-success"; // return button to be green if manifesting for some reason fails
              }
           else
              e.style.display = 'block';
        return Meteor.call("addSkydiverToLoad", load, altitude, type);
        //Meteor.call
    },
    'click .callchange': function(event) {
        event.stopPropagation();
        loadid = this._id; //load id
        load = this; // load object for subfunctions
        call = $(event)[0].target.attributes.call.value; // is there some more sophisticated way to get call value from button?
        airplanecall = Airplanes.findOne(this.airplane).registration.slice(-2).split('').join('');
        Meteor.call("loadCall", loadid, call,function(error,result){
            if(error){
              console.log(error.reason);
            }
            else{
              calltext='';
              console.log(call);
              if (call=="call20min") { calltext='20 minutes.'; }
              if (call=="call10min") { calltext='10 minutes.'; }
              if (call=="call5min") { calltext='5 minutes. Gear up.'; }
              if (call=="callGo") { calltext=' go to the plane.'; }
              tts.speak('Load ' + load.loadnumber + ', ' + airplanecall + ', ' + calltext,'en');    // do something with result
            }
        });
    }
});

Template.loadItem.rendered = function(){
  $("#type-" + this._id).select2({
      placeholder: "Select type of jump"
  });
  $("#altitude-" + this._id).select2({
      placeholder: "Select an altitude"
  });
  
};