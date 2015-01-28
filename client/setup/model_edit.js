var gtypeId = "";
var gtypeIdDep = new Deps.Dependency; // for optionMakes helper

Template.modelEdit.events({
	'submit form': function(e) {
		
		e.preventDefault();
      	Router.go('modelsList');

	},

	'change #gtype': function(e) {
		gtypeId = $(e.target).find('[name=gtype]').context.value;
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

  	optionsMakes: function () {

  		gtypeIdDep.depend(); // cue on change

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