Loads = new Mongo.Collection('loads');

Schemas.Load = new SimpleSchema({
    dropzone: {
        type: SimpleSchema.RegEx.Id,
        label: "Dropzone"
    },
    loadnumber: {
        type: Number,
        label: "Load number",
        min: 1
    },
    airplane: {
    	type: SimpleSchema.RegEx.Id,
    	label: "Aircraft"
    },
    date: {  // Date when load created
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
    createdBy: {
        type: SimpleSchema.RegEx.Id,
        label: "Load created by"
    },
    closed: { // Manifesting possible to the load
     type: Boolean,
     optional: true
    },
    takeoff: {
     type: Date,
     optional: true
    },
    landing: {
     type: Date,
     optional: true
    },
	maxjumpers: {
	  type: Number,
	  autoValue: function() {
	  	    //value = 3;
            if (this.isInsert) {
	  	    airplane = this.field('airplane').value;
    		console.log(airplane);
    		value = Airplanes.findOne(airplane).maxjumpers;
    		return value;
              } 
            else {
              this.unset();
            }
    	}
	},
    jumpers: {
    	type: [Object],
        optional: true
    },
    "jumpers.$.id": {
      type: SimpleSchema.RegEx.Id
    },
    "jumpers.$.type": {
    	type: String
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
    "jumpers.$.weight": {
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
    pilot: {
    	type: SimpleSchema.RegEx.Id,
    	optional: true
    },
    status: {
    	type: String,
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