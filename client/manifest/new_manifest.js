Template.newManifest.helpers({
  okToManifest: function() {
    var dropzoneId = Meteor.user().profile.currentdz;
    return Persons.findOne({"dropzone": dropzoneId}).okToManifest;
  },
  aircrafts: function() {
    dzaircrafts = _.map(Dropzones.findOne(Meteor.user().profile.currentdz).aircrafts,function (value){ return value.id; });
  	aircrafts = Aircrafts.find({_id: {$in: dzaircrafts}});
	return aircrafts;
  },
  openloads: function(aircraft) {
    dztz = Dropzones.findOne(Meteor.user().profile.currentdz).timezone;
    startofday = new Date(moment().tz(dztz).startOf('day').toISOString());
    const openloads = Loads.find({aircraft: aircraft, date: {$gte: startofday}, closed: false},{sort: {loadnumber: -1}});
    if (openloads.count()>0) {
      return openloads
      } else {
      return false
    }
  },
  closedloads: function(aircraft) {
    dztz = Dropzones.findOne(Meteor.user().profile.currentdz).timezone;
    startofday = new Date(moment().tz(dztz).startOf('day').toISOString()); // find start of the day using dropzone's timezone
    const closedloads = Loads.find({aircraft: aircraft, date: {$gte: startofday}, closed: true},{sort: {loadnumber: -1}});
    if (closedloads.count()>0) {
      return closedloads
      } else {
      return false
    }
  },
  prettifyDate: function(timestamp) {
    return moment(new Date(timestamp)).format('DD.MM.YYYY');
  },
  currentdz: function() {
  	return Dropzones.findOne(Meteor.user().profile.currentdz).name;
  },
  lastloadempty: function() {
    // Check if last load is there and if it's empty
    console.log('searching..' + Meteor.user().profile.currentdz + aircraft._id );

    lastLoad = Loads.findOne({dropzone: Meteor.user().profile.currentdz, "aircraft" : aircraft._id, date: {$gte: startofday}},{sort: {loadnumber: -1}});
    console.log(lastLoad);
    if (lastLoad) {
      console.log('Found last load with id: ' + lastLoad._id);
      //  Loads.findOne(lastLoad).
      if (Loads.findOne(lastLoad._id).jumpers.length===0) {
        return true
        }
      else { return false }
    }
  }
});

Template.newManifest.events({
    'click #addNewLoad': function(event) {
        event.stopPropagation();
        return Meteor.call("addNewLoad", Meteor.user().profile.currentdz,this._id);
    }
});

