AutoForm.hooks({
  newRig: {
    // Called when any operation succeeds, where operation will be
    // "insert", "update", "submit", or the method name.
    onSuccess: function(operation, result, template) {
      FlashMessages.sendSuccess('New rig added.');
      Router.go('rigPage',{_id: this.docId});
    }, 
  }
});