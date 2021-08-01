// Reading data from JSON
var filePath='data/borough_collision.json'
d3.json(filePath).then(function(data){
    console.log(data)  // Test to ensure file was read in correctly
});

var data = [{
    type: 'bar',
    x: ['BRONX', 'BROOKYLN', 'MANHATTAN', 'QUEENS', 'STATEN ISLAND'],
    y: [173776, 382132, 278501, 326016, 51252],
    // orientation: 'h'
  }];
var layout ={
    title: "Total Collisions by Borough",
    xaxis: { title: "Borough" },
};
  
Plotly.newPlot('bar', data, layout);