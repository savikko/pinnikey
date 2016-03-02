jumpPriceCalculator = function(aircraft, altitude) {
      var aircraft = Aircrafts.findOne(aircraft);
      var slotPrices = aircraft.slotPrices;
      _.sortBy(slotPrices, 'altitude');
      function search(altitude, slotPrices){
      for (var i=0; i < slotPrices.length; i++) {
          if (slotPrices[i].altitude >= altitude) {
              return slotPrices[i];
          }
        }
      }
      var slotPrice = search(altitude, slotPrices);
      console.log("Korkeuden " + altitude + " slottihinta on " + slotPrice.price + "EUR");
      var jumpPrice = slotPrice.price;
      return jumpPrice;
}