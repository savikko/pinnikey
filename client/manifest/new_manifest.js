Template.newManifest.helpers({
  airplanes: function() {
    dzairplanes = _.map(Dropzones.findOne(Meteor.user().profile.currentdz).airplanes,function (value){ return value.id; });
  	airplanes = Airplanes.find({_id: {$in: dzairplanes}});
	return airplanes;
  },
  openloads: function(airplane) {
   dztz = Dropzones.findOne(Meteor.user().profile.currentdz).timezone;
   startofday = new Date(moment().tz(dztz).startOf('day').toISOString());
   return Loads.find({airplane: airplane, date: {$gte: startofday}, closed: false},{sort: {loadnumber: -1}});
  },
  closedloads: function(airplane) {
   dztz = Dropzones.findOne(Meteor.user().profile.currentdz).timezone;
   startofday = new Date(moment().tz(dztz).startOf('day').toISOString()); // find start of the day using dropzone's timezone
   return Loads.find({airplane: airplane, date: {$gte: startofday}, closed: true},{sort: {loadnumber: -1}});
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
