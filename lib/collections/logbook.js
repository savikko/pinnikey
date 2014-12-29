Logbook = new Mongo.Collection('logbook');

Schemas.Logbook = new SimpleSchema({
    jumpnumber: {
        type: Number,
        min: 0,
        label: "Jump number"
    },
    dateofjump: {
        type: Date,
        label: "Date",
        optional: false
    },
    location: {
        type: String,
        label: "Location of the jump"
    },
    altitude: {
        type: Number,
        min: 5,
        max: 10000,
        label: "Altitude (in meters)"
    },
    rig: {
        type: String,
        label: "Rig used"
    },
    freefallTime: {
        type: Number,
        min: 0,
        max: 500,
        label: "Freefall time (s)"
    },
    openingAltitude: {
        type: Number,
        min: 5,
        max: 10000,
        label: "Opening altitude (m)"
    },
    aircraft: {
        type: String,
        label: "Aircraft"
    },
    description: {
        type: String,
        label: "Description of the jump",
        autoform: {
          rows: 5
        }
    },   
    createdBy: {
      type: String,
      autoValue:function(){ return this.userId }
    }
});

Logbook.attachSchema(Schemas.Logbook);

Logbook.allow({
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