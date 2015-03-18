var gtypeId = undefined;
var gtypeIdDep = new Deps.Dependency; // for optionMakes helper


Template.modelNew.events({
	'submit form': function(e) {
		
		e.preventDefault();
      	Router.go('modelsList');

	},

	'change #gtype': function(e) {
		gtypeId = AutoForm.getFieldValue('modelEdit', 'gtype');
		gtypeIdDep.changed(); // generate change
	}

});

Template.modelNew.helpers({

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

  		gtypeIdDep.depend(); 

  		if(gtypeId){

  			var makes = GearTypes.findOne(gtypeId).makes;

  			return makes.map(function (make){
                return { 
                	label: Makes.findOne(make.id).name, 
                	value: make.id 
                };
            });
  		}

  		return [];
  		
  		

  	}



});