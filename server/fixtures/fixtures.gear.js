if (Mfrs.find().count() === 0) {

  Mfrs.insert({ name : "United Parachute Technologies", url : "http://www.unitedparachutetechnologies.com/"});
  Mfrs.insert({ name : "Sky Wide Systems", url : "http://sws.aero/", established : new Date('2006','11')});
  Mfrs.insert({ name : "Sun Path Products, Inc.", url : "http://www.sunpath.com/"});
  Mfrs.insert({ name : "Paratec GmbH", url : "http://www.paratec.de/"});
  Mfrs.insert({ name : "LARSEN & BRUSGAARD", url : "http://www.l-and-b.dk/about/history", established : new Date('1994')});
  Mfrs.insert({ name : "Airtec GmbH", url : "http://www.cypres.cc/"});
  Mfrs.insert({ name : "ICARUS Canopies", url : "http://www.icaruscanopies.aero/", established : new Date('1999')});
  Mfrs.insert({ name : "MIRAGE SYSTEMS, INC.", url : "https://www.miragesys.com/", established : new Date('2004')});
  Mfrs.insert({ name : "Sunrise Manufacturing International Inc.", url : "http://www.skydivewings.com/"});
  
}


if (GearTypes.find().count() === 0) {

  GearTypes.insert({ name : "Skydiving Rig" });
  GearTypes.insert({ name : "Reserve Canopy" });
  GearTypes.insert({ name : "Main Canopy" });
  GearTypes.insert({ name : "AAD" });
  GearTypes.insert({ name : "Audible Altimeter" });
  GearTypes.insert({ name : "Visual Altimeter" });
  GearTypes.insert({ name : "Custom made device" });

}

if (Makes.find().count() === 0) {

  Makes.insert({ name : "UPT" });
  Makes.insert({ name : "PD" });
  Makes.insert({ name : "MIRAGE" });
  Makes.insert({ name : "WINGS" });
  Makes.insert({ name : "CYPRES" });
  Makes.insert({ name : "L&B" });
  Makes.insert({ name : "SWS" });
  Makes.insert({ name : "ICARUS" });
  Makes.insert({ name : "SKYLARK" });


}