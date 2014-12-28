Template.logBook.helpers({
  jumps: function() {
   return Logbook.find({},{sort: {jumpnumber: -1}});
  }
});

Template.logBook.events({
    'click #newJump': function(event) {
        event.stopPropagation();
        Router.go('logBookNewJump');
    }
});