AutoForm.hooks({
  newAircraft: {
    // Called when any operation succeeds, where operation will be
    // "insert", "update", "submit", or the method name.
    onSuccess: function(operation, result, template) {
      FlashMessages.sendSuccess('New aircraft added.');
      Router.go('aircraftPage',{_id: this.docId});
    }, 
  }
});