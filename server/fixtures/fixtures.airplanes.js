if (Airplanes.find().count() === 0) {
  Airplanes.insert({
    registration: 'OH-CHQ',
    make: 'Cessna',
    model: '182',
    mtow: '1338',
    maxaltitude: '4000',
    maxjumpers: '4'
  });
  Airplanes.insert({
    registration: 'OH-CEW',
    make: 'Cessna',
    model: '172',
    mtow: '1100',
    maxaltitude: '2700',
    maxjumpers: '3'
  });
  Airplanes.insert({
    registration: 'OH-CEW',
    make: 'Pilatus',
    model: 'Porter',
    mtow: '2000',
    maxaltitude: '4000',
    maxjumpers: '8'
  });
}
