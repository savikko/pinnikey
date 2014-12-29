Meteor.publish('dropzones', function() {
	return Dropzones.find();
});

Meteor.publish('airplanes', function() {
	return Airplanes.find();
});

Meteor.publish('logbook', function() {
	var currentUserId = this.userId;
	return Logbook.find({createdBy: currentUserId});
});