Template.makeEdit.events({
	'submit form': function(e) {
		
		//e.preventDefault();
      	Router.go('makesList');

	}
});

Template.makeEdit.helpers({

	optionsMfr: function () {
  		
  		return Mfrs.find().fetch().map(function (value){
                return {
                    label: value.name, value: value._id};
              });

  	},

});

