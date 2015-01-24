Template.newManifest.helpers({
  aircrafts: function() {
    dzaircrafts = _.map(Dropzones.findOne(Meteor.user().profile.currentdz).aircrafts,function (value){ return value.id; });
  	aircrafts = Aircrafts.find({_id: {$in: dzaircrafts}});
	return aircrafts;
  },
  openloads: function(aircraft) {
   dztz = Dropzones.findOne(Meteor.user().profile.currentdz).timezone;
   startofday = new Date(moment().tz(dztz).startOf('day').toISOString());
   return Loads.find({aircraft: aircraft, date: {$gte: startofday}, closed: false},{sort: {loadnumber: -1}});
  },
  closedloads: function(aircraft) {
   dztz = Dropzones.findOne(Meteor.user().profile.currentdz).timezone;
   startofday = new Date(moment().tz(dztz).startOf('day').toISOString()); // find start of the day using dropzone's timezone
   return Loads.find({aircraft: aircraft, date: {$gte: startofday}, closed: true},{sort: {loadnumber: -1}});
  },
  prettifyDate: function(timestamp) {
    return moment(new Date(timestamp)).format('DD.MM.YYYY');
  },
  currentdz: function() {
  	return Dropzones.findOne(Meteor.user().profile.currentdz).name;
  },
});

Template.newManifest.events({
    'click #addNewLoad': function(event) {
        event.stopPropagation();
        return Meteor.call("addNewLoad", Meteor.user().profile.currentdz,this._id);
    }
});
