Template.groundPanel.events({
    'click .groundstatuschange': function(event) {
        event.stopPropagation();
        loadid = this._id; //load id
        load = this; // load object for subfunctions
        status = $(event)[0].target.attributes.status.value; // is there some more sophisticated way to get status value from button?
        aircraftcall = Aircrafts.findOne(this.aircraft).registration.slice(-2).split('').join('');
        // Phoneticize  -> needs to be moved to it's own function
        var phoneticAc = '';
        for (var i = 0, len = aircraftcall.length; i < len; i++) {
            var alphabets = new Array("Alpha","Bravo","Charlie","Delta","Echo","Foxtrot","Golf","Hotel","India","Juliet","Kilo","Lima","Mike","November","Oscar","Papa","Quebec","Romeo","Sierra","Tango","Uniform","Victor","Whiskey","X-Ray","Yankee","Zulu");
            var letter = aircraftcall[i].toUpperCase();      
            var whatChar = letter.charCodeAt(0);
              if ((whatChar > 64)&&(whatChar < 91)) {
                  phonetic = whatChar-65;        
                  phoneticAc = phoneticAc + ' ' + alphabets[phonetic];
              } else
              phoneticAc = phoneticAc + ' ' + letter;    
        };
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
              if (calltext!=="") { tts.speak('Load ' + load.loadnumber + ', ' + phoneticAc + ', ' + calltext,'en'); }
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