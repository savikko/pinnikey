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
  return Meteor.users.find({}, {fields: {emails: 1, profile: 1}});
});