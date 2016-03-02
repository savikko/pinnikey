Loads = new Mongo.Collection('loads');

Schemas.Load = new SimpleSchema({
    dropzone: {
        type: SimpleSchema.RegEx.Id,
        label: "Dropzone"
    },
    loadnumber: { // load number of the day of the dropzone of the aircraft, starts every day from 1
        type: Number,
        label: "Load number",
        min: 1
    },
    aircraft: { 
    	type: SimpleSchema.RegEx.Id,
    	label: "Aircraft"
    },
    date: {  // Date when load created, saved UTC
     type: Date,
     autoValue: function() {
	        if (this.isInsert) {
	          return new Date;
	        } 
	        else {
	          this.unset();
	        }
    	}
	},
    createdBy: { // Who created this
        type: SimpleSchema.RegEx.Id,
        label: "Load created by"
    },
    closed: { // Manifesting possible to the load, will be closed at 5 min call
     type: Boolean,
     optional: true
    },
    takeoff: { // Takeoff time
     type: Date,
     optional: true
    },
    landing: { // Landing time (landing time - takeoff time = airtime)
     type: Date,
     optional: true
    },
	maxjumpers: { // This is saved to load because max jumpers can change from time to time
	  type: Number,
	  autoValue: function() {
	  	    //value = 3;
            if (this.isInsert) {
	  	    aircraft = this.field('aircraft').value;
    		console.log(aircraft);
    		value = Aircrafts.findOne(aircraft).maxjumpers;
    		return value;
              } 
            else {
              this.unset();
            }
    	}
	},
    jumpers: { // Who are jumping on this load
    	type: [Object],
        optional: true
    },
    "jumpers.$.id": {
      type: SimpleSchema.RegEx.Id
    },
    "jumpers.$.type": {
    	type: String
    },
    "jumpers.$.price": {
      type: Number
    },
    "jumpers.$.altitude": {
    	type: Number
    },
    "jumpers.$.created_at": {
        type: Date,
        /*autoValue: function() {
              return new Date;
        }*/
    },
    "jumpers.$.weight": { // This is saved here because this can be changed
        type: Number
        //autoValue: 70
        /*function() {
                skydiver = this.siblingField('id').value;
                console.log('here we are');
                console.log(skydiver);
                value =  Meteor.users.findOne(skydiver).profile.weight;
                return value;
        }*/
    },
    pilot: { // Who is piloting this load? ..should there be two of these?
    	type: SimpleSchema.RegEx.Id,
    	optional: true
    },
    status: { // Status of the load; maybe bad choice to use one string-field. Not yet in use.
    	type: String,
    	optional: true
    },
    refuel: { // If true, refuel after load
      type: Boolean,
      optional: true
    }
});

Loads.attachSchema(Schemas.Load);

Loads.allow({
    'insert': function (userId,doc) {
      /* user and doc checks ,
      return true to allow insert */
      return true; 
    },
    'update': function (userId,doc) {
      /* user and doc checks ,
      return true to allow insert */
      return true; 
    },
  });