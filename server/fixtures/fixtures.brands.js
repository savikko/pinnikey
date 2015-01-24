if (Brands.find().count() === 0) {

  Brands.insert({
    name: 'Sunrise Manufacturing International Inc.',
    url: "http://www.skydivewings.com/"
  });

  Brands.insert({
    name: 'United Parachute Technologies',
    url: "http://www.unitedparachutetechnologies.com/"
  });

  Brands.insert({
    name: 'Sky Wide Systems',
    url: "http://sws.aero/",
    established: new Date('2006','11')
  });

  Brands.insert({
    name: 'Sun Path Products, Inc.',
    url: "http://www.sunpath.com/"
  });

  Brands.insert({
    name: 'Paratec GmbH',
    url: "http://www.paratec.de/"
  });

}

