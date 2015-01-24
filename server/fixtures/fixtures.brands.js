if (Brands.find().count() === 0) {

  Brands.insert({
    name: 'Sunrise Manufacturing International Inc.'
  });

  Brands.insert({
    name: 'United Parachute Technologies'
  });

  Brands.insert({
    name: 'Sky Wide Systems'
  });

  Brands.insert({
    name: 'Sun Path Products, Inc.'
  });

  Brands.insert({
    name: 'Paratec GmbH'
  });

}

// Schemas.Brand = new SimpleSchema({
    
//     name: {  
//         type: String,
//         label: "Name",
//         max: 50
//     },
    
//     established: {  
//       type: Date,
//       label: "Established",
//       optional: true
//     },

//     terminated: { 
//       type: Date,
//       label: "Terminated",
//       optional: true
//     },

//     successor: {  // In case the brand continued under different name
//       type: SimpleSchema.RegEx.Id,
//       label: "Successor",
//       optional: true
//     }
// });