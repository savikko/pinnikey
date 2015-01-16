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
    date: {
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
	maxjumpers: {
	  type: Number,
	  autoValue: function() {
	  	    //value = 3;
	  	    airplane = this.field('airplane').value;
    		console.log(airplane);
    		value = Airplanes.findOne(airplane).maxjumpers;

    		return value;
    	}
	},
    jumpers: {
    	type: [Object]
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