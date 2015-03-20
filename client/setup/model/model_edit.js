var gtypeId;
var gtypeIdDep = new Deps.Dependency; // for optionMakes helper

Template.modelEdit.rendered = function(){
  gtypeId = undefined;
  gtypeIdDep.changed();
};

Template.modelEdit.events({
	'submit form': function(e) {
		
		e.preventDefault();
      	Router.go('modelsList');

	},

	'change #gtype': function(e) {

		gtypeId = AutoForm.getFieldValue('gtype', 'modelEdit');
		gtypeIdDep.changed(); // generate change

	}

});

Template.modelEdit.helpers({

  	optionsGType: function () {
  		
  		return GearTypes.find().fetch().map(function (value){
                return {
                    label: value.name, value: value._id};
              });

  	},

  	showMakes: function(){

        gtypeIdDep.depend();

        if(gtypeId||this.gtype) return true;

        return false;

    },

  	optionsMakes: function () {

  		gtypeIdDep.depend(); // cue on change

  		//If the gtypeId is undefined
  		if(!!!gtypeId) gtypeId = this.gtype;

		  var makes = GearTypes.findOne(gtypeId).makes;

		  return makes.map(function (make){
      
        	return { 
        		label: Makes.findOne(make).name, 
        		value: make 
        	};
    	});
  	}



});