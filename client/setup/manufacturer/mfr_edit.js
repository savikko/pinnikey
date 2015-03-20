
var establishedDep = new Deps.Dependency;
var terminatedDep = establishedDep; 


Template.mfrEdit.rendered = function(){

	// Workaround to reset previous validation errors
	//If the form has errors and the user navigates away
	//the validation errors are shown on the next load of the template.
	//Bug? Ficha? Annoying anyway!
	AutoForm.validateForm('mfrEdit'); 
	establishedDep.changed();
};

AutoForm.addHooks(['mfrEdit'], {
	onSuccess: function(doc){
		Router.go('mfrsList');
	},

	onError: function(){
		console.log('error'); // this here should be handled somehow
	}

});



Template.mfrEdit.events({


	'change #established': function(e) {
		
		establishedDep.changed(); // trigger change
		AutoForm.validateField('mfrEdit', 'terminated', true); // validate 

	},

	'change #terminated': function(e) {

		terminatedDep.changed(); // trigger change
		 

	}

	
});

Template.mfrEdit.helpers({

	dbAction: function(){// "insert" if no _id, "update" if _id

		if(!this._id) return "insert";
		return "update";
	},

	isInsert: function(){ //true if no _id, meaning: insert

		return !this._id;
	},

	established: function(){  // if true, the Terminated field is shown
		establishedDep.depend();
//console.log(AutoForm.getFieldValue('established', 'mfrEdit'));
		return !!AutoForm.getFieldValue('established', 'mfrEdit');

	},

	terminated: function(){  // if true, the Successor field is shown
		terminatedDep.depend();
		var established = AutoForm.getFieldValue('established', 'mfrEdit');
		if(!established) return false;//if it's not established, it's not terminated either -> do not show the successor field

		return !!AutoForm.getFieldValue('terminated', 'mfrEdit');

	},

	// successorOptions: function(){ // all manufacturers eccept this

	// 	return Mfrs.find({_id:{$ne: this._id}}).fetch().map(function(value){
	// 		return {
 //                label: value.name, 
 //                value: value._id
 //            };
	// 	})
	// },

});