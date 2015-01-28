


Template.modelsList.events({
    'click #new': function(event) {
        
    }
});

Template.modelsList.helpers({ 

	models: function() {
		console.log(Models.find().count());
		return Models.find();
	}
});