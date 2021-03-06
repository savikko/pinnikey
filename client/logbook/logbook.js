Template.logBook.helpers({
  jumps: function() {
   return Logbook.find({},{sort: {jumpnumber: -1}});
  },
  prettifyDate: function(timestamp) {
    return moment(new Date(timestamp)).format('DD.MM.YYYY');
  }
});

Template.logBook.events({
    'click #newJump': function(event) {
        event.stopPropagation();
        Router.go('logBookNewJump');
    },
    'click #importJumps': function(event) {
        event.stopPropagation();
        Router.go('logBookImport');
    }
});