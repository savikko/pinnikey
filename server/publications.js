Meteor.publish('dropzones', function() {
	return Dropzones.find();
});

Meteor.publish('logbook', function() {
	var currentUserId = this.userId;
	return Logbook.find({createdBy: currentUserId});
});