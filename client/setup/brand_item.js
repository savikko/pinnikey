Template.brandItem.helpers({ 


	domain: function() {
		var a = document.createElement('a'); 
		a.href = this.url;
		return a.hostname; 
	},

	brandInfo: function(){

		//return this.established.getFullYear();

		var brand = this; console.log(brand);
		var terminated = "";

		if ( !!brand.established && !!brand.terminated){

			return brand.established + " - " + brand.terminated;
		} else if (!!brand.established) {
			return "Founded in " 
					+ brand.established.getFullYear()
					+ ". Heading for the ultimate awesomness!";
		}

		return "Working on a business plan";

	}


});
