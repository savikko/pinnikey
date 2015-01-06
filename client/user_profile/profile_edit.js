AutoForm.hooks({
  profileEdit: {
    // Called when any operation succeeds, where operation will be
    // "insert", "update", "submit", or the method name.
    onSuccess: function(operation, result, template) {
      FlashMessages.sendSuccess('User profile modified.');
      Router.go('profileShow',{_id: this.docId});
    }, 
  }
});