function loadData() {
  var margin = {top: 50, right: 20, bottom: 30, left: 40},
        width = 700 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    var x0 = d3.scale.ordinal()
        .rangeRoundBands([-50, width], 3);

    var x1 = d3.scale.ordinal();

    var y = d3.scale.linear()
        .range([height, 0]);

    var color = d3.scale.ordinal()
        .range(["#EA471B","#F4EFCD","#F1683A","#EFE8BD","#ED7251","#EDE4AB","#EA8368","#EADD94","#E8947E","#E8D97E","#EFA28E","#E5D265","#F2B09E","#E8D252","#E85F42","#ffffff"]);
    var xAxis = d3.svg.axis()
        .scale(x0)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .tickFormat(d3.format(".2s"));

    var svg = d3.select("#map_graph").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.csv("datamap/debts_refunds_negev.csv", function(error, data) {
      if (error) throw error;

      var ageNames = d3.keys(data[0]).filter(function(key) { return key !== "region"; });

      data.forEach(function(d) {
        d.ages = ageNames.map(function(name) { return {name: name, value: +d[name]}; });
      });

      x0.domain(data.map(function(d) { return d.region; }));
      x1.domain(ageNames).rangeRoundBands([0, x0.rangeBand()]);
      y.domain([0, d3.max(data, function(d) { return d3.max(d.ages, function(d) { return d.value; }); })]);

      svg.append("g")
          .attr("class", "x axis")
          .style('fill', 'white')
          .style('font-size', '18px')
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis);


      svg.append("g")
          .attr("class", "y axis")
          .style('fill', 'white')
          .call(yAxis)
        .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("Debts value")
          .style('fill', 'white');

      var region = svg.selectAll(".region")
          .data(data)
        .enter().append("g")
          .attr("class", "g")
          .attr("transform", function(d) { return "translate(" + x0(d.region) + ",0)"; });

      region.selectAll("rect")
          .data(function(d) { return d.ages; })
        .enter().append("rect")
          .attr("width", 18)
          .attr("x", function(d) { return x1(d.name); })
          .attr("y", function(d) { return y(d.value); })
          .attr("height", function(d) { return height - y(d.value); })
          .style("fill", function(d) { return color(d.name); });

      var legend = svg.selectAll(".legend")
          .data(ageNames.slice().reverse())
        .enter().append("g")
          .attr("class", "legend")
          .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

      legend.append("rect")
          .attr("x", width - 18)
          .attr("width", 18)
          .attr("height", 18)
          .style("fill", color);

      legend.append("text")
          .attr("x", width - 124)
          .attr("y", 9)
          .attr("dy", ".35em")
          .style("text-anchor", "end")
          .style('fill', 'white')
          .text(function(d) { return d; });

    });
}