(function(){Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: function() { return Meteor.subscribe('dropzones'); }
});

Router.route('/dropzones', {name: 'dropzonesList'});

Router.route('/dropzone/new', {name: 'newDropzone'});

Router.route('/dropzone/:_id/edit', {
	name: 'editDropzone',
	data: function() { return Dropzones.findOne(this.params._id);}
});


Router.route('/dropzone/:_id', {
	name: 'dropzonePage',
	data: function() { return Dropzones.findOne(this.params._id);}
});

Router.route('/airplanes', {name: 'airplanesList'});

Router.route('/about', {name: 'about'});

Router.route('/airplane/new', {name: 'newAirplane'});

Router.route('/airplane/:_id/edit', {
	name: 'editAirplane',
	data: function() { return Airplanes.findOne(this.params._id);}
});

Router.route('/airplaneitem/:_id', {
	name: 'airplaneItem',
	data: function() { return Airplanes.findOne(this.params._id);}
});

Router.route('/airplane/:_id', {
	name: 'airplanePage',
	data: function() { return Airplanes.findOne(this.params._id);}
});

Router.route('/skydiver/:_id', {
	name: 'profileShow',
	data: function() { return Meteor.users.findOne(this.params._id);}
});

Router.route('/skydiver/:_id/edit', {
	name: 'profileEdit',
	data: function() { return Meteor.users.findOne(this.params._id);}
});

Router.route('/manifest/jump', {name: 'newManifest'});

Router.route('/logbook/new', {name: 'logBookNewJump'});

Router.route('/logbook/', {name: 'logBook'});

Router.route('/logbook/:_id/edit', {name: 'logBookEditJump'});

})();
