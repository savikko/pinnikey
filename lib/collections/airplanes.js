Aircrafts = new Mongo.Collection('aircrafts');

Schemas.Aircraft = new SimpleSchema({
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
    typeOfFuel: { // What is this thing burning
      type: String,
      label: "Type of Fuel",
      allowedValues: ['AVGAS','JET']
    },
    fuelCoG: { // multiplier to calculate fuel momentum
      type: Number,
      decimal: true,
      label: "CoG of fuel",
      optional: true
    },
    noOfPilots: { // How many pilots needed to fly
      type: Number,
      label: "Number of pilots",
      optional: false
    },
    minJumpers: { // Minimum jumpers to go
      type: Number,
      label: "Min jumpers",
      optional: false
    },
    maxJumpers: { // Max number of jumpers who can fit in
      type: Number,
      label: "Max jumpers",
      optional: false
    },    
    usableWeightForSkydivers: { // How much skydivers can weight in total in kilos
      label: "Usable weight (for skydivers)",
      type: Number,
      optional: true
    },
    maxAltitude: { // maximum altitude in meters
    	type: Number,
    	optional: true
    },
    seats: { // Seats object
      type: [Object],
      /*  // Now commented out as functions does not work on min/maxCount
      minCount: function () {
        return this.field('minJumpers').value;
      },
      maxCount: function () {
        return this.field('maxJumpers').value;
      }, */
      optional: true
    },
    "seats.$.place": { // number of the seat in the plane, first place is the first to exit
      type: Number,
      label: "Number of the seat",
      optional: false
    },
    "seats.$.cog": { // number to calculate mass effect from center of gravity point
      type: Number,
      label: "From the CoG",
      decimal: true,
      optional: false
    },
    "seats.$.description": { // descriptive place of the seat
      type: String,
      label: "Where is this seat?",
      optional: false
    },
    slotPrices: {
      type: [Object],
      optional: true,
      label: "Slot prices"
    },
    "slotPrices.$.altitude": {
      type: Number,
      min: 600,
      max: 10000
    },
    "slotPrices.$.price": {
      type: Number,
      min: 0,
      max: 500
    },
    currentAltitude: {
      type: Number,
      optional: true
    },
    currentSpeed: {
      type: Number,
      optional: true
    }
});

Aircrafts.attachSchema(Schemas.Aircraft);

Aircrafts.allow({
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