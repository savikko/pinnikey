Meteor.methods({
  applyToDropzone: function(dropzone) {
    Persons.insert({
        dropzone: dropzone,
        userId: this.userId,
        processed: false
     });
  },
  acceptUserToManifest: function(personId) {
    Persons.update({_id: personId},{$set: {processed: true, okToManifest: true}});
  },
  denyUserToManifest: function(personId) {
    Persons.update({_id: personId},{$set: {processed: true, okToManifest: false}});
  },
  getJumpPrice: function (aircraft, altitude) {
    if (!aircraft || !altitude) {  // return null if no parameters given
      return null;
    } else {
      var jumpPrice = jumpPriceCalculator(aircraft,altitude);
      return jumpPrice;
    }
  },
  isOkToManifest: function (userId,dropzone){
    var userId =  this.userId;
    var dropzoneObj = Dropzones.findOne({ 
        _id: dropzone,
        people: {
                $elemMatch: {
                    id: userId,
                    okToManifest: true
                    }
                }
        });
    if (!dropzoneObj) {
      console.log('not ok to manifest');
      return false;
    } else {
      console.log('yes ok to manifest');
      return true;
    }
  },
  addSkydiverToLoad: function (load,aircraft,altitude,type) {
    var user =  Meteor.users.findOne(this.userId);
    var jumpPrice = jumpPriceCalculator(aircraft,altitude);
    console.log(load);
    console.log(jumpPrice);
    Loads.update({
      _id: load},
       {$push:{jumpers:{
          id: this.userId,
          weight: user.profile.weight,
          type: type,
          price: jumpPrice,
          altitude: altitude,
          created_at: new Date()
        }}});
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
  addNewLoad: function (dz,aircraft) {
    user =  Meteor.users.findOne(this.userId);
    dzobj = Dropzones.findOne(dz);
    startofday = new Date(moment().tz(dzobj.timezone).startOf('day').toISOString());
    lastLoad = Loads.findOne({dropzone: dz, "aircraft" : aircraft, date: {$gte: startofday}},{sort: {loadnumber: -1}});
    if (lastLoad) {
      console.log('Found last load with id: ' + lastLoad._id);
      //  Loads.findOne(lastLoad).
      if (Loads.findOne(lastLoad._id).jumpers.length===0) {
        nextLoad = 0;
      }
      else {
        nextLoad = lastLoad.loadnumber+1;
      }
    }
    else { // we didn't find any loads for today
      console.log('No loads found for today, adding first one');
      nextLoad = 1;
    }
    // If there is load with no jumpers, do not add new load
    if (nextLoad===0) {
      console.log('There is one load with no jumpers, not adding a new one');
      return false;
    }
    else {
      console.log('Adding new load with loadnumber:' + nextLoad);
      Loads.insert({
        dropzone: dz,
        aircraft: aircraft,
        loadnumber: nextLoad,
        createdBy: this.userId,
        closed: false,
        jumpers: [],
        pilot: "mNQc66f42TYSboGLQ" // static for development purposes for now..
     });
    return true;
    }
  },

  // Load statuses
  loadStatus: function (load,status) {
    console.log('Change in status for load ' + load + '. New status: ' + status);
    if (status=='call5min' || status=='callGo' || status=='offBlock' || status=='takeOff' || status=='landed'|| status=='descend' || status=='onBlock') {
      closedstate = true;
    } else {
      closedstate = false;
    }
    Loads.update({_id: load},{$set: {status: status, closed: closedstate}});
    return true;
  },
  reFuel: function (load,status) {
    currentRefuelState = Loads.findOne(load).refuel;
    console.log('Refuel state for load: ' + load + ' : ' + currentRefuelState);
    if (currentRefuelState===true) {
      newRefuelState = false;
    } else {
      newRefuelState = true;
    }
    Loads.update({_id: load},{$set: {refuel: newRefuelState}});
    console.log('Refuel state for load: ' + load + ' changed to ' + newRefuelState);
    return true;
  },
  pilotChange: function (load) {
    console.log('Changing pilot for the load ' + load + '. New pilot: ' + this.userId);
    Loads.update({_id: load},{$set: {pilot: this.userId}});
    return true;
  },
});