Template.navbar.helpers({
  dropzones: function() {
   return Dropzones.find();
  },
  aircrafts: function() {
   return Aircrafts.find();
  },
  rigs: function() {
   return Rigs.find();
  }
});