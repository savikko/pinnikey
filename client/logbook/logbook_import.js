Template.logBookImport.events({
    'click #readCsv': function(event) {
        event.stopPropagation();
        var csv = document.getElementById("csv").value;
        var results = Papa.parse(csv, {
			header: true
		  });
        console.log(results);
        document.getElementById("results").innerHTML = 'OK:' + results.data.length + '. Errors: ' + results.errors.length + '.';
        document.getElementById("extendedResultsOKs").innerHTML = JSON.stringify(results.data);
        document.getElementById("extendedResultsErrors").innerHTML = JSON.stringify(results.errors);
    }
});