Template.userItem.helpers({ 
 user: function() {
	return Meteor.users.findOne(this.user);
	}
});