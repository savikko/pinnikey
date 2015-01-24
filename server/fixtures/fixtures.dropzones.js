if (Aircrafts.find().count() === 0) {
  Aircrafts.insert({
    registration: 'OH-CHQ',
    type: 'Cessna 182',
    mtow: '1338',
    maxaltitude: '4000',
    jumpers: '4'
  });
  Aircrafts.insert({
    registration: 'OH-CEW',
    type: 'Cessna 172',
    mtow: '1100',
    maxaltitude: '2700',
    jumpers: '3'
  });
}

if (Prices.find().count() === 0) {
  Prices.insert({
    altitude: '1000',
    price: '10'
  });
  Prices.insert({
    altitude: '2000',
    price: '15'
  });
  Prices.insert({
    altitude: '3000',
    price: '20'
  });
  Prices.insert({
    altitude: '4000',
    price: '25'
  });
}

if (Dropzones.find().count() === 0) {
  Dropzones.insert({
    name: 'Skydive Jyväskylä',
    airfield: 'EFJY',
    timezone: 'Europe/Helsinki',
    website: 'http://skydivejkl.fi',
    "coordinate" : { 
      "lat" : 62.244747, 
      "lng" : 25.7472184 },
    facebook: 'https://facebook.com/skydivejkl'
  });

  Dropzones.insert({
    name: 'Skyxperience Malmi',
    airfield: 'EFHF',
    timezone: 'Europe/Helsinki',
    website: 'http://4k.fi',
    "coordinate" : {
      "lat" : 60.250548, 
      "lng" : 25.044466 },
    facebook: 'https://facebook.com/skyXperience'
  });

  Dropzones.insert({
    name: 'Skydive Finland',
    airfield: 'EFUT',
    timezone: 'Europe/Helsinki',
    website: 'http://www.skydivefinland.fi',
    "coordinate" : {
      "lat" : 60.8960838, 
      "lng" : 26.9142337},
    facebook: 'https://facebook.com/Hyppaa.fi'
  });

  Dropzones.insert({
    name: 'Tampereen Laskuvarjokerho',
    airfield: 'EFJM',
    timezone: 'Europe/Helsinki',
    website: 'http://tamlk.fi',
    "coordinate" : {
      "lat" : 60.250548, 
      "lng" : 25.044466 },
    facebook: 'https://facebook.com/TamLK'
  });

    Dropzones.insert({
    name: 'Oulun Laskuvarjokerho',
    airfield: 'EFOU',
    timezone: 'Europe/Helsinki',
    website: 'http://oulunlaskuvarjokerho.fi',
    "coordinate" : {
      "lat" : 64.9315981, 
      "lng" : 25.378418 },
    facebook: 'https://facebook.com/oulunlaskuvarjokerho'
  });

  Dropzones.insert({
    name: 'Skydive Kemi',
    airfield: 'EFKE',
    timezone: 'Europe/Helsinki',
    website: 'http://skydivekemi.fi',
    "coordinate" : {
      "lat" : 65.7815478,  
      "lng" : 24.5743774 },
    facebook: 'https://facebook.com/SkyDiveKemi'
  });

  Dropzones.insert({
    name: 'Alavuden Ilmailukerho',
    airfield: 'EFAL',
    timezone: 'Europe/Helsinki',
    website: 'http://www.alavudenilmailukerho.com',
    "coordinate" : {
      "lat" : 62.5563897,  
      "lng" : 23.5839366 },
    facebook: 'https://www.facebook.com/pages/Alavuden-ilmailukerho-Ry/338279156272194'
  });

  Dropzones.insert({
    name: 'Skydive Pori',
    airfield: 'EFPO',
    timezone: 'Europe/Helsinki',
    website: 'http://satlu.fi',
    "coordinate" : {
      "lat" : 61.4702228, 
      "lng" : 21.793005 },
    facebook: 'https://www.facebook.com/groups/SkydivePori/'
  });
  Dropzones.insert({
    name: 'Hämeen Laskuvarjourheilijat',
    airfield: 'EFPO',
    timezone: 'Europe/Helsinki',
    website: 'https://www.skydivehame.fi',
    "coordinate" : {
      "lat" : 61.143612, 
      "lng" : 25.695555 },
    facebook: 'https://facebook.com/skydivehame'
  });
  Dropzones.insert({
    name: 'Kuopion Laskuvarjourheilijat',
    airfield: 'EFKU',
    timezone: 'Europe/Helsinki',
    website: 'http://klu.fi',
    "coordinate" : {
      "lat" : 63.010038,  
      "lng" : 27.7859932 },
    facebook: 'https://facebook.com/skydiveklu'
  });
  Dropzones.insert({
    name: 'Skydive Karjala',
    airfield: 'EFIM',
    timezone: 'Europe/Helsinki',
    website: 'http://skydivekarjala.fi',
    "coordinate" : {
      "lat" : 61.249722, 
      "lng" : 28.899723},
    facebook: 'https://www.facebook.com/groups/179382638772584/'
  });
  Dropzones.insert({
    name: 'Skydive Oulu',
    airfield: 'EFOU',
    timezone: 'Europe/Helsinki',
    website: 'http://skydiveoulu.fi',
    "coordinate" : {
      "lat" : 64.932872, 
      "lng" : 25.3893525},
    facebook: 'https://www.facebook.com/groups/7257781119/'
  });
  Dropzones.insert({
    name: 'Turun Laskuvarjourheilijat',
    airfield: 'EFTU',
    timezone: 'Europe/Helsinki',
    website: 'http://skydiveturku.fi',
    "coordinate" : {
      "lat" : 60.5081408, 
      "lng" : 22.2679694},
    facebook: 'https://www.facebook.com/groups/20589008808'
  });
  Dropzones.insert({
    name: 'Vaasan Laskuvarjokerho',
    airfield: 'EFVA',
    timezone: 'Europe/Helsinki',
    website: 'http://vaasanlaskuvarjokerho.net',
    "coordinate" : {
      "lat" : 63.045779, 
      "lng" : 21.761341},
    facebook: 'https://www.facebook.com/sdvaasa'
  });
  

}


