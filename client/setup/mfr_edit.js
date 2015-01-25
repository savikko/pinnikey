Template.mfrEdit.events({
	'submit form': function(e) {
		
		e.preventDefault();

      	Router.go('mfrsList');

	}

	
});