


Template.gearTypesList.events({
    'click #new': function(event) {
        
    }
});

Template.gearTypesList.helpers({ 

	gearTypes: function() {
		return GearTypes.find();
	}
});