Template._loginButtonsLoggedInDropdown.events({
    'click #login-buttons-edit-profile': function(event) {
        event.stopPropagation();
        Template._loginButtons.toggleDropdown();
        Router.go('profileEdit',{_id: Meteor.userId()});
    },
    'click #login-buttons-show-profile': function(event) {
        event.stopPropagation();
        Template._loginButtons.toggleDropdown();
        Router.go('profileShow',{_id: Meteor.userId()});
    },
    'click #logbook': function(event) {
        event.stopPropagation();
        Template._loginButtons.toggleDropdown();
        Router.go('logBook');
    }
});