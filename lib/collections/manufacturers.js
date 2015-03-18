// Mfrs is a collection of manufacturers of parachuting equipment. All of it!
// 

Mfrs = new Mongo.Collection('mfrs');

Schemas.Mfr = new SimpleSchema({
    
    name: {  
        type: String,
        label: "Company Name",
        max: 50
    },

    url: {
      type: String,
      regEx: SimpleSchema.RegEx.Url,
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
      defaultValue: null,
      optional: true,
      custom: function () {
        var terminated = this.value;
        if(!terminated) return true;

        var terminatedBeforeEstablished = terminated < this.field('established').value;
        if (terminatedBeforeEstablished) {
           return "terminatedBeforeEstablished";
        }
      }
    },

    successor: {  // In case the brand continued under different name
      type: SimpleSchema.RegEx.Id,
      label: "Successor",
      optional: true,
      autoform: {
        firstOption: "(Select Successor)",
        options: function() { //all manufacturers except self
          var selfId = Router.current().data()._id; // this feels like a workaround: self _id sould be available more explicitly
          return _.map( Mfrs.find({_id:{$ne: selfId}}).fetch(), function (value){
            return {label: value.name, value: value._id};
          });
        }
      }
    },

});
i 

Schemas.Mfr.messages({
  "terminatedBeforeEstablished": "Terminated before established. Really?"
});

Mfrs.attachSchema(Schemas.Mfr);


Mfrs.allow({
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