Meteor.subscribe('dropzones');

Meteor.subscribe('logbook');

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});

Handlebars.registerHelper("prettifyDate", function(timestamp) {
    return new Date(timestamp).toString('dd.MM.yyyy')
});