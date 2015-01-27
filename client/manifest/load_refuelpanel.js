Template.refuelPanel.helpers({
  refuelstate: function() {
    var refuelbutton = document.getElementById('reFuel-' + this._id);
    if (this.refuel) {
      $(refuelbutton).removeClass("btn-default");      
      $(refuelbutton).addClass("btn-warning");
    } else {
      $(refuelbutton).removeClass("btn-warning");      
      $(refuelbutton).addClass("btn-default");
    }
    return;
  }
});

Template.refuelPanel.events({
    'click .refuel': function(event) {
        event.stopPropagation();
        loadid = this._id; //load id
        Meteor.call("reFuel", loadid);
    }
});

Template.refuelPanel.rendered = function() {

};