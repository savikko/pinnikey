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
      type: [SimpleSchema.RegEx.Id],
      label: "Manufacturers",
      optional: true
    }
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