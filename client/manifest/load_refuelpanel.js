Template.refuelPanel.helpers({
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