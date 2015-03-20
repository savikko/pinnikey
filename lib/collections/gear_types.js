// 
// 

GearTypes = new Mongo.Collection('geartypes');

Schemas.GearType = new SimpleSchema({
    
    name: {  
        type: String,
        label: "Type",
        max: 50
    },

    makes: {    //makes of this type of equipment
      type: [SimpleSchema.RegEx.Id],
      label: "Makes",
      optional: true,
      autoform: {
        firstOption: "(Select Make)",
        options: function() {
          return _.map(Makes.find().fetch(),function (value){
            return {label: value.name, value: value._id};
          });
        }
      }
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