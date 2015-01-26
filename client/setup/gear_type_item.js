Template.gearTypeItem.helpers({
	
	makes: function() {
		

		return _.map(this.makes, function(value){
			
			var mfrs = Makes.find({_id:value.id}).fetch();
			return mfrs[0];
		});

	}
});