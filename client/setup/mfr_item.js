Template.mfrItem.helpers({ 


	domain: function() {
		var a = document.createElement('a'); 
		a.href = this.url;
		return a.hostname; 
	},

	mfrInfo: function(){

		var mfr = this;

		if ( !!mfr.established && !!mfr.terminated){
			return mfr.established + " - " + mfr.terminated;
		} else if (!!mfr.established) {
			return "Founded in " 
					+ mfr.established.getFullYear()
					+ ". Heading for the ultimate awesomness!";
		}

		return "Working on a business plan";

	}


});


