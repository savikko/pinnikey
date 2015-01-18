Meteor.publish('dropzones', function() {
	return Dropzones.find();
});

Meteor.publish('airplanes', function() {
	return Airplanes.find();
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