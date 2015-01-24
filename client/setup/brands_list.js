


Template.brandsList.events({
    'click #new': function(event) {
        
    },
});

Template.brandsList.helpers({ 

	brands: function() {
		return Brands.find()
	}
});