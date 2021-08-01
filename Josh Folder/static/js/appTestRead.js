// Reading data from JSON
var filePath='data/borough_collision.json'
d3.json(filePath).then(function(data){
    console.log(data)  // Test to ensure file was read in correctly
    dropDown(data);
});

// Populate information for dropdown
function dropDown(collisionData){
    mylist = ["BRONX", "BROOKLYN", "MANHATTAN", "QUEENS", "STATEN ISLAND"]
    for(var i = 0; i < mylist.length; i++) {
        var opt = mylist[i];
        var newOption = d3.select('#selDataset').append('option');
         newOption.text(opt);
         console.log(mylist)}
};

// // Set data to new selection
function optionChanged(selected){
    makeBar(selected);
};

// // Creating Bar Chart of data
function makeBar(sample){
    console.log(sample);  // Test to see if info was read in correctly
    d3.json(filePath).then(function(data){
        var collisionFactor = data['contributing_factor_vehicle_1'];
        var factorTotals = data['contributing_factor_total'];
           console.log(factorTotals)  // Test for info being read
        var traceBar={
            x: factorTotals,
            y: data['contributing_factor_vehicle_1'],
            type: 'bar',
            text: data['contributing_factor_vehicle_1'],
            orientation: 'h'
        };
        var layout ={
            title: "Borough Collision Factors",
            xaxis: { title: "Amount of Collisions" },
        };
        Plotly.newPlot('bar',[traceBar], layout);
    });
};