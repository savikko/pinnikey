Template.newManifest.helpers({
  airplanes: function() {
  	airplanes = Airplanes.find({});
	return airplanes;
  },
  load: function() {
   return Loads.find({date: {$gte: moment().startOf('day')._d}},{sort: {loadnumber: -1}});
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
