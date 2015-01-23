Airplanes = new Mongo.Collection('airplanes');

Schemas.Airplane = new SimpleSchema({
    registration: { // registration e.g. OH-WTF
    	type: String,
    	label: "Registration",
    },
    make: { // Cessna etc
        type: String,
        label: "Make",
        max: 200
    },
    model: { // 208 Caravan
        type: String,
        label: "Model"
    },
    mtow: { // Maximum take off weight in kilos
      type: Number,
      label: "Mtow",
      optional: true
    },
    minjumpers: { // Minimum jumpers to go
      type: String,
      label: "Min jumpers",
      optional: true
    },
    maxjumpers: { // Max number of jumpers who can fit in
      type: Number,
      label: "Max jumpers",
      optional: true
    },    
    usableweight_forskydivers: { // How much skydivers can weight in total in kilos
      label: "Usable weight (for skydivers)",
      type: Number,
      optional: true
    },
    maxaltitude: { // maximum altitude in meters
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