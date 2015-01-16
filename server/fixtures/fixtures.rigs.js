if (Rigs.find().count() === 0) {
	for (var i = 1; i <= 8; i++) {
	   Rigs.insert( { 
	    serial: i,
	    make: "Wings " + i,
	    model: "W5",
	    aad: "Cypres"
	   })
	}
  };


