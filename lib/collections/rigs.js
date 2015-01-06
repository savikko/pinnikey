Rigs = new Mongo.Collection('rigs');

Schemas.Rig = new SimpleSchema({
    serial: {
        type: String,
        label: "Serial #",
        max: 200
    },
    make: {
        type: String,
        label: "Make"
    },
    model: {
    	type: String,
    	label: "Model",
    	optional: true
    },
    dom: {
      type: Date,
      label: "Date of Manufacture",
      optional: true
    },
    reserve: {
      type: SimpleSchema.RegEx.Id,
      optional: true
    },
    mains: {
      type: [Object],
      optional: true
    },
    "mains.$.id": {
      type: SimpleSchema.RegEx.Id
    },
    managers: {
      type: [Object],
      optional: true
    },
    "managers.$.id": {
      type: SimpleSchema.RegEx.Id
    },
    aad: {
      label: "AAD",
      type: SimpleSchema.RegEx.Id
    }
});

Rigs.attachSchema(Schemas.Rig);

Rigs.allow({
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