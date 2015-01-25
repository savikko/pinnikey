


Template.mfrsList.events({
    'click #new': function(event) {
        
    },
});

Template.mfrsList.helpers({ 

	mfrs: function() {
		return Mfrs.find();
	}
});