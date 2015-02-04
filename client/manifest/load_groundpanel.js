Template.groundPanel.helpers({
    loadstatus: function(status) {
      return this.status===status;
    }
});


Template.groundPanel.events({
    'click .groundstatuschange': function(event) {
        event.stopPropagation();
        loadid = this._id; //load id
        load = this; // load object for subfunctions
        status = $(event.target).data("status"); // is there some more sophisticated way to get status value from button?
        aircraftcall = Aircrafts.findOne(this.aircraft).registration.slice(-2).split('').join('');
        Meteor.call("loadStatus", loadid, status,function(error,result){
            if(error){
              console.log(error.reason);
            }
            else{
              calltext='';
              if (status=="call20min") { calltext='20 minutes.'; }
              if (status=="call10min") { calltext='10 minutes.'; }
              if (status=="call5min") { calltext='5 minutes. Gear up.'; }
              if (status=="callGo") { calltext=' go to the plane.'; }
              if (calltext!=="") { Pinnikey.speak('Load ' + load.loadnumber + ', ' + Pinnikey.phonetic(aircraftcall) + ', ' + calltext,'en'); }
            }
        });
    }
});

Template.groundPanel.rendered = function() {
    // This is for the statusbutton to be correct on page first load
    var activeCallButton = document.getElementById(this.data.status + '-' + this.data._id);
    $(activeCallButton).addClass("btn-success").siblings().removeClass('btn-success');
};