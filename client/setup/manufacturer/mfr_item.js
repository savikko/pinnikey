Template.mfrItem.helpers({ 


	domain: function() {
		var a = document.createElement('a'); 
		a.href = this.url;
		return a.hostname; 
	},

	mfrInfo: function(){

		var mfr = this;

		if ( !!mfr.established && !!mfr.terminated){
			return mfr.established.getFullYear() + " - " + mfr.terminated.getFullYear();
		} else if (!!mfr.established) {
			return "Founded in " 
					+ mfr.established.getFullYear()
					+ ".";
		}

		return "";

	},

	makesNames: function() {	// returns indexed names of makes

		var makes = Makes.find({mfr: this._id}, { fields: {name: 1} } ) //find and fetch makes projection
						.map(function(value, index){	//map through 1d array
							return {name: value.name, index: index};
						});

		return makes; //[{_id: <_id>, name: <name>, index: <index>}]
	},

	modelsNames: function() { // returns indexed names of models of every make

		var makes = Makes.find({mfr: this._id}, {fields: {_id: 1} } );
	
		var models = [];
		var i = 0;
		makes.forEach(function(make){	// iterate through makes
			Models.find({make: make._id}, {fields: {name:1}})	//find and fetch models projections
				.forEach(function(model){	//iterate through models within each make
					models.push({name: model.name, index: i}); // index each model and push to the models array
				i++;
			});
			
		});
		

		return models; // 1D array [{_id: <_id>, name: <name>, index: <index>}]
	}


});


