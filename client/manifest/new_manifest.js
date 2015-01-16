Template.newManifest.helpers({
  loads: function() {
   return Loads.find({},{sort: {load: -1}});
  },
  prettifyDate: function(timestamp) {
    return moment(new Date(timestamp)).format('DD.MM.YYYY');
  },
  currentdz: function() {
  	return Dropzones.findOne(Meteor.user().profile.currentdz).name;
  }
});