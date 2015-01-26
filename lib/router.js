(function(){Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: function() { 
		return Meteor.subscribe('dropzones');
	}
});

// Static pages

Router.route('/', {name: 'home'});

Router.route('/about', {name: 'about'});


// Rigs

Router.route('/rigs', {name: 'rigList'});

Router.route('/rig/new', {name: 'newRig'});

Router.route('/rig/:_id/edit', {
	name: 'editRig',
	data: function() { return Rigs.findOne(this.params._id);}
});

Router.route('/rig/:_id', {
	name: 'rigPage',
	data: function() { return Rigs.findOne(this.params._id);}
});

//Dropzones

Router.route('/dropzones', {
	name: 'dropzonesList',
	waitOn: function() {
		if (!Meteor.user()) { // if not logged in
            this.render('login');
        } else {
		    Meteor.subscribe('dropzones');
		}
	}
});

Router.route('/dropzone/new', {name: 'newDropzone'});

Router.route('/dropzone/:_id/edit', {
	name: 'editDropzone',
	data: function() { return Dropzones.findOne(this.params._id);}
});


Router.route('/dropzone/:_id', {
	waitOn: function() {
				if (!Meteor.user()) { // if not logged in
            this.render('login');
        } else {
		Meteor.subscribe('dropzones');
		}
	},
	onBeforeAction: function (pause) {
           if (!Meteor.user()) { // if not logged in
            // render the login template but keep the url in the browser the same
            this.render('login');
        } else {
        	if (this.data()) { // wait for data to load and then continue
   			// get manager ids to array from dropzone object
        	var ids = _.map(this.data().managers,function (value){ return value.id; });
        	// subscribe to users, only to those users who are managers on this specific dz
        	Meteor.subscribe('users',ids);
        	this.next();
        	}
        }
    },
	name: 'dropzonePage',
	data: function() { 
		return Dropzones.findOne(this.params._id);
	}
});


// Aircrafts

Router.route('/aircrafts', {name: 'aircraftsList'});


Router.route('/aircraft/new', {name: 'newAircraft'});

Router.route('/aircraft/:_id/edit', {

	name: 'editAircraft',
	data: function() { return Aircrafts.findOne(this.params._id);}
});

Router.route('/aircraftitem/:_id', {
	name: 'aircraftItem',
	data: function() { return Aircrafts.findOne(this.params._id);}
});

Router.route('/aircraft/:_id', {
	name: 'aircraftPage',
	data: function() { return Aircrafts.findOne(this.params._id);}
});

// Skydivers (users)

Router.route('/skydiver/:_id', {
	name: 'profileShow',
	data: function() { return Meteor.users.findOne(this.params._id);}
});

Router.route('/skydiver/:_id/edit', {
	name: 'profileEdit',
	data: function() { return Meteor.users.findOne(this.params._id);}
});

// Logbook

Router.route('/logbook/new', {name: 'logBookNewJump'});

Router.route('/logbook/', {name: 'logBook'});

Router.route('/logbook/import', {name: 'logBookImport'});

Router.route('/logbook/:_id/edit', {name: 'logBookEditJump'});

// Manifesting 

Router.route('/manifest/jump', {
	name: 'newManifest',
	onBeforeAction: function (pause) {
           if (!Meteor.user()) { // if not logged in
            this.render('login');
        } else {
        	if (this.data()) { // wait for loads to load and then continue
        	var jumpers = _(this.data().collection.find().fetch()).chain().pluck("jumpers").flatten().pluck("id").value();
        	// subscribe to users, only to those users on current loads
        	Meteor.subscribe('users',jumpers);
        	this.next();
        	}
        }
    },
	waitOn: function() {
		if (!Meteor.user()) { // if not logged in
            this.render('login');
        } else {
		Meteor.subscribe('loads',Meteor.user().profile.currentdz);
		}
	},
	data: function() { 
		return Loads.find({date: new Date()});
	}
});

//Setup

Router.route('/setup/mfrs', {name: 'mfrsList'});
Router.route('/setup/gtypes', {name: 'gearTypesList'});
Router.route('/setup/makes', {name: 'makesList'});

Router.route('/setup/mfrs/:_id/edit', {
	name: 'mfrEdit',
	data: function () { return Mfrs.findOne(this.params._id);}
});

Router.route('/setup/gtypes/:_id/edit', {
	name: 'gearTypeEdit',
	data: function () { return GearTypes.findOne(this.params._id);}
});

Router.route('/setup/makes/:_id/edit', {
	name: 'makeEdit',
	data: function () { return Makes.findOne(this.params._id);}
});

Router.route('/setup/mfrs/new', {name: 'mfrNew'});
Router.route('/setup/gtypes/new', {name: 'gearTypeNew'});
Router.route('/setup/makes/new', {name: 'makeNew'});


})();
