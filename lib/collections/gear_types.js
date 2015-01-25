// 
// 

GearTypes = new Mongo.Collection('geartypes');

Schemas.GearType = new SimpleSchema({
    
    name: {  
        type: String,
        label: "Type",
        max: 50
    },

    brands: {    //brands that make this type of equipment
      type: [Object],
      label: "Manufacturers",
      optional: true
    },

    "brands.$.id": {
      type: SimpleSchema.RegEx.Id,
      autoform: {
            firstOption: "(Select Manufacturer)",
            options: function() {
              return _.map(Brands.find().fetch(),function (value){
                return {
                    label: value.name, value: value._id};
              })
            }
        }
    },

});

GearTypes.attachSchema(Schemas.GearType);


GearTypes.allow({
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