Dropzones = new Mongo.Collection('dropzones');

Schemas.Dropzone = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        max: 200
    },
    airfield: {
        type: String,
        label: "Airfield"
    },
    website: {
    	type: String,
    	label: "Website",
    	optional: true
    },
    gmapid: {
      type: String,
      label: "Google Maps ID",
      optional: true
    },
    facebook: {
      type: String,
      label: "Facebook link",
      optional: true
    },
    coordinate: {
      type: GeocoordsSchema 
    },
    airplanes: {
      type: [Object],
      optional: true
    },
    "airplanes.$.id": {
      type: SimpleSchema.RegEx.Id
    },
    managers: {
      type: [Object],
      optional: true
    },
    "managers.$.id": {
      type: SimpleSchema.RegEx.Id
    },
    "managers.$.role": {
      type: String,
      allowedValues: ['DZO', 'Safety', 'Manager'],
      optional: true
    }
});

Dropzones.attachSchema(Schemas.Dropzone);

Dropzones.allow({
    'insert': function (userId,doc) {
      /* user and doc checks ,
      return true to allow insert */
      return true; 
    },
    'update': function (userId,doc) {
      /* user and doc checks ,
      return true to allow insert */
      return true; 
    },
  });