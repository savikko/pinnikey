Template.dropzonePage.helpers({ 
 aircraft: function() {
	return Aircrafts.find({_id: this._id});
	},
 username: function() {
	var user = Meteor.users.findOne(this.id);
	},
 onePlane: function() {
 	if (this.aircrafts.length==1) return true;
 	},
 moreThanOnePlane: function() {
 	if (this.aircrafts.length>1) return true;
 	},
 countAircrafts: function() {
 	return this.aircrafts.length;
 },
 requested: function() {
  return Persons.findOne({"dropzone": this._id});
 },
 processed: function() {
  return Persons.findOne({"dropzone": this._id}).processed;
 },
 manager: function() {
  return Persons.findOne({"dropzone": this._id}).manager;
 },
 okToManifest: function() {
  return Persons.findOne({"dropzone": this._id}).okToManifest;
 },
 unProcessedPersons: function() {
  return Persons.find({"dropzone": this._id, processed: false});
 },
 user: function(userId) {
  return Meteor.users.findOne(this.userId);
 }
});

Template.dropzonePage.events({
    'click #applyToDropzone': function(event) {
        event.stopPropagation();
        Meteor.call("applyToDropzone", this._id);
    },
    'click .accept': function(event) {
        event.stopPropagation();
        return Meteor.call("acceptUserToManifest", this._id);
    },
    'click .deny': function(event) {
        event.stopPropagation();
        return Meteor.call("denyUserToManifest", this._id);
    }
});