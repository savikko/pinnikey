


Template.modelsList.events({
    'click #new': function(event) {
        
    }
});

Template.modelsList.helpers({ 

	models: function() {
		return Models.find();
	}
});