
// Models is a collection of models of parachuting equipment, e.g. "Alti-Track", "VECTOR 3", "Sabre 1" etc.
// 

Models = new Mongo.Collection('models');

Schemas.Model = new SimpleSchema({
	name: {  
		type: String,
		label: "Name",
		max: 50
	},

	make: {    //Make of the equipment
		type: SimpleSchema.RegEx.Id, //[Object],
		label: "Make",
		optional: true
	},

    gtype: {	//Type of gear
    	type: SimpleSchema.RegEx.Id,
    	label: "Type",
    	optional: true
    },


});

Models.attachSchema(Schemas.Model);

Models.allow({
  'insert': function (userId,doc) {
    /* user and doc checks ,
    return true to allow insert */
    return true; 
  },
  'update': function (userId,doc) {
    /* user and doc checks ,
    return true to allow insert */
    return true; 
  }
});