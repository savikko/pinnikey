Template.refuelPanel.helpers({
});

Template.refuelPanel.events({
    'click .refuel': function(event) {
        event.stopPropagation();
        loadid = this._id; //load id
        load = this; // load object for subfunctions
        if (typeof load.refuel === 'undefined') { Pinnikey.speak('Refuel planned after load ' + load.loadnumber,'en'); }
        if (load.refuel===false) { Pinnikey.speak('Refuel after load ' + load.loadnumber,'en'); }
        if (load.refuel===true) { Pinnikey.speak('No refuel after load ' + load.loadnumber,'en'); }
        Meteor.call("reFuel", loadid);
    }
});

Template.refuelPanel.rendered = function() {

};