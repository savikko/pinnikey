Template.navbar.helpers({
  dropzones: function() {
   return Dropzones.find();
  },
  airplanes: function() {
   return Airplanes.find();
  },
  rigs: function() {
   return Rigs.find();
  }
});