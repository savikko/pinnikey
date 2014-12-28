AutoForm.hooks({
  newDropzone: {
    // Called when any operation succeeds, where operation will be
    // "insert", "update", "submit", or the method name.
    onSuccess: function(operation, result, template) {
      FlashMessages.sendSuccess('New dropzone added.');
      Router.go('dropzonePage',{_id: this.docId});
    }, 
  }
});