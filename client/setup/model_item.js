Template.modelItem.helpers({
	
	makeName: function() {

		
		
		if(this.make){
			var makeId = this.make;
			var make = Makes.findOne(this.make);
			return make.name;
		}

		return "";

	}
});