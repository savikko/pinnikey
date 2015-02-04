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
					+ ".";
		}

		return "";

	},

	makes: function() {

		var makes = Makes.find({mfr: this._id}).fetch();

		if(!!!makes.length) return undefined;

		return makes;
	},

	models: function() {

		var makes = Makes.find({mfr: this._id}).fetch();

		var models = makes.map(function(value){
			var models = Models.find({make: value._id}).fetch();
			return models;
		});
		
		return models; // 2D array
	}


});


