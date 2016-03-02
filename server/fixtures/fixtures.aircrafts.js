if (Aircrafts.find().count() === 0) {
  Aircrafts.insert({
    registration: 'OH-CHQ',
    make: 'Cessna',
    model: '182',
    mtow: '1338',
    maxaltitude: '4000',
    maxjumpers: 4,
    typeOfFuel: 'JET',
    noOfPilots: 1,
    minJumpers: 3,
    maxJumpers: 5,
    usableWeightForSkydivers: 800,
    maxAltitude: 4000
  });
  Aircrafts.insert({
    registration: 'OH-CEW',
    make: 'Cessna',
    model: '172',
    mtow: '1100',
    maxaltitude: '2700',
    maxjumpers: 3,
    typeOfFuel: 'AVGAS',
    noOfPilots: 1,
    minJumpers: 3,
    maxJumpers: 3,
    usableWeightForSkydivers: 600,
    maxAltitude: 2700
  });
}
