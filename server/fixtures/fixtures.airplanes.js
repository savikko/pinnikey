if (Airplanes.find().count() === 0) {
  Airplanes.insert({
    registration: 'OH-CHQ',
    type: 'Cessna 182',
    mtow: '1338',
    maxaltitude: '4000',
    jumpers: '4'
  });
  Airplanes.insert({
    registration: 'OH-CEW',
    type: 'Cessna 172',
    mtow: '1100',
    maxaltitude: '2700',
    jumpers: '3'
  });
}
