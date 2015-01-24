
Template.brandsList.events({
    'click #new': function(event) {
        alert("New");
    },
});

Template.brandsList.helpers({ 
	brands: function() {
		return Brands.find()
	}
});