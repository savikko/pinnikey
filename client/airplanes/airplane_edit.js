AutoForm.hooks({
  editAircraft: {
    // Called when any operation succeeds, where operation will be
    // "insert", "update", "submit", or the method name.
    onSuccess: function(operation, result, template) {
      FlashMessages.sendSuccess('Aircraft edit successful.');
      Router.go('aircraftPage',{_id: this.docId});
    }, 
  }
});