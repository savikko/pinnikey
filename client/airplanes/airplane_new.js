AutoForm.hooks({
  newAirplane: {
    // Called when any operation succeeds, where operation will be
    // "insert", "update", "submit", or the method name.
    onSuccess: function(operation, result, template) {
      FlashMessages.sendSuccess('New airplane added.');
      Router.go('airplanePage',{_id: this.docId});
    }, 
  }
});