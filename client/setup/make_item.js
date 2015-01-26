Template.makeItem.helpers({
	
	manufacturerName: function() {
		
		if(this.mfr){
			
			var mfrId = this.mfr[0].id;
			
			var mfrs = Mfrs.findOne(mfrId);

			return mfrs.name;
		}

		return "None. Fix it!";

	}
});