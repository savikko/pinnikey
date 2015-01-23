Meteor.methods({
  addSkydiverToLoad: function (load,altitude,type) {
    user =  Meteor.users.findOne(this.userId);
    console.log(load);
    Loads.update({
      _id: load},
       {$push:{jumpers:{id: this.userId,weight: user.profile.weight,type: type,altitude: altitude,created_at: new Date()}}});
    return true;
  },
  removeSkydiverFromLoad: function (load,jump) {
    console.log('About to delete from load:');
    console.log(load);
    console.log('Jump:');
    console.log(jump);
    Loads.update({_id: load},{$pull:{jumpers: jump}});
    return true;
  },
  addNewLoad: function (dz,airplane) {
    user =  Meteor.users.findOne(this.userId);
    dzobj = Dropzones.findOne(dz);
    lastLoad = Loads.findOne({dropzone: dz, "airplane" : airplane, date: {$gte: moment().tz(dzobj.timezone).startOf('day').toISOString()}},{sort: {loadnumber: -1}});
    if (lastLoad) {
      console.log('found!');
      nextLoad = lastLoad.loadnumber+1;
    }
    else { // we didn't find any loads for today
      console.log('not found!');
      nextLoad = 1;
    };

    Loads.insert({
    dropzone: dz,
    airplane: airplane,
    loadnumber: nextLoad,
    createdBy: this.userId,
    closed: false,
    jumpers: [],
    pilot: "mNQc66f42TYSboGLQ" // static for development purposes for now..
     });
    return true;
  },

});