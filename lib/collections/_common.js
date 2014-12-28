
Schemas = {};

GeocoordsSchema = new SimpleSchema({
  lng: {
    type : Number,
    decimal: true,
    min: -180,
    max: 180
  }, 
  lat: {
    type : Number,
    decimal: true,
    min: -90,
    max: 90
  }
});