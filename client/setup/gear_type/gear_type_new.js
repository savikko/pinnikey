Template.gearTypeNew.events({
	'submit form': function(e) {
		
		e.preventDefault();
      	Router.go('gearTypesList');

	}
});