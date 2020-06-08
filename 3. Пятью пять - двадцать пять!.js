const fs = require("fs");
 
fs.readFile("input.txt", "utf8", 
    function(error, data){
        if (error) throw error; 

        // INPUT
        // 75

        // UPDATE
        console.log(Math.pow(parseInt(data), 2));  
});