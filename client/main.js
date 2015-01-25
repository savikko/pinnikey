Meteor.subscribe('dropzones');

Meteor.subscribe('aircrafts');

Meteor.subscribe('logbook');

Meteor.subscribe('rigs');

Meteor.subscribe('mfrs');

Meteor.subscribe('makes');

Meteor.subscribe('geartypes');

//Meteor.subscribe('users');

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});


UI.registerHelper('say', function (){
	var saytext = '';
	for (i = 0;i<arguments.length;i++){
	  if (typeof arguments[i] == 'string' || arguments[i] instanceof String) saytext=saytext + ' ' + arguments[i]
	}
	tts.speak(saytext,'fi');

 });