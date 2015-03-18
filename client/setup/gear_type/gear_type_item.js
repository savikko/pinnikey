Template.gearTypeItem.helpers({
	
	makes: function() {
		
		return _.map(this.makes, function(value){
			
			var make = Makes.findOne(value);
			return make;
		});

	}
});