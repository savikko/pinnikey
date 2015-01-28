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
      type: [Object],
      label: "Manufacturer",
      optional: true
  },

  "mfr.$.id": {
      type: SimpleSchema.RegEx.Id,
      autoform: {
            firstOption: "(Select Manufacturer)",
            options: function() {
              return _.map(Mfrs.find().fetch(),function (value){
                return {
                    label: value.name, value: value._id};
              })
            }
        }
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