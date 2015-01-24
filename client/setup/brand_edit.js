Template.brandEdit.events({
	'submit form': function(e) {
		
		e.preventDefault();
      	Router.go('brandsList');

	}
});