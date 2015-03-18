


Template.makesList.events({
    'click #new': function(event) {
        
    }
});

Template.makesList.helpers({ 

	makes: function() {
		return Makes.find();
	}
});