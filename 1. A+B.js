const fs = require("fs");
 
fs.readFile("input.txt", "utf8", 
    function(error, data){
        if (error) throw error; 

        // UPDATE
        data = data.split(' ').map(elem => parseInt(elem))
        console.log(data.reduce((a, b) => a + b));  
});