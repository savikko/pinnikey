// Brands is a collection of manufacturers of parachuting equipment. All of it!
// 

Brands = new Mongo.Collection('brands');

Schemas.Brand = new SimpleSchema({
    
    name: {  
        type: String,
        label: "Name",
        max: 50
    },

    url: {
      type: String,
      label: "Website",
      optional: true
    },
    
    established: {  
      type: Date,
      label: "Established",
      optional: true
    },

    terminated: { 
      type: Date,
      label: "Terminated",
      optional: true
    },

    successor: {  // In case the brand continued under different name
      type: SimpleSchema.RegEx.Id,
      label: "Successor",
      optional: true
    },

    makes: {    //the bunch of stuff
      type: [SimpleSchema.RegEx.Id],
      label: "Makes",
      optional: true
    }
});

Brands.attachSchema(Schemas.Brand);


Brands.allow({
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