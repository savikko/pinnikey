
var established;
var terminated;
var establishedDep = new Deps.Dependency;
var terminatedDep = establishedDep; //just out of curiosity using the same dependency for the terminated-helper

Template.mfrEdit.created = function() {
	established = undefined;	//initialise whenever an instance is created
	terminated = undefined;		//otherwise these locals retain values from previous instances
};

Template.mfrEdit.events({
	'submit form': function(e) {
		
		e.preventDefault();

      	Router.go('mfrsList');

	},

	'change #established': function(e) {

		established = AutoForm.getFieldValue('mfrEdit', 'established');
		establishedDep.changed(); // generate change

	},

	'change #terminated': function(e) {

		terminated = AutoForm.getFieldValue('mfrEdit', 'terminated');
		terminatedDep.changed(); // generate change

	}

	
});

Template.mfrEdit.helpers({

	dbAction: function(){// "insert" if no _id, "update" if _id
		
		if(!this._id) return "insert";
		return "update";
	},

	dbActInsert: function(){ //true if no _id, meaning insert
		return !this._id;
	},

	established: function(){  // if true, the Terminated field is shown
		establishedDep.depend();

		if(!!!established) established = AutoForm.getFieldValue('mfrEdit', 'established');

		return !!established;

	},

	terminated: function(){  // if true, the Successor field is shown
		establishedDep.depend();

		if(!!!terminated) terminated = this.terminated;

		return !!terminated;

	},

	successorOptions: function(){ // all manufacturers eccept this
		return Mfrs.find({_id:{$ne: this._id}}).fetch().map(function(value){
			return {
                label: value.name, 
                value: value._id
            };
		})
	}

});