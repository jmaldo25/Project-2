// Define SVG area dimensions
var svgWidth = 1240;
var svgHeight = 800;

// Define the chart's margins as an object
var chartMargin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30
};

// Define dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// Select body, append SVG area to it, and set the dimensions
var svg = d3
  .select("body")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// Append a group to the SVG area and shift ('translate') it to the right and down to adhere
// to the margins set in the "chartMargin" object.
var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// Load data from hours-of-tv-watched.csv
d3.csv("borough_collision.csv").then(function(collisionData) {

  // Print the tvData
  console.log(collisionData);

  // Cast the hours value to a number for each piece of tvData
  collisionData.forEach(function(data) {
    data.contributing_factor_total = +data.contributing_factor_total;
  });

  var barSpacing = 10; // desired space between each bar
  var scaleY = 10; // 10x scale on rect height

  // Create a 'barWidth' variable so that the bar chart spans the entire chartWidth.
  var barWidth = (chartWidth - (barSpacing * (collisionData.length - 1))) / collisionData.length;

  // @TODO
  // Create code to build the bar chart using the tvData.
  chartGroup.selectAll(".bar")
    .data(collisionData)
    .enter()
    .append("rect")
    .classed("bar", true)
    .attr("width", d => barWidth) // equivalent to .attr("width", "91.11")
    .attr("height", d => d.contributing_factor_total * scaleY)
    .attr("x", (d, i) => i * (barWidth + barSpacing))
    .attr("y", d => chartHeight - d.hours * scaleY);
}).catch(function(error) {
  console.log(error);
});