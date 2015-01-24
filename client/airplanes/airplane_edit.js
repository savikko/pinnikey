AutoForm.hooks({
  editAirplane: {
    // Called when any operation succeeds, where operation will be
    // "insert", "update", "submit", or the method name.
    onSuccess: function(operation, result, template) {
      FlashMessages.sendSuccess('Airplane edit successful.');
      Router.go('airplanePage',{_id: this.docId});
    }, 
  }
});