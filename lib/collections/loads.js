Loads = new Mongo.Collection('loads');

Schemas.Load = new SimpleSchema({
    dropzone: {
        type: SimpleSchema.RegEx.Id,
        label: "Dropzone"
    },
    load: {
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
    		value = 3;
    		return value
    	}
    },
    "jumpers.$.id": {
      type: SimpleSchema.RegEx.Id
    },
    pilot: {
    	type: SimpleSchema.RegEx.Id
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