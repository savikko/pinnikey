// Makes is a collection of manufacturers of parachuting equipment. All of it!
// The idea is to be able to notify owners about service bulletins etc.

Makes = new Mongo.Collection('makes');

Schemas.Make = new SimpleSchema({
    
    name: {  
        type: String,
        label: "Name",
        max: 160
    },
    
    established: {  
      type: Date,
      label: "It all started in",
      optional: true
    },

    terminated: { 
      type: Date,
      label: "Untill",
      optional: true
    },

    successor: {  // In case the brand continued under different name
      type: Object,
      optional: true
    },
    "makes.$.id": { 
      type: SimpleSchema.RegEx.Id
    },
});

Makes.attachSchema(Schemas.Make);

Makes.allow({
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