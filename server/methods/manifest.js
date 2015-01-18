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
    Loads.update({_id: load},{$pull:{jumpers: jump}});
    return true;
  },
  addNewLoad: function (dz,airplane) {
    user =  Meteor.users.findOne(this.userId);
    lastLoad = Loads.findOne({dropzone: dz, "airplane" : airplane, date: {$gte: moment().startOf('day')._d}},{sort: {loadnumber: -1}});
    if (lastLoad) {
      console.log('found!');
      nextLoad = lastLoad.loadnumber+1;
    }
    else {
      console.log('not found!');
      nextLoad = 1;
    };
    //nextLoad = 1;
    console.log ('Next load is:');
    console.log(nextLoad);
    // dz = Dropzones.findOne(user.profile.currentdz);
    Loads.insert({
    dropzone: dz,
    airplane: airplane,
    loadnumber: nextLoad,
    createdBy: this.userId,
    jumpers: [],
    pilot: "mNQc66f42TYSboGLQ"
     });
    return true;
  },

});