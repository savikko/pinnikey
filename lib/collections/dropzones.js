Dropzones = new Mongo.Collection('dropzones');

Schemas.Dropzone = new SimpleSchema({
    name: { // Name of dropzone (Skydive Närpiö)
        type: String,
        label: "Name",
        max: 200
    },
    airfield: { // ICAO-code of airfield, EFHN
        type: String,
        label: "Airfield"
    },
    timezone: { // Timezone (string), Europe/Helsinki
        type: String,
        label: "Timezone",
        allowedValues: moment.tz.names(),
        autoform: {
          afFieldInput: {
            firstOption: "(Select timezone)"
          }
        }
    },
    website: { // Official website of the dropzone
    	type: String,
    	label: "Website",
    	optional: true
    },
    gmapid: { // Google maps id for landing zone maps, can be found from googlemapsengine url, mid=gmapid
      type: String,
      label: "Google Maps ID",
      optional: true
    },
    facebook: { // Link to official facebook page of dz
      type: String,
      label: "Facebook link",
      optional: true
    },
    coordinate: { // coordinates object
      type: GeocoordsSchema 
    },
    airplanes: { // airplanes which are available on site
      type: [Object],
      optional: true
    },
    "airplanes.$.id": {
      type: SimpleSchema.RegEx.Id
    },
    managers: { // who is managing this property on pinnikey
      type: [Object],
      optional: true
    },
    "managers.$.id": {
      type: SimpleSchema.RegEx.Id
    },
    "managers.$.role": { // role of this manager
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