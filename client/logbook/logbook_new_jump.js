Template.logBookNewJump.helpers({
  jumps: function() {
   return logBook.find();
  }
});

AutoForm.hooks({
  newJump: {
    // Called when any operation succeeds, where operation will be
    // "insert", "update", "submit", or the method name.
    onSuccess: function(operation, result, template) {
      FlashMessages.sendSuccess('New jump added.');
      Router.go('logBook');
    }, 
  }
});