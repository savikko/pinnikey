Meteor.subscribe('dropzones');

Meteor.subscribe('airplanes');

Meteor.subscribe('logbook');


Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});