// Reading data from CSV
var filePath='data/borough_collision.csv'
d3.csv(filePath).then(function(data){
    console.log(data)  // Test to ensure file was read in correctly
    dropDown(data);
});

// Populate information for dropdown
function dropDown(collisionData){
    mylist = ["Bronx", "Brooklyn", "Manhattan", "Queens", "Staten Island"]
    for(var i = 0; i < mylist.length; i++) {
        var opt = mylist[i];
        var newOption = d3.select('#selDataset').append('option');
         newOption.text(opt);
         console.log(mylist)}
};

