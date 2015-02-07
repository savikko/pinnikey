Template.makeItem.helpers({
	
	manufacturerName: function() {
		
		if(this.mfr){
			
			return Mfrs.findOne(this.mfr).name;

		}

		return "None. Fix it!";

	},

	manufacturerId: function() {
		return this.mfr;
	}
	
});