Template.loadPage.helpers({
  callbuttonstate: function() {
    var activeCallButton = document.getElementById(this.status + '-' + this._id);
    $(activeCallButton).addClass("btn-success").siblings().removeClass('btn-success');
    return;
  },
  refuelstate: function() {
    var refuelbutton = document.getElementById('reFuel-' + this._id);
    if (this.refuel) {
      $(refuelbutton).removeClass("btn-default");      
      $(refuelbutton).addClass("btn-warning");
    } else {
      $(refuelbutton).removeClass("btn-warning");      
      $(refuelbutton).addClass("btn-default");
    }
    return;
  },
  aircraftbuttonstate: function() {
    var activeAircraftButton = document.getElementById(this.aircraftstatus);
    $(activeAirlaneButton).addClass("btn-success").siblings().removeClass('btn-success');
    return;
  },
  aircraft: function() {
  	aircraft = Aircrafts.findOne({_id: this.aircraft});
	return aircraft;
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
  	slotsavailable = Aircrafts.findOne({_id: this.aircraft}).maxjumpers;
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
  manifeststatus: function(id) {
  	slotsavailable = Aircrafts.findOne({_id: this.aircraft}).maxjumpers;
  	if (Loads.findOne(this._id).jumpers.length) {
  		slotsused = Loads.findOne(this._id).jumpers.length;
  	}
  	else {
     	slotsused = 0;
    }

  	slotsfree = slotsavailable-slotsused;
  	if (slotsfree===0) {
  		manifeststatus = "FULL";
  	}
  	else if (slotsfree==1)
  	{
  		manifeststatus = slotsavailable-slotsused+" slot available";
  	}
  	else
  	{
  		manifeststatus = slotsavailable-slotsused+" slots available";  		
  	}
  	return manifeststatus;
  },
  loadstatus: function(){
    loadstatus=Loads.findOne(this._id).status;
    console.log(loadstatus);
    if(loadstatus=='callNoCall' || typeof loadstatus == 'undefined') { statustext='No call'};
    if(loadstatus=='call20min') { statustext='20 minutes call'};
    if(loadstatus=='call10min') { statustext='10 minutes call'};
    if(loadstatus=='call5min') { statustext='5 minutes call - Gear up!'};  
    if(loadstatus=='callGo') { statustext='Boarding - Go!'};
    if(loadstatus=='loaded') { statustext='Taxiing'};
    if(loadstatus=='takeOff') { statustext='Take off'};
    if(loadstatus=='jumpRunDrop') { statustext='Dropped'};
    if(loadstatus=='descend') { statustext='Descending'};
    if(loadstatus=='landed') { statustext='Landed'};
    return statustext;
  },
  total_weight: function(){
  	var weights = _.map(Loads.findOne(this._id).jumpers,function (value){ return value.weight; }); // get weights to array
  	var totalweight = _.reduce(weights, function(memo, num){ return memo + num; }, 0); // sum array of weights to one variable
  	return totalweight;
  },
  kilosleft: function(){
  	var weights = _.map(Loads.findOne(this._id).jumpers,function (value){ return value.weight; }); // get weights to array
  	var totalweight = _.reduce(weights, function(memo, num){ return memo + num; }, 0); // sum array of weights to one variable
  	var usableweight = Aircrafts.findOne({_id: this.aircraft}).usableweight_forskydivers;
  	return usableweight-totalweight;
  },
  lightenough: function(){
  	var weights = _.map(Loads.findOne(this._id).jumpers,function (value){ return value.weight; }); // get weights to array
  	var totalweight = _.reduce(weights, function(memo, num){ return memo + num; }, 0); // sum array of weights to one variable
  	var usableweight = Aircrafts.findOne({_id: this.aircraft}).usableweight_forskydivers;
  	var skydiverweight = Meteor.user().profile.weight;
  	if (usableweight-totalweight-skydiverweight>0) {
  		return true;
  	}
  	else {
  		return false;
  	}
  }
});

Template.loadPage.events({
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
              calltext='';
              console.log(call);
              if (status=="call20min") { calltext='20 minutes.'; }
              if (status=="call10min") { calltext='10 minutes.'; }
              if (status=="call5min") { calltext='5 minutes. Gear up.'; }
              if (status=="callGo") { calltext=' go to the plane.'; }
              if (calltext!="") { tts.speak('Load ' + load.loadnumber + ', ' + aircraftcall + ', ' + calltext,'en'); }   // do something with result
            }
        });
    },
    'click .refuel': function(event) {
        event.stopPropagation();
        loadid = this._id; //load id
        Meteor.call("reFuel", loadid);
    }
});

Template.loadPage.rendered = function() {
    // This is for the refuelbutton to be correct on page first load
    var refuelbutton = document.getElementById('reFuel-' + this.data._id);
    if (this.data.refuel) {
      $(refuelbutton).removeClass("btn-default");      
      $(refuelbutton).addClass("btn-warning");
    } else {
      $(refuelbutton).removeClass("btn-warning");      
      $(refuelbutton).addClass("btn-default");
    }
    // This is for the statusbutton to be correct on page first load
    var activeCallButton = document.getElementById(this.data.status + '-' + this.data._id);
    $(activeCallButton).addClass("btn-success").siblings().removeClass('btn-success');

}