Meteor.publish('dropzones', function() {
	return Dropzones.find();
});

Meteor.publish('aircrafts', function() {
	return Aircrafts.find();
});

Meteor.publish('rigs', function() {
	return Rigs.find();
});

Meteor.publish('logbook', function() {
	var currentUserId = this.userId;
	return Logbook.find({createdBy: currentUserId});
});

Meteor.publish('users', function(userIds) {
  usersfetched = Meteor.users.find({_id: {$in: userIds}}, {fields: {emails: 1, profile: 1}});
  return usersfetched;
});

Meteor.publish('loads', function(dz) {
  return Loads.find({dropzone: dz});
});

Meteor.publish('mfrs', function(){
	return Mfrs.find();
});

Meteor.publish('geartypes', function(){
	return GearTypes.find();
});

Meteor.publish('makes', function(){
	return Makes.find();
});

Meteor.publish('models', function(){
	return Models.find();
});

Meteor.publish('persons', function(){
  var currentUserId = this.userId;
  return Persons.find({userId: currentUserId});
});

Meteor.publish('personsForManager', function(dropzone){
  var currentUserId = this.userId;
  if(Persons.findOne({"dropzone": dropzone, "userId": currentUserId}).manager === true) {
    return Persons.find({"dropzone": dropzone});
  }
});

Meteor.publish('personsForManifest', function(userIds) {
  return Persons.find({userId: {$in: userIds}});
});