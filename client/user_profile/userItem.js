Template.userItem.helpers({ 
 user: function(id) {
	return Meteor.users.findOne(this.id);
	}
});