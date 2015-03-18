Template.makeNew.events({
	'submit form': function(e) {
		
		e.preventDefault();
      	Router.go('makesList');

	}
});