
function CreateDynamicDebtsGraph() {
  var debtsArray = {
  	debtPerYear: []
  	};	

	d3.text("data/overdraft.csv", function(text) {
	  var dataInput = d3.csv.parseRows(text).map(function(row) {
	    return row.map(function(value) {
	      return +value;
	    });
	  });

	  var debtTotal = dataInput[50]; // get the specific line in the csv

	  var month = 1;
	  var year = 2000;
	  var sum = 0;


	  for (i = 2; i < debtTotal.length; i++) {
	  	month++;
	  	sum += debtTotal[i];

	  	if (month == 13) { 
	  		month = 1; 
	  		sum = sum/12;
	  		sum = Math.round(sum); 

		  	debtsArray.debtPerYear.push({
		  		"year" : year,
		  		"debt" : sum
		  	}); 
	  		sum = 0;
	  		year++; 
	  	}
	  } 

	var debts = debtsArray.debtPerYear;  

	// Set the dimensions of the canvas / graph
		var margin = {top: 30, right: 20, bottom: 30, left: 50},
		    width = 700 - margin.left - margin.right,
		    height = 450 - margin.top - margin.bottom;

		// Parse the date / time
		var parseDate = d3.time.format("%Y").parse;

		// Set the ranges
		var x = d3.time.scale().range([0, width]);
		var y = d3.scale.linear().range([height, 0]);

		// Define the axes
		var xAxis = d3.svg.axis().scale(x).orient("bottom"); 
		var yAxis = d3.svg.axis().scale(y).orient("left"); 	

		// Define the line
		var valueline = d3.svg.line()
		    .x(function(d) { return x(d.year); })
		    .y(function(d) { return y(d.debt); });
		    
		// Adds the svg canvas
		var svg = d3.select("#debtSumGraph")
		    .append("svg")
		    .attr("width", width + margin.left + margin.right)
		    .attr("height", height + margin.top + margin.bottom)
		    .append("g")
		    .attr("transform", "translate(" + margin.left + "," + margin.top + ")"); 

		debts.forEach(function(d) {
			console.log(d.year);
			// d.year = parseDate(d.year.toString());
			// console.log(d.year);
			d.debt = +d.debt;

	    // Scale the range of the data
	    x.domain(d3.extent(debts, function(d) { return d.year; }));
	    y.domain([0, d3.max(debts, function(d) { return d.debt; })]);

	    // Add the valueline path.
	    svg.append("path")
	        .attr("class", "line")
	        .attr("d", valueline(debts)) 
	  		.attr("stroke", "#fff")
		    .attr("stroke-width", 3)
			.attr("fill", "none")

	    // Add the X Axis
	    svg.append("g")
	        .attr("class", "x axis")
	        .attr("transform", "translate(0," + height + ")")
	        .attr("stroke-width", 0)
	        // .attr("stroke", "#ffffff")
	        .attr("fill", "#ffffff")
	        .call(xAxis)
	        .append("text")
	        .attr("x", 630)
	        .attr("y", -20)
	        .text("Year");

	    // Add the Y Axis
	    svg.append("g")
	        .attr("class", "y axis")
	        .attr("stroke-width", 0)
	        // .attr("stroke", "#fff")
	        .attr("fill", "#ffffff")
	        .call(yAxis)
	        .append("text")
	        .attr("transform", "rotate(-90)")
	        .attr("y", -40)
	        .attr("x", -270)
	        .attr("dy", ".71em")
	        // .attr("dy", ".71em")
	        .style("text-anchor", "end")
	        .text("Lowns Amount - billions");

		});

	});
}


















