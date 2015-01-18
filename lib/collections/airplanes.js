Airplanes = new Mongo.Collection('airplanes');

Schemas.Airplane = new SimpleSchema({
    registration: {
    	type: String,
    	label: "Registration",
    },
    make: {
        type: String,
        label: "Make",
        max: 200
    },
    model: {
        type: String,
        label: "Model"
    },
    mtow: {
      type: Number,
      label: "Mtow",
      optional: true
    },
    minjumpers: {
      type: String,
      label: "Min jumpers",
      optional: true
    },
    maxjumpers: {
      type: Number,
      label: "Max jumpers",
      optional: true
    },    
    usableweight_forskydivers: {
      label: "Usable weight (for skydivers)",
      type: Number,
      optional: true
    },
    maxaltitude: {
    	type: Number,
    	optional: true
    }
});

Airplanes.attachSchema(Schemas.Airplane);

Airplanes.allow({
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