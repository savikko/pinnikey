// Makes is a collection of makes of parachuting equipment, e.g. "Wings", "Optima", "Alti-track"
// The idea is to be able to notify owners about service bulletins etc.

Makes = new Mongo.Collection('makes');

Schemas.Make = new SimpleSchema({
  name: {  
    type: String,
    label: "Name",
    max: 160
  }
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
  }
});