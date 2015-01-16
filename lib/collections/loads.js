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
    jumpers: {
    	type: [Object],
    	maxCount: function() {
    		value = 30;
 // I don't know how this works, there should be way to get maxjumpers from airplanes collection
 //   		airplane = this.field("airplane");
 //   		value = Airplanes.findOne().maxjumpers;
    		return value
    	}
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