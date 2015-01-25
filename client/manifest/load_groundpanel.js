Template.groundPanel.events({
    'click .groundstatuschange': function(event) {
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
    }
});

Template.groundPanel.rendered = function() {
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
};