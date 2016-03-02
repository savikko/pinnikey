
Persons = new Mongo.Collection('person');

Schemas.Model = new SimpleSchema({
  userId: {  
    type: SimpleSchema.RegEx.Id,
    label: "userId",
    optional: false
  },
  dropzone: {    
    type: SimpleSchema.RegEx.Id, 
    label: "Dropzone",
    optional: false
  },
  processed: { // when user request permission to jump at dropzone, this is first false, then,
    type: Boolean, // after it has been processed, this changes to true
    label: "Request to jump has been processed",
    optional: true
  },
  okToManifest: {
    type: Boolean,
    label: "is ok to manifest",
    optional: true
  },
  localid: {
    type: String,
    optional: true,
    label: "Skydiver's local id (unique identification number/string on local database"
  },
  member: {
    type: Boolean,
    optional: true,
    label: "Member of this organization"
  },
  manager: {
    type: Boolean,
    optional: true,
    label: "Manager of the dropzone"
  },
  pilot: {
    type: Boolean,
    optional: true
  }
});

Persons.attachSchema(Schemas.Model);

Persons.allow({
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