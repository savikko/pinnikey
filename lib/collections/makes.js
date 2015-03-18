// Makes is a collection of makes of parachuting equipment, e.g. "Wings", "UPT", "ICARUS" etc.
// The idea is to be able to notify owners about service bulletins etc.

Makes = new Mongo.Collection('makes');

Schemas.Make = new SimpleSchema({
  name: {  
    type: String,
    label: "Name",
    max: 50
  },

  mfr: {    //Manufacturer of the equipment
      type: SimpleSchema.RegEx.Id,
      label: "Manufacturer",
      optional: true
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
  }
});